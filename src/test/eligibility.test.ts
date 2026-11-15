import { describe, expect, it } from 'vitest';
import { eligiblePrice, canReleaseReport } from '../lib/eligibility';
describe('Verified social discounts and release', () => {
  it('charges ₹941 for an unverified follower', () => expect(eligiblePrice('Follower20', null).amount).toBe(94100));
  it('charges ₹941 after failed subscriber verification', () => expect(eligiblePrice('Subscriber50', { follower_verified: false, subscriber_verified: false }).amount).toBe(94100));
  it('grants 20% only to verified followers', () => expect(eligiblePrice('Follower20', { follower_verified: true, subscriber_verified: false }).amount).toBe(75280));
  it('grants 50% only to verified subscribers', () => expect(eligiblePrice('Subscriber50', { follower_verified: false, subscriber_verified: true }).amount).toBe(47050));
  it('blocks report release after unverified discounted payment', () => expect(canReleaseReport(47050, false, 'paid')).toBe(false));
  it('allows full paid amount without social verification', () => expect(canReleaseReport(94100, false, 'paid')).toBe(true));
  it('blocks unpaid readings', () => expect(canReleaseReport(94100, true, 'pending')).toBe(false));
});