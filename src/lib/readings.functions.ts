import { createServerFn } from '@tanstack/react-start';
import { orderAccessSchema, reportOrderSchema } from './report-order-schema';
import { readingSchema } from './reading-schema';
import { canReleaseReport } from './eligibility';

export const generateOrderReading = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => orderAccessSchema.parse(input))
  .handler(async ({ data }) => {
    const { hashToken } = await import('./razorpay.server');
    const hash = await hashToken(data.token);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { data: order } = await supabaseAdmin.from('report_orders').select('id,details,reading,reading_status,status,amount_paise,eligibility_verified').eq('id', data.order).eq('access_hash', hash).maybeSingle();
    if (!order) throw new Error('Invalid private order link.');
    if (!canReleaseReport(order.amount_paise, order.eligibility_verified, order.status)) throw new Error('Verified payment of ₹941, or verified discount eligibility, is required before your reading can be released.');
    if (order.reading) return readingSchema.parse(order.reading);
    const details = reportOrderSchema.parse(order.details);
    const { data: locked } = await supabaseAdmin.from('report_orders').update({ reading_status: 'generating', reading_started_at: new Date().toISOString() }).eq('id', order.id).eq('access_hash', hash).eq('reading_status', 'idle').select('id').maybeSingle();
    if (!locked) throw new Error('This reading is already generating or needs review after an earlier attempt. Do not start another request.');
    try {
      const { generatePersonalReading } = await import('./reading.server');
      const reading = await generatePersonalReading(details);
      const { error } = await supabaseAdmin.from('report_orders').update({ reading, reading_status: 'ready', reading_error: null }).eq('id', order.id).eq('access_hash', hash);
      if (error) throw new Error('The reading was generated but could not be saved. Contact Ank Darppan before retrying.');
      return reading;
    } catch (error) {
      await supabaseAdmin.from('report_orders').update({ reading_status: 'review_required', reading_error: error instanceof Error ? error.message : 'Generation failed' }).eq('id', order.id);
      throw error;
    }
  });