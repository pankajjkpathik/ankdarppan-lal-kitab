import { createServerFn } from '@tanstack/react-start';
import { getRequest } from '@tanstack/react-start/server';
import { reportOrderSchema, orderAccessSchema, verifiedPayment } from './report-order-schema';
import { calculateReportPrice } from './checkout-pricing';
import { eligiblePrice } from './eligibility';
import { z } from 'zod';

// Eligibility is only revealed to a caller who proves ownership with the private code issued after review.
async function reviewedEligibility(facebookId: string, code: string) {
  if (!facebookId || !code) return null;
  const { hashToken } = await import('./razorpay.server');
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { data } = await supabaseAdmin.from('facebook_eligibility').select('follower_verified,subscriber_verified,verification_code_hash').eq('facebook_id', facebookId.toLowerCase()).maybeSingle();
  if (!data?.verification_code_hash || data.verification_code_hash !== await hashToken(code.trim())) return null;
  return { follower_verified: data.follower_verified, subscriber_verified: data.subscriber_verified };
}

export const checkSocialEligibility = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => z.object({ facebookId: z.string().trim().min(1).max(100).regex(/^[a-zA-Z0-9._-]+$/), verificationCode: z.string().trim().min(6).max(64), coupon: z.enum(['Follower20', 'Subscriber50']) }).parse(input))
  .handler(async ({ data }) => {
    return eligiblePrice(data.coupon, await reviewedEligibility(data.facebookId, data.verificationCode));
  });

export const createReportPayment = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => reportOrderSchema.parse(input))
  .handler(async ({ data }) => {
    const price = calculateReportPrice(data.coupon);
    if (data.coupon && !price.coupon) throw new Error('Invalid coupon. Please remove it or use an available coupon.');
    const { accessToken, hashToken, razorpayRequest, safePaymentUrl } = await import('./razorpay.server');
    const id = crypto.randomUUID();
    const token = await accessToken(id);
    const origin = new URL(getRequest().url).origin;
    const callback = `${origin}/checkout/confirmation?order=${id}&token=${token}`;
    // Privileged write is restricted to a newly minted guest order, never arbitrary rows.
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    // Discounts are charged on the customer's claim; the order stays unverified until reviewed by the team.
    const eligibility = { amount: price.total, verified: false };
    const { error: insertError } = await supabaseAdmin.from('report_orders').insert({
      id, access_hash: await hashToken(token), details: data, amount_paise: eligibility.amount, coupon_code: price.coupon?.code ?? null,
      facebook_id: data.facebookId.toLowerCase() || null, claimed_status: data.claimedStatus, eligibility_verified: eligibility.verified,
    });
    if (insertError) throw new Error('Your order could not be saved. No payment has been taken.');
    try {
      const link = await razorpayRequest('/v1/payment_links/', {
        amount: eligibility.amount, currency: 'INR', accept_partial: false, reference_id: id,
        description: 'Ank Darppan Sampurna Lal Kitab Report',
        customer: { name: data.fullName, contact: `+91${data.whatsapp}`, email: data.email },
        notify: { sms: false, email: false }, reminder_enable: false,
        notes: { report_order: id, coupon: price.coupon?.code ?? 'none' },
        callback_url: callback, callback_method: 'get',
      });
      if (link.amount !== eligibility.amount || link.currency !== 'INR' || link.reference_id !== id) throw new Error('Razorpay returned an incorrect order amount.');
      const paymentUrl = safePaymentUrl(link.short_url);
      const { error } = await supabaseAdmin.from('report_orders').update({ razorpay_link_id: link.id }).eq('id', id);
      if (error) throw new Error('The payment page could not be saved. Please contact Ank Darppan.');
      return { order: id, token, paymentUrl, amount: eligibility.amount };
    } catch (error) {
      await supabaseAdmin.from('report_orders').update({ status: 'failed', details: null }).eq('id', id);
      throw error;
    }
  });

export const checkReportPayment = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => orderAccessSchema.parse(input))
  .handler(async ({ data }) => {
    const { hashToken, razorpayRequest } = await import('./razorpay.server');
    // Possession of the unguessable order capability is required before any private access.
    const hash = await hashToken(data.token);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { data: order, error } = await supabaseAdmin.from('report_orders').select('id, amount_paise, status, razorpay_link_id, paid_at').eq('id', data.order).eq('access_hash', hash).maybeSingle();
    if (error || !order) throw new Error('Order not found or this private order link is invalid.');
    if (order.status === 'paid' || order.status === 'delivered') return { order: order.id, amount: order.amount_paise, status: order.status };
    if (!order.razorpay_link_id) return { order: order.id, amount: order.amount_paise, status: 'failed' };
    const link = await razorpayRequest(`/v1/payment_links/${order.razorpay_link_id}`);
    const paymentId = verifiedPayment(link, order);
    if (paymentId) {
      const { error: updateError } = await supabaseAdmin.from('report_orders').update({ status: 'paid', razorpay_payment_id: paymentId, paid_at: new Date().toISOString() }).eq('id', order.id).eq('access_hash', hash);
      if (updateError) throw new Error('Payment was received but confirmation could not be saved. Please check again; do not pay twice.');
      return { order: order.id, amount: order.amount_paise, status: 'paid' };
    }
    return { order: order.id, amount: order.amount_paise, status: ['cancelled', 'expired'].includes(link.status) ? 'failed' : 'pending' };
  });