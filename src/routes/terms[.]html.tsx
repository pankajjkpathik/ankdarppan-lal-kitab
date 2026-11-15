import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/terms.html.css?raw";

export const Route = createFileRoute("/terms.html")({
  head: () => ({ meta: [{"title": "Terms & Conditions | Ank Darppan"}, {"name": "description", "content": "Terms & Conditions for personalised Ank Darppan Lal Kitab reports."}, {"property": "og:title", "content": "Terms & Conditions | Ank Darppan"}, {"property": "og:description", "content": "Terms & Conditions for personalised Ank Darppan Lal Kitab reports."}, {"property": "og:type", "content": "website"}, {"name": "twitter:card", "content": "summary_large_image"}] }),
  staticData: { sitemap: true, importedDocument: { html: { "lang": "en" }, body: {  } } },
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
          <h1 className="font-[family-name:var(--display)] text-[clamp(34px,5vw,50px)] font-normal leading-[1.2] mt-[12px] mr-0 mb-[8px] ml-0 text-balance">Terms &amp; Conditions</h1>
          <p className="m-0">For the Sampurna Lal Kitab Report sold at www.ankdarppan.com. Effective from 26 October 2026.</p>
          <nav className="tabs flex-wrap gap-[8px] mt-[22px]" aria-label="Policies">
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/contact.html">Contact Us</a>
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/shipping.html">Shipping &amp; Delivery</a>
            <a className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--foil) text-[15px] font-semibold py-[6px] px-[14px] no-underline" aria-current="page" href="#">Terms &amp; Conditions</a>
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/refund.html">Refund &amp; Cancellation</a>
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/privacy.html">Privacy Policy</a>
          </nav>
        </div>
      </div>
      <main className="[padding-block:40px_64px]">
        <div className="wrap my-0 mx-auto max-w-[860px] pl-[max(16px,env(safe-area-inset-left,0px))] pr-[max(16px,env(safe-area-inset-right,0px))]">
          <div className="summary bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[28px] py-[18px] px-[22px]">
            <h2 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.2] mt-0 mr-0 mb-[6px] ml-0 text-balance">In short</h2>
            <ul className="m-0 pl-[20px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">You are buying a personalised, digital Lal Kitab report (PDF) for ₹581, prepared from the birth details you give us.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">The report is delivered on WhatsApp and email within <b>24–48 hours</b> of payment and correct birth details.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Astrology is a matter of faith and tradition. The report is guidance, not a guarantee, and not medical, legal or financial advice.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Orders cannot be cancelled or refunded, as each report is personalised.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">The report is for your personal use. Please do not resell or republish it.</li>
            </ul>
          </div>
          <nav className="toc bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) mb-[32px] py-[16px] px-[22px]" aria-label="Contents">
            <b className="block mb-[6px]">Contents</b>
            <ol className="gap-x-[32px] m-0 pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#about">About us</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#service">The service</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#eligibility">Who can order</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#order">Placing an order</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#price">Price and payment</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#delivery">Delivery</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#accuracy">Your birth details</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#nature">Nature of astrology</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#remedies">Remedies (upay)</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#ip">Use of the report</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#conduct">Acceptable use</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#liability">Limitation of liability</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#refund">No cancellation or refund</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#changes">Changes to these terms</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#law">Governing law</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#contact">Contact &amp; grievances</a>
              </li>
            </ol>
          </nav>
          <p className="updated text-[15px] max-w-[72ch]">Last updated: 26 October 2026</p>
          <p className="max-w-[72ch]">These Terms &amp; Conditions ("Terms") apply to your use of www.ankdarppan.com (the "Website") and to any purchase of the Sampurna Lal Kitab Report from us. By placing an order you confirm that you have read and agree to these Terms, our <a href="/refund.html">Refund &amp; Cancellation Policy</a> and our <a href="/privacy.html">Privacy Policy</a>.</p>
          <section className="[scroll-margin-top:80px]" id="about">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">1.</span>About us</h2>
            <p className="max-w-[72ch]">The Website and the reports are operated by <b>Ank Darppan</b>, a proprietorship of Anamika Pathik, having its place of business at HNO 48, Near Gurudwara, Sunny Side, Solan, Himachal Pradesh 173212, India. "We", "us" and "our" refer to Ank Darppan. "You" refers to the person placing the order.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="service">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">2.</span>The service</h2>
            <p className="max-w-[72ch]">We prepare a personalised astrological report based on the Lal Kitab system (the "Report"). The Report is calculated from the birth details you provide and is supplied as a digital PDF of about 65 pages. It typically includes birth and panchang details, Lagna, Lal Kitab, Chandra, Surya, Navamsa (D9) and Varshphal charts, planet-wise analysis, karmic debt (rin) analysis, life area indications and a priority-wise remedy plan. The exact content depends on your chart, and sample pages shown on the Website are illustrations from another person's report.</p>
            <p className="max-w-[72ch]">The Report is a digital product. No physical item is shipped.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="eligibility">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">3.</span>Who can order</h2>
            <p className="max-w-[72ch]">You must be 18 years of age or older to place an order. You may order a Report for another person (for example, a family member) only if you have that person's permission to share their birth details with us. Reports for a child under 18 must be ordered by a parent or legal guardian.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="order">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">4.</span>Placing an order</h2>
            <ol className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">Click a "Get My Report" button on the Website. You will be taken to a secure Razorpay payment page.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Enter the details asked for: full name, date of birth, exact time of birth, place of birth, gender, WhatsApp number and email address.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Complete the payment. You will receive a payment confirmation from Razorpay.</li>
            </ol>
            <p className="max-w-[72ch]">Your order is confirmed once payment is successful. We may contact you on WhatsApp, phone or email if any detail is missing or unclear. We may decline an order (and return the amount paid) if we are unable to prepare a Report, for example where the birth details are incomplete or the place of birth cannot be identified.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="price">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">5.</span>Price and payment</h2>
            <ul className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">The price of the Report is <b>₹581</b> (Indian Rupees), as shown on the Website at the time of your order. The price is inclusive of GST and all other taxes.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Payments are processed by Razorpay Software Private Limited using UPI, debit or credit cards, net banking or wallets. We do not see or store your card, UPI PIN or banking passwords.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Your payment is also subject to Razorpay's terms and the terms of your bank or payment provider.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">We may change the price at any time, but a change will not affect an order that has already been paid for.</li>
            </ul>
          </section>
          <section className="[scroll-margin-top:80px]" id="delivery">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">6.</span>Delivery</h2>
            <ul className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">The Report is delivered as a PDF to the WhatsApp number and email address you provide.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">We deliver within <b>24–48 hours</b> of a successful payment and complete birth details.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">If you have not received your Report within this time, please check your email spam folder and then contact us. We will resend it.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Delivery is complete once the Report has been sent to the WhatsApp number or email address you gave us. Please make sure these are correct, and save the PDF on your device, as we do not keep a copy of your Report after delivery.</li>
            </ul>
          </section>
          <section className="[scroll-margin-top:80px]" id="accuracy">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">7.</span>Your birth details</h2>
            <p className="max-w-[72ch]">Lal Kitab calculations depend heavily on the exact time and place of birth. You are responsible for the accuracy of the details you submit. We prepare the Report exactly from the details you provide.</p>
            <ul className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">If you notice an error in the details you gave us, tell us as soon as possible. If we have not yet started preparing the Report, we will correct it free of charge.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">If the Report has already been prepared using incorrect details that you supplied, a corrected Report can be prepared for an additional fee, which we will tell you before we start.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">If the Report contains an error caused by us (for example, a detail typed incorrectly by us), we will correct and resend it free of charge.</li>
            </ul>
          </section>
          <section className="[scroll-margin-top:80px]" id="nature">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">8.</span>Nature of astrology: important disclaimer</h2>
            <p className="max-w-[72ch]">Astrology, including Lal Kitab, is a traditional system of belief and interpretation. It is not an exact science, and different astrologers and schools may interpret the same chart differently. By ordering, you understand and accept that:</p>
            <ul className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">The Report offers guidance and possibilities. It does not guarantee any event, outcome, result or timing.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Scores, ratings and predictions in the Report are interpretive indications and should not be treated as certain.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">The Report is <b>not</b> a substitute for professional medical, psychological, legal, financial, investment or tax advice. Do not delay or stop medical treatment, or make major financial, legal, career or relationship decisions, based only on the Report. Please consult a qualified professional.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Any decision you take after reading the Report is your own decision and responsibility.</li>
            </ul>
          </section>
          <section className="[scroll-margin-top:80px]" id="remedies">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">9.</span>Remedies (upay)</h2>
            <p className="max-w-[72ch]">The Report suggests traditional Lal Kitab remedies, such as charity, feeding animals or birds, keeping certain objects, or observing certain practices on specific days. Following any remedy is entirely voluntary.</p>
            <ul className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">Do not follow any remedy that is unsafe for your health (for example, fasting during illness or pregnancy, or wearing a metal or stone you are allergic to), that conflicts with the law, or that causes harm to any person or animal.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">When feeding animals or birds, use food that is safe for them and follow local rules.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">When asked to flow items into water, use only natural, biodegradable items and follow local environmental rules.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Results of remedies depend on many factors, and we do not guarantee any result.</li>
            </ul>
          </section>
          <section className="[scroll-margin-top:80px]" id="ip">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">10.</span>Use of the Report and our content</h2>
            <p className="max-w-[72ch]">The Report is prepared for your personal, non-commercial use. All text, design, graphics, layouts and logos in the Report and on the Website belong to Ank Darppan or are used with permission. You may print or share the Report with your family. You may not resell, republish, upload to public websites, or use the Report or its format to offer services to others without our written permission.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="conduct">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">11.</span>Acceptable use</h2>
            <p className="max-w-[72ch]">You agree not to submit another person's details without their permission, provide false payment information, attempt to interfere with the Website's security, or use the Website for any unlawful purpose. We may refuse service where we reasonably believe these Terms have been breached.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="liability">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">12.</span>Limitation of liability</h2>
            <p className="max-w-[72ch]">To the extent permitted by law, our total liability to you for any claim relating to an order is limited to the amount you paid for that order. We are not liable for any indirect or consequential loss, or for any decision, action or loss arising from your reliance on astrological interpretations or remedies. Nothing in these Terms limits any right you have under the Consumer Protection Act, 2019 that cannot lawfully be limited.</p>
            <p className="max-w-[72ch]">We are not responsible for delays or failures caused by events outside our reasonable control, such as network or payment gateway outages, WhatsApp or email service failures, natural disasters or government action.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="refund">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">13.</span>No cancellation or refund</h2>
            <p className="max-w-[72ch]">The Report is a personalised digital product. Orders cannot be cancelled and are not refundable once payment is made. Corrections and payment errors are handled as set out in our <a href="/refund.html">Refund &amp; Cancellation Policy</a>.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="changes">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">14.</span>Changes to these Terms</h2>
            <p className="max-w-[72ch]">We may update these Terms from time to time. The updated version will be posted on this page with a new "Last updated" date. The Terms in force at the time you placed your order apply to that order.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="law">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">15.</span>Governing law and disputes</h2>
            <p className="max-w-[72ch]">These Terms are governed by the laws of India. We will always try to resolve a concern with you directly first. Any dispute that cannot be resolved amicably will be subject to the exclusive jurisdiction of the courts at Solan, Himachal Pradesh, without affecting your right to approach a consumer commission under the Consumer Protection Act, 2019.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="contact">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">16.</span>Contact and grievance officer</h2>
            <p className="max-w-[72ch]">For any question, complaint or grievance about an order or these Terms, please contact our Grievance Officer. We will acknowledge your complaint within 48 hours and try to resolve it within one month of receipt, as required by the Consumer Protection (E-Commerce) Rules, 2020.</p>
            <div className="box bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) my-[14px] mx-0 py-[16px] px-[20px]">
              <dl className="grid gap-y-[6px] gap-x-[16px] m-0">
                <dt className="font-semibold">Business</dt>
                <dd className="min-w-0 wrap-anywhere">Ank Darppan</dd>
                <dt className="font-semibold">Grievance Officer</dt>
                <dd className="min-w-0 wrap-anywhere">Anamika Pathik, Proprietor</dd>
                <dt className="font-semibold">Phone / WhatsApp</dt>
                <dd className="min-w-0 wrap-anywhere">93173 65025</dd>
                <dt className="font-semibold">Email</dt>
                <dd className="min-w-0 wrap-anywhere">ankdarppan@gmail.com</dd>
                <dt className="font-semibold">Address</dt>
                <dd className="min-w-0 wrap-anywhere">HNO 48, Near Gurudwara, Sunny Side, Solan, Himachal Pradesh 173212</dd>
                <dt className="font-semibold">Response time</dt>
                <dd className="min-w-0 wrap-anywhere">Within 24–48 hours</dd>
              </dl>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor-deep) text-[15px]">
        <div className="wrap flex flex-wrap gap-[12px] justify-between my-0 mx-auto max-w-[1140px] pl-[max(16px,env(safe-area-inset-left,0px))] pr-[max(16px,env(safe-area-inset-right,0px))] [padding-block:28px_calc(28px_+_env(safe-area-inset-bottom,0px))]"><span>© Ank Darppan · 93173 65025 · ankdarppan@gmail.com</span><span><a href="/contact.html">Contact</a> · <a href="/shipping.html">Delivery</a> · <a href="#">Terms</a> · <a href="/refund.html">Refunds</a> · <a href="/privacy.html">Privacy</a></span></div>
      </footer>
    </>
  );
}
