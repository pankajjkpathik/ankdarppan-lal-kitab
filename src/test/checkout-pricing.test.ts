import { describe, expect, it } from 'vitest';
import { calculateReportPrice, REPORT_PRICE_PAISE } from '../lib/checkout-pricing';

describe('Report checkout pricing', () => {
  it('keeps the report at ₹941', () => expect(REPORT_PRICE_PAISE).toBe(94100));
  it('gives Follower20 exactly 20% off', () => {
    expect(calculateReportPrice('Follower20')).toMatchObject({ discount: 18820, total: 75280 });
  });
  it('gives Subscriber50 exactly 50% off', () => {
    expect(calculateReportPrice('Subscriber50')).toMatchObject({ discount: 47050, total: 47050 });
  });
  it('does not discount unknown codes', () => expect(calculateReportPrice('OFF15').total).toBe(94100));
  it('accepts the permanent coupons without an expiry check', () => {
    for (const code of ['Follower20', 'Subscriber50']) expect(calculateReportPrice(code).coupon).toBeDefined();
  });
});