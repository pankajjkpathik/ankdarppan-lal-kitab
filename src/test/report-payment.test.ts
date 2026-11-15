import { describe, expect, it } from 'vitest';
import { verifiedPayment, reportOrderSchema } from '../lib/report-order-schema';

const order = { id: 'private-order', razorpay_link_id: 'plink_123', amount_paise: 75280 };
const paid = { id: 'plink_123', reference_id: 'private-order', currency: 'INR', amount: 75280, amount_paid: 75280, status: 'paid', payments: [{ payment_id: 'pay_123', status: 'captured', amount: 75280 }] };
describe('Secure payment confirmation', () => {
  it('confirms only fully captured payment for the saved order', () => expect(verifiedPayment(paid, order)).toBe('pay_123'));
  it('rejects a browser-claimed paid status without captured funds', () => expect(verifiedPayment({ ...paid, payments: [] }, order)).toBeNull());
  it('rejects incorrect discounted amounts', () => expect(verifiedPayment({ ...paid, amount: 94100 }, order)).toBeNull());
  it('rejects partial payments', () => expect(verifiedPayment({ ...paid, amount_paid: 100 }, order)).toBeNull());
  it('rejects a payment for another order', () => expect(verifiedPayment({ ...paid, reference_id: 'other' }, order)).toBeNull());
  it('rejects an unrelated payment link', () => expect(verifiedPayment({ ...paid, id: 'plink_other' }, order)).toBeNull());
  it('rejects other currencies', () => expect(verifiedPayment({ ...paid, currency: 'USD' }, order)).toBeNull());
  it('rejects only authorised rather than captured payments', () => expect(verifiedPayment({ ...paid, payments: [{ ...paid.payments[0], payment_id: 'pay_123', amount: 75280, status: 'authorized' }] }, order)).toBeNull());
  it('rejects invalid birth details before payment creation', () => expect(reportOrderSchema.safeParse({ fullName: 'A', birthDate: '2035-02-31' }).success).toBe(false));
});