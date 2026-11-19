import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { z } from 'zod';

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  if (!data) throw new Error('Only Ank Darppan admins can do this.');
}

export const isAdmin = createServerFn({ method: 'GET' }).middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
    return data === true;
  });

export const listApprovals = createServerFn({ method: 'GET' }).middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { data, error } = await supabaseAdmin.from('facebook_eligibility').select('facebook_id,follower_verified,subscriber_verified,reviewed_at,verification_code_hash').order('reviewed_at', { ascending: false, nullsFirst: false });
    if (error) throw new Error('Approvals could not be loaded.');
    return (data ?? []).map(r => ({ facebookId: r.facebook_id, follower: r.follower_verified, subscriber: r.subscriber_verified, reviewedAt: r.reviewed_at, hasCode: !!r.verification_code_hash }));
  });

export const saveApproval = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => z.object({
    facebookId: z.string().trim().min(1).max(100).regex(/^[a-zA-Z0-9._-]+$/),
    status: z.enum(['follower', 'subscriber']),
    code: z.string().trim().min(6).max(64),
  }).parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { hashToken } = await import('./razorpay.server');
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('facebook_eligibility').upsert({
      facebook_id: data.facebookId.toLowerCase(), follower_verified: data.status === 'follower', subscriber_verified: data.status === 'subscriber',
      verification_code_hash: await hashToken(data.code), reviewed_at: new Date().toISOString(),
    });
    if (error) throw new Error('Approval could not be saved.');
    return { ok: true };
  });

export const removeApproval = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => z.object({ facebookId: z.string().trim().min(1).max(100) }).parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('facebook_eligibility').update({ follower_verified: false, subscriber_verified: false, verification_code_hash: null }).eq('facebook_id', data.facebookId.toLowerCase());
    if (error) throw new Error('Approval could not be removed.');
    return { ok: true };
  });

const orderId = z.object({ id: z.string().uuid() });
const FULL = 94100;

export const listOrders = createServerFn({ method: 'GET' }).middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { data, error } = await supabaseAdmin.from('report_orders')
      .select('id,created_at,paid_at,status,amount_paise,coupon_code,facebook_id,claimed_status,review_status,balance_link_url,details')
      .in('status', ['paid', 'delivered']).order('created_at', { ascending: false }).limit(200);
    if (error) throw new Error('Orders could not be loaded.');
    return (data ?? []).map(o => {
      const d = (o.details ?? {}) as Record<string, string>;
      return { id: o.id, createdAt: o.created_at, amount: o.amount_paise, balance: FULL - o.amount_paise, coupon: o.coupon_code, facebookId: o.facebook_id, claimed: o.claimed_status,
        review: o.review_status, balanceUrl: o.balance_link_url, name: d['fullName'] ?? '', whatsapp: d['whatsapp'] ?? '', email: d['email'] ?? '' };
    });
  });

export const markGenuine = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => orderId.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('report_orders').update({ eligibility_verified: true, review_status: 'genuine', reviewed_at: new Date().toISOString() }).eq('id', data.id).in('status', ['paid', 'delivered']);
    if (error) throw new Error('Order could not be updated.');
    return { ok: true };
  });

export const requestBalance = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => orderId.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { razorpayRequest, safePaymentUrl } = await import('./razorpay.server');
    const { data: o } = await supabaseAdmin.from('report_orders').select('amount_paise,status,details,balance_link_url').eq('id', data.id).maybeSingle();
    if (!o || o.status !== 'paid') throw new Error('Only paid orders can be asked for a balance.');
    if (o.balance_link_url) return { url: o.balance_link_url };
    const balance = FULL - o.amount_paise;
    if (balance <= 0) throw new Error('This order is already paid in full.');
    const d = (o.details ?? {}) as Record<string, string>;
    const link = await razorpayRequest('/v1/payment_links/', {
      amount: balance, currency: 'INR', accept_partial: false, reference_id: `${data.id.slice(0, 30)}-bal`,
      description: 'Balance for Ank Darppan Sampurna Lal Kitab Report',
      customer: { name: d['fullName'], contact: d['whatsapp'] ? `+91${d['whatsapp']}` : undefined, email: d['email'] },
      notify: { sms: true, email: true }, reminder_enable: true, notes: { report_order: data.id, balance: 'yes' },
    });
    if (link.amount !== balance || link.currency !== 'INR') throw new Error('Razorpay returned an incorrect amount.');
    const url = safePaymentUrl(link.short_url);
    const { error } = await supabaseAdmin.from('report_orders').update({ review_status: 'balance_requested', balance_link_id: link.id, balance_link_url: url, reviewed_at: new Date().toISOString() }).eq('id', data.id);
    if (error) throw new Error('Balance link could not be saved.');
    return { url };
  });

export const checkBalance = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => orderId.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { razorpayRequest } = await import('./razorpay.server');
    const { data: o } = await supabaseAdmin.from('report_orders').select('amount_paise,balance_link_id').eq('id', data.id).maybeSingle();
    if (!o?.balance_link_id) throw new Error('No balance link for this order.');
    const link = await razorpayRequest(`/v1/payment_links/${o.balance_link_id}`);
    const balance = FULL - o.amount_paise;
    const paid = link.status === 'paid' && link.amount === balance && link.amount_paid === balance && link.currency === 'INR' && (link.payments ?? []).some((p: { status: string; amount: number }) => p.status === 'captured' && p.amount === balance);
    if (!paid) return { paid: false };
    await supabaseAdmin.from('report_orders').update({ eligibility_verified: true, review_status: 'balance_paid', reviewed_at: new Date().toISOString() }).eq('id', data.id);
    return { paid: true };
  });
