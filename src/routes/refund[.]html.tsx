import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/refund.html.css?raw";

export const Route = createFileRoute("/refund.html")({
  head: () => ({ meta: [{"title": "Refund & Cancellation Policy | Ank Darppan"}, {"name": "description", "content": "Refund & Cancellation Policy for personalised Ank Darppan Lal Kitab reports."}, {"property": "og:title", "content": "Refund & Cancellation Policy | Ank Darppan"}, {"property": "og:description", "content": "Refund & Cancellation Policy for personalised Ank Darppan Lal Kitab reports."}, {"property": "og:type", "content": "website"}, {"name": "twitter:card", "content": "summary_large_image"}] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <header className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor-deep) sticky top-0 z-5">
        <div className="wrap items-center flex gap-[12px] justify-between my-0 mx-auto max-w-[1140px] py-[12px] pl-[max(16px,env(safe-area-inset-left,0px))] pr-[max(16px,env(safe-area-inset-right,0px))]">
          <a className="brand no-underline whitespace-nowrap [font:400_22px/1_var(--display)]" href="/">Ank Darppan</a>
          <a className={"back text-[15px] font-semibold py-[8px] px-[14px] no-underline [transition:background_.2s] [&:hover]:bg-none [&:hover]:[background-position:0%_0%] [&:hover]:[background-size:auto_auto] [&:hover]:[background-repeat:repeat] [&:hover]:[background-origin:padding-box] [&:hover]:[background-clip:border-box] [&:hover]:[background-attachment:scroll] [&:hover]:bg-[#ffffff1a]"} href="/">← Back to Lal Kitab Report</a>
        </div>
      </header>
      <div className="hero [padding-block:48px_40px]">
        <div className="wrap my-0 mx-auto max-w-[860px] pl-[max(16px,env(safe-area-inset-left,0px))] pr-[max(16px,env(safe-area-inset-right,0px))]">
          <p className="eb tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">Policies</p>
          <h1 className="font-[family-name:var(--display)] text-[clamp(34px,5vw,50px)] font-normal leading-[1.2] mt-[12px] mr-0 mb-[8px] ml-0 text-balance">Refund &amp; Cancellation Policy</h1>
          <p className="m-0">For the Sampurna Lal Kitab Report sold at www.ankdarppan.com. Effective from 26 October 2026.</p>
          <nav className="tabs flex-wrap gap-[8px] mt-[22px]" aria-label="Policies">
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/contact.html">Contact Us</a>
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/shipping.html">Shipping &amp; Delivery</a>
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/terms.html">Terms &amp; Conditions</a>
            <a className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--foil) text-[15px] font-semibold py-[6px] px-[14px] no-underline" aria-current="page" href="#">Refund &amp; Cancellation</a>
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/privacy.html">Privacy Policy</a>
          </nav>
        </div>
      </div>
      <main className="[padding-block:40px_64px]">
        <div className="wrap my-0 mx-auto max-w-[860px] pl-[max(16px,env(safe-area-inset-left,0px))] pr-[max(16px,env(safe-area-inset-right,0px))]">
          <div className="summary bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[28px] py-[18px] px-[22px]">
            <h2 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.2] mt-0 mr-0 mb-[6px] ml-0 text-balance">In short</h2>
            <ul className="m-0">
              <li className="my-[4px] mx-0 max-w-[72ch]">The Sampurna Lal Kitab Report is a personalised digital product. <b>Orders cannot be cancelled and are not refundable</b> once payment is made.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Please check your birth details, WhatsApp number and email carefully before you pay.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">If we make a mistake in your Report, we correct it and re-send it free of charge within 24–48 hours.</li>
            </ul>
          </div>
          <p className="updated text-[15px] max-w-[72ch]">Last updated: 26 October 2026</p>
          <p className="max-w-[72ch]">This Refund &amp; Cancellation Policy applies to the Sampurna Lal Kitab Report (₹581, inclusive of GST) purchased from Ank Darppan through www.ankdarppan.com. It forms part of our <a href="/terms.html">Terms &amp; Conditions</a>. Please read it before you pay.</p>
          <section className="[scroll-margin-top:80px]" id="no-refund">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">1.</span>No cancellation, no refund</h2>
            <p className="max-w-[72ch]">Each Report is calculated and prepared individually from the birth details you submit, and work on it begins as soon as your payment is received. Because it is a personalised digital product that cannot be returned or resold, <b>all sales are final</b>:</p>
            <ul>
              <li className="my-[4px] mx-0 max-w-[72ch]">Orders cannot be cancelled after payment.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">No refund is given for a change of mind, or because you disagree with or do not like the predictions, scores or remedies in the Report.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">No refund is given if events, results or timings do not happen as you expected. Astrology offers guidance, not guarantees (see section 8 of our <a href="/terms.html#nature">Terms</a>).</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">No refund is given where the Report was prepared using incorrect birth details that you supplied, or delivered to a wrong WhatsApp number or email that you entered.</li>
            </ul>
          </section>
          <section className="[scroll-margin-top:80px]" id="corrections">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">2.</span>Corrections</h2>
            <ul>
              <li className="my-[4px] mx-0 max-w-[72ch]"><b>Mistake made by us</b> (for example, we entered your birth details incorrectly, or a page is missing or the file will not open): we will correct the Report and re-send it free of charge within 24–48 hours.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]"><b>Mistake in the details you gave us</b> (wrong date, time or place of birth): tell us as soon as possible. If we have not yet prepared the Report, we will use the corrected details at no cost. If the Report has already been prepared, a corrected Report can be prepared for an additional fee, which we will tell you before we start.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]"><b>Wrong WhatsApp number or email:</b> contact us from your correct number or email with your Razorpay payment ID within 24–48 hours of delivery and we will send the Report there.</li>
            </ul>
          </section>
          <section className="[scroll-margin-top:80px]" id="payment-errors">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">3.</span>Payment errors</h2>
            <p className="max-w-[72ch]">This policy does not prevent the return of money that was taken by mistake. If you were charged twice for the same order, or money was deducted but the payment failed and no order was created, the extra or failed amount will be returned to your original payment method. Failed payments are usually reversed automatically by Razorpay or your bank within 5–7 working days. If we are unable to prepare or deliver your Report at all, the amount you paid will be returned in the same way.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="contact">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">4.</span>Contact</h2>
            <p className="max-w-[72ch]">For a correction or a payment error, contact us on WhatsApp or email with your name and Razorpay payment ID. We respond within 24–48 hours.</p>
            <div className="box bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) my-[14px] mx-0 py-[16px] px-[20px]">
              <dl className="grid gap-y-[6px] gap-x-[16px] m-0">
                <dt className="font-semibold">Phone / WhatsApp</dt>
                <dd className="min-w-0 wrap-anywhere">+91 93173 65025</dd>
                <dt className="font-semibold">Email</dt>
                <dd className="min-w-0 wrap-anywhere">ankdarppan@gmail.com</dd>
                <dt className="font-semibold">Grievance Officer</dt>
                <dd className="min-w-0 wrap-anywhere">Anamika Pathik, Proprietor</dd>
                <dt className="font-semibold">Address</dt>
                <dd className="min-w-0 wrap-anywhere">HNO 48, Near Gurudwara, Sunny Side, Solan, Himachal Pradesh 173212</dd>
              </dl>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor-deep) text-[15px]">
        <div className="wrap flex flex-wrap gap-[12px] justify-between my-0 mx-auto max-w-[1140px] pl-[max(16px,env(safe-area-inset-left,0px))] pr-[max(16px,env(safe-area-inset-right,0px))] [padding-block:28px_calc(28px_+_env(safe-area-inset-bottom,0px))]"><span>© Ank Darppan · 93173 65025 · ankdarppan@gmail.com</span><span><a href="/contact.html">Contact</a> · <a href="/shipping.html">Delivery</a> · <a href="/terms.html">Terms</a> · <a href="#">Refunds</a> · <a href="/privacy.html">Privacy</a></span></div>
      </footer>
    </>
  );
}
