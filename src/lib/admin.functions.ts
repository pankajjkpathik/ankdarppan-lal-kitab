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
