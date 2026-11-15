import { z } from 'zod';

export const reportOrderSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  gender: z.enum(['male', 'female']),
  birthPlace: z.string().trim().min(2).max(200),
  whatsapp: z.string().regex(/^[6-9][0-9]{9}$/),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
    const date = new Date(value + 'T00:00:00Z');
    return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value && date <= new Date();
  }, 'Enter a valid past birth date'),
  birthTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  approximate: z.boolean(),
  language: z.literal('English with Hindi terms'),
  email: z.string().trim().email().max(254),
  coupon: z.string().trim().max(30),
});
export const orderAccessSchema = z.object({ order: z.string().uuid(), token: z.string().regex(/^[a-f0-9]{64}$/) });
export type ReportOrderInput = z.infer<typeof reportOrderSchema>;

export function verifiedPayment(link: { id: string; reference_id?: string; amount: number; amount_paid?: number; currency: string; status: string; payments?: { payment_id: string; amount: number; status: string }[] }, order: { id: string; razorpay_link_id: string | null; amount_paise: number }) {
  if (link.id !== order.razorpay_link_id || link.reference_id !== order.id || link.currency !== 'INR' || link.amount !== order.amount_paise || link.amount_paid !== order.amount_paise || link.status !== 'paid') return null;
  return link.payments?.find(payment => payment.status === 'captured' && payment.amount === order.amount_paise)?.payment_id ?? null;
}