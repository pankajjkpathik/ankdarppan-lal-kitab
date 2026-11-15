import { calculateReportPrice, REPORT_PRICE_PAISE } from './checkout-pricing';
export function eligiblePrice(code: string, status: { follower_verified: boolean; subscriber_verified: boolean } | null) {
  const price = calculateReportPrice(code);
  const verified = price.coupon?.code === 'Follower20' ? status?.follower_verified === true : price.coupon?.code === 'Subscriber50' ? status?.subscriber_verified === true : false;
  return { amount: verified ? price.total : REPORT_PRICE_PAISE, verified, discount: verified ? price.discount : 0 };
}
export function canReleaseReport(amount: number, verified: boolean, status: string) {
  return ['paid', 'delivered'].includes(status) && (amount === REPORT_PRICE_PAISE || verified);
}