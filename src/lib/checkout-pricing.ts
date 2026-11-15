export const REPORT_PRICE_PAISE = 94100;
export const CHECKOUT_COUPONS = [
  { code: 'Follower20', percent: 20 },
  { code: 'Subscriber50', percent: 50 },
] as const;

export function calculateReportPrice(code: string) {
  const coupon = CHECKOUT_COUPONS.find(item => item.code.toLowerCase() === code.trim().toLowerCase());
  const discount = coupon ? Math.round(REPORT_PRICE_PAISE * coupon.percent / 100) : 0;
  return { coupon, discount, total: REPORT_PRICE_PAISE - discount };
}

export function formatINR(paise: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 }).format(paise / 100);
}