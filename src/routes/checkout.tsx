import { useState, type FormEvent } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { ArrowLeft, ArrowRight, LockKeyhole, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { calculateReportPrice, CHECKOUT_COUPONS, formatINR, REPORT_PRICE_PAISE } from '@/lib/checkout-pricing';
import checkoutCSS from '@/styles/pages/checkout.css?raw';
import { createReportPayment } from '@/lib/report-orders.functions';
import { reportOrderSchema } from '@/lib/report-order-schema';

export const Route = createFileRoute('/checkout')({
  head: () => ({ meta: [
    { title: 'Lal Kitab Report Checkout | Ank Darppan' },
    { name: 'description', content: 'Enter your birth details and apply your Ank Darppan coupon for the Sampurna Lal Kitab report.' },
    { property: 'og:title', content: 'Lal Kitab Report Checkout | Ank Darppan' },
    { property: 'og:description', content: 'Your personalised Lal Kitab report: birth details, coupon savings and order summary.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Checkout,
});

function Checkout() {
  const [couponInput, setCouponInput] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [approximate, setApproximate] = useState(false);
  const [busy, setBusy] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const createPayment = useServerFn(createReportPayment);
  const price = calculateReportPrice(couponCode);
  function applyCoupon(code: string) {
    const next = calculateReportPrice(code);
    if (!next.coupon) { setCouponError('This coupon is not valid. Please check the code.'); return; }
    setCouponCode(next.coupon.code); setCouponInput(next.coupon.code); setCouponError(''); setPaymentError('');
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = new FormData(event.currentTarget);
    const parsed = reportOrderSchema.safeParse({ ...Object.fromEntries(form), approximate, coupon: couponCode });
    if (!parsed.success) { setPaymentError('Please check your birth details and contact information.'); return; }
    setBusy(true); setPaymentError('');
    try {
      const payment = await createPayment({ data: parsed.data });
      window.location.assign(payment.paymentUrl);
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : 'Unable to start payment. Please try again.');
      setBusy(false);
    }
  }
  return <div className="checkout-page">
    <style>{checkoutCSS}</style>
    <header className="checkout-header"><div className="checkout-header-inner">
      <Link to="/" className="checkout-brand">Ank Darppan</Link>
      <div className="checkout-secure"><LockKeyhole size={16} /><span>Personalised report checkout</span></div>
    </div></header>
    <main className="checkout-main">
      <Link to="/" className="checkout-back"><ArrowLeft size={16} /> Back to report</Link>
      <div className="checkout-heading"><h1>Your Sampurna Lal Kitab Report</h1><p>Aapki kundli. Aapka remedy plan.</p></div>
      <form id="report-order" onSubmit={submit} aria-busy={busy}>
        <fieldset disabled={busy} className="contents">
        <div className="checkout-layout">
          <div>
            <div className="checkout-product"><img src="/site-assets/cover.jpg" alt="Ank Darppan Sampurna Lal Kitab report cover" /><div><h2>Sampurna Lal Kitab Report</h2><p>65-page personalised PDF · 29 chapters</p><p>WhatsApp &amp; email delivery</p></div><strong>₹941</strong></div>
            <section className="checkout-fields" aria-labelledby="details-heading">
              <h2 id="details-heading">Details Required for your Lal Kitab Report <span>(Personalized for You)</span></h2>
              <div className="checkout-field-grid">
                <div className="checkout-field"><label htmlFor="full-name">Full Name <span className="checkout-required">*</span></label><input id="full-name" name="fullName" autoComplete="name" placeholder="Full Name" required /></div>
                <div className="checkout-field"><span id="gender-label">Gender <span className="checkout-required">*</span></span><div className="checkout-radio" role="group" aria-labelledby="gender-label"><label><input type="radio" name="gender" value="male" required /> Male</label><label><input type="radio" name="gender" value="female" required /> Female</label></div></div>
                <div className="checkout-field"><label htmlFor="birth-place">Place of Birth <span className="checkout-required">*</span></label><input id="birth-place" name="birthPlace" placeholder="City, state, country" required /></div>
                <div className="checkout-field"><label htmlFor="whatsapp">WhatsApp Number <span className="checkout-required">*</span></label><div className="checkout-phone"><span>🇮🇳 +91</span><input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel-national" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} title="Enter a valid 10-digit Indian mobile number" placeholder="WhatsApp Number" required /></div><small>Your report will be sent on this number</small></div>
                <div className="checkout-field"><label htmlFor="birth-date">Date of Birth <span className="checkout-required">*</span></label><input id="birth-date" name="birthDate" type="date" required /></div>
                <div className="checkout-field"><label htmlFor="birth-time">Time of Birth <span className="checkout-required">*</span></label><input id="birth-time" name="birthTime" type="time" required /><label className="checkout-unknown"><input type="checkbox" checked={approximate} onChange={event => setApproximate(event.target.checked)} /> My birth time is approximate</label>{approximate && <small>We will need to confirm your time before preparing the report.</small>}</div>
                <div className="checkout-field checkout-wide"><label htmlFor="language">Report Language <span className="checkout-required">*</span></label><select id="language" name="language"><option>English with Hindi terms</option></select></div>
                <div className="checkout-field"><label htmlFor="email">Email Address <span className="checkout-required">*</span></label><input id="email" name="email" type="email" autoComplete="email" placeholder="email@example.com" required /></div>
              </div>
              <p className="checkout-terms">By clicking “Pay Now”, I agree to the <Link to="/terms.html">Terms and Conditions</Link> and <Link to="/privacy.html">Privacy Policy</Link>.</p>
            </section>
          </div>
          <aside className="checkout-aside" aria-label="Coupons and payment summary">
            <h2>Apply Coupon</h2>
            <div className="checkout-apply"><input className="checkout-coupon-input" aria-label="Coupon code" placeholder="Enter coupon code" value={couponInput} onChange={event => setCouponInput(event.target.value)} onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); applyCoupon(couponInput); } }} /><Button type="button" className="checkout-gold" onClick={() => applyCoupon(couponInput)}>Apply</Button></div>
            {couponError && <p className="checkout-message checkout-error" role="alert">{couponError}</p>}
            {price.coupon && <div className="checkout-coupon-row checkout-message checkout-success" role="status"><span>{price.coupon.code} applied</span><Button type="button" variant="ghost" size="icon" aria-label="Remove coupon" onClick={() => { setCouponCode(''); setCouponInput(''); setPaymentError(''); }}><X /></Button></div>}
            <p className="checkout-coupon-label">Available Coupons</p>
            {CHECKOUT_COUPONS.map(coupon => <div className="checkout-coupon" key={coupon.code}><div className="checkout-coupon-row"><strong>{coupon.code}</strong><Button type="button" variant="ghost" size="sm" onClick={() => applyCoupon(coupon.code)} aria-label={`Apply ${coupon.code}`}>{couponCode === coupon.code ? 'Applied' : 'Apply'}</Button></div><p>Flat {coupon.percent}% off · No expiry</p></div>)}
            <section className="checkout-summary"><h2>Payment Summary</h2><dl><div><dt>Package price</dt><dd>{formatINR(REPORT_PRICE_PAISE)}</dd></div>{price.coupon && <div className="checkout-success"><dt>Coupon discount ({price.coupon.percent}%)</dt><dd>−{formatINR(price.discount)}</dd></div>}<div className="checkout-total"><dt>Total Payable</dt><dd data-testid="checkout-total" aria-live="polite">{formatINR(price.total)}</dd></div></dl>
              <Button type="submit" disabled={busy} className="checkout-gold checkout-pay">{busy ? 'Opening secure payment…' : `Pay Now · ${formatINR(price.total)}`} <ArrowRight /></Button>
              <p className="checkout-methods"><ShieldCheck size={14} /> Secure payment by Razorpay</p>
              {paymentError && <div className="checkout-payment-notice checkout-error" role="alert">{paymentError}<br /><a href="https://wa.me/919317365025?text=LAL_KITAB_PAYMENT_HELP" target="_blank" rel="noopener noreferrer">Contact on WhatsApp <ArrowRight size={16} /></a></div>}
            </section>
          </aside>
        </div>
        </fieldset>
      </form>
      <nav className="checkout-footer" aria-label="Checkout policies"><Link to="/contact.html">Contact Us</Link><Link to="/shipping.html">Delivery Policy</Link><Link to="/refund.html">Refund Policy</Link></nav>
    </main>
  </div>;
}