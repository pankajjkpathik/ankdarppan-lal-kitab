import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/privacy.html.css?raw";

export const Route = createFileRoute("/privacy.html")({
  head: () => ({ meta: [{ title: "Privacy Policy | Ank Darppan" }, { name: "description", content: "How Ank Darppan uses and protects personal details for Lal Kitab reports." }, { property: "og:title", content: "Privacy Policy | Ank Darppan" }, { property: "og:description", content: "How Ank Darppan uses and protects personal details for Lal Kitab reports." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
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
          <h1 className="font-[family-name:var(--display)] text-[clamp(34px,5vw,50px)] font-normal leading-[1.2] mt-[12px] mr-0 mb-[8px] ml-0 text-balance">Privacy Policy</h1>
          <p className="m-0">For the Sampurna Lal Kitab Report sold at www.ankdarppan.com. Effective from 26 October 2026.</p>
          <nav className="tabs flex-wrap gap-[8px] mt-[22px]" aria-label="Policies">
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/contact.html">Contact Us</a>
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/shipping.html">Shipping &amp; Delivery</a>
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/terms.html">Terms &amp; Conditions</a>
            <a className="text-[15px] font-semibold py-[6px] px-[14px] no-underline" href="/refund.html">Refund &amp; Cancellation</a>
            <a className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--foil) text-[15px] font-semibold py-[6px] px-[14px] no-underline" aria-current="page" href="#">Privacy Policy</a>
          </nav>
        </div>
      </div>
      <main className="[padding-block:40px_64px]">
        <div className="wrap my-0 mx-auto max-w-[860px] pl-[max(16px,env(safe-area-inset-left,0px))] pr-[max(16px,env(safe-area-inset-right,0px))]">
          <div className="summary bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[28px] py-[18px] px-[22px]">
            <h2 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.2] mt-0 mr-0 mb-[6px] ml-0 text-balance">In short</h2>
            <ul className="m-0 pl-[20px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">We collect your name, birth details and contact details only to prepare and deliver your Lal Kitab report.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">Payments are handled by Razorpay. We never see or store your card or UPI details.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">We do not store your birth details or your report after delivery.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">We do not sell your data, and we do not use your details for advertising without your consent.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">You can ask us to show, correct or delete your data at any time.</li>
            </ul>
          </div>
          <nav className="toc bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) mb-[32px] py-[16px] px-[22px]" aria-label="Contents">
            <b className="block mb-[6px]">Contents</b>
            <ol className="gap-x-[32px] m-0 pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#who">Who we are</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#collect">What we collect</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#use">How we use it</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#consent">Consent</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#share">Who we share it with</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#samples">Sample pages</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#retain">How long we keep it</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#security">Security</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#rights">Your rights</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#children">Children</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#cookies">Cookies</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#changes">Changes</a>
              </li>
              <li className="my-[4px] mx-0 max-w-[72ch]">
                <a href="#grievance">Grievance officer</a>
              </li>
            </ol>
          </nav>
          <p className="updated text-[15px] max-w-[72ch]">Last updated: 26 October 2026</p>
          <p className="max-w-[72ch]">This Privacy Policy explains how Ank Darppan collects, uses and protects your personal data when you visit www.ankdarppan.com or order a Sampurna Lal Kitab Report. We follow the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000 and the rules made under them.</p>
          <section className="[scroll-margin-top:80px]" id="who">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">1.</span>Who we are</h2>
            <p className="max-w-[72ch]">Ank Darppan, a proprietorship of Anamika Pathik, HNO 48, Near Gurudwara, Sunny Side, Solan, Himachal Pradesh 173212, India, decides how your personal data is used (the "Data Fiduciary" under Indian law). You can reach us at ankdarppan@gmail.com or 93173 65025.</p>
          </section>
          <ImportedSection2WhatWeCollect />
          <section className="[scroll-margin-top:80px]" id="use">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">3.</span>How we use your data</h2>
            <ul className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">To prepare your personalised Report and deliver it on WhatsApp and email.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">To contact you if a birth detail is missing or unclear.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">To process payments and corrections, and to maintain accounting and tax records required by law.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">To respond to your questions, complaints and requests.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">To send you information about other reports or offers <b>only if you have opted in</b>. You can opt out at any time by replying "STOP" or writing to us.</li>
            </ul>
            <p className="max-w-[72ch]">We do not sell, rent or trade your personal data.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="consent">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">4.</span>Consent</h2>
            <p className="max-w-[72ch]">By submitting your details and completing payment, you give us consent to use your data for the purposes in section 3. You may withdraw your consent at any time by contacting us. If you withdraw consent before your Report is delivered, we will not be able to prepare it, and our <a href="/refund.html">Refund &amp; Cancellation Policy</a> will apply.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="share">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">5.</span>Who we share your data with</h2>
            <p className="max-w-[72ch]">We share only what is needed to provide the service:</p>
            <ul className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]"><b>Razorpay</b>, to process payments.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]"><b>WhatsApp and email</b>, to deliver your Report and talk to you.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]"><b>Government or law enforcement authorities</b>, only when required by law.</li>
            </ul>
          </section>
          <section className="[scroll-margin-top:80px]" id="samples">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">6.</span>Sample pages on our Website</h2>
            <p className="max-w-[72ch]">We may show pages from real Reports as samples, so that buyers can see what they will receive. We do this only with the client's permission, and we always hide the client's name, date, time and place of birth, and any other details that could identify them. We will never show your Report as a sample without your permission.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="retain">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">7.</span>How long we keep your data</h2>
            <ul className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]"><b>Birth details and your Report:</b> we do not save them in any database or file. They are used only to prepare your Report, and the working copy is deleted once the Report has been delivered. Please save the PDF on your device, because we cannot re-send it from our records.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]"><b>WhatsApp and email conversations:</b> the details you send us and the Report we deliver stay in our chat or email thread with you, as they do in yours. You can ask us to delete our copy of these messages at any time.</li>
              <li className="my-[4px] mx-0 max-w-[72ch]"><b>Payment records:</b> payment details are held by Razorpay under its own policy. We keep only the invoice and payment reference that tax and accounting laws require us to keep.</li>
            </ul>
          </section>
          <section className="[scroll-margin-top:80px]" id="security">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">8.</span>Security</h2>
            <p className="max-w-[72ch]">We take reasonable steps to protect your data, including password-protected accounts, limiting access to people who need it to prepare your Report, and using secure (HTTPS) connections. Payments are processed by Razorpay, which is PCI-DSS compliant. No method of storage or transfer is completely secure. If a personal data breach occurs that affects you, we will inform you and the Data Protection Board of India as required by law.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="rights">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">9.</span>Your rights</h2>
            <p className="max-w-[72ch]">Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
            <ul className="pl-[22px]">
              <li className="my-[4px] mx-0 max-w-[72ch]">get a summary of any personal data we hold about you and how it is used;</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">correct or update inaccurate or incomplete data;</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">ask us to delete your data, including our copy of your WhatsApp or email messages;</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">nominate another person to exercise these rights on your behalf in case of death or incapacity;</li>
              <li className="my-[4px] mx-0 max-w-[72ch]">raise a grievance with us, and if you are not satisfied, with the Data Protection Board of India.</li>
            </ul>
            <p className="max-w-[72ch]">To use any of these rights, contact us at ankdarppan@gmail.com or on WhatsApp at 93173 65025. We will respond within 24–48 hours.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="children">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">10.</span>Children</h2>
            <p className="max-w-[72ch]">Our service is meant for people aged 18 and above. Reports for a child under 18 may be ordered only by a parent or legal guardian, who gives consent on the child's behalf. We do not knowingly collect a child's data without this consent, and we do not use children's data for marketing or tracking.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="cookies">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">11.</span>Cookies and third-party content</h2>
            <p className="max-w-[72ch]">This Website does not use analytics, advertising or tracking cookies. Fonts are loaded from Google Fonts, which may see your IP address when the page loads. Links to Razorpay, WhatsApp or other websites are governed by their own privacy policies.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="changes">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">12.</span>Changes to this policy</h2>
            <p className="max-w-[72ch]">We may update this Privacy Policy from time to time. The latest version will always be on this page with its "Last updated" date. If we make a significant change in how we use your data, we will inform you before it applies to you.</p>
          </section>
          <section className="[scroll-margin-top:80px]" id="grievance">
            <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">13.</span>Grievance officer</h2>
            <p className="max-w-[72ch]">If you have any concern about how your personal data is handled, please contact:</p>
            <div className="box bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) my-[14px] mx-0 py-[16px] px-[20px]">
              <dl className="grid gap-y-[6px] gap-x-[16px] m-0">
                <dt className="font-semibold">Grievance Officer</dt>
                <dd className="min-w-0 wrap-anywhere">Anamika Pathik, Proprietor</dd>
                <dt className="font-semibold">Email</dt>
                <dd className="min-w-0 wrap-anywhere">ankdarppan@gmail.com</dd>
                <dt className="font-semibold">Phone / WhatsApp</dt>
                <dd className="min-w-0 wrap-anywhere">93173 65025</dd>
                <dt className="font-semibold">Address</dt>
                <dd className="min-w-0 wrap-anywhere">HNO 48, Near Gurudwara, Sunny Side, Solan, Himachal Pradesh 173212</dd>
              </dl>
            </div>
            <p className="max-w-[72ch]">We will acknowledge your complaint within 48 hours and resolve it within one month.</p>
          </section>
        </div>
      </main>
      <footer className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor-deep) text-[15px]">
        <div className="wrap flex flex-wrap gap-[12px] justify-between my-0 mx-auto max-w-[1140px] pl-[max(16px,env(safe-area-inset-left,0px))] pr-[max(16px,env(safe-area-inset-right,0px))] [padding-block:28px_calc(28px_+_env(safe-area-inset-bottom,0px))]"><span>© Ank Darppan · 93173 65025 · ankdarppan@gmail.com</span><span><a href="/contact.html">Contact</a> · <a href="/shipping.html">Delivery</a> · <a href="/terms.html">Terms</a> · <a href="/refund.html">Refunds</a> · <a href="#">Privacy</a></span></div>
      </footer>
    </>
  );
}

function ImportedSection2WhatWeCollect() {
  return (
    <section className="[scroll-margin-top:80px]" id="collect">
      <h2 className="font-[family-name:var(--display)] text-[26px] font-normal leading-[1.2] mt-[36px] mr-0 mb-[8px] ml-0 text-balance"><span className="n mr-[6px]">2.</span>What we collect</h2>
      <div className="my-[14px] mx-0 overflow-x-auto">
        <table className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) text-[16px] min-w-[520px] w-full">
          <thead>
            <tr>
              <th className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[10px] px-[12px] text-left align-top">Data</th>
              <th className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[10px] px-[12px] text-left align-top">Why we need it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-[10px] px-[12px] text-left align-top">Full name and gender</td>
              <td className="py-[10px] px-[12px] text-left align-top">To prepare and personalise your Report</td>
            </tr>
            <tr>
              <td className="py-[10px] px-[12px] text-left align-top">Date, exact time and place of birth</td>
              <td className="py-[10px] px-[12px] text-left align-top">To calculate your kundli and Lal Kitab charts. Place of birth is converted to latitude and longitude</td>
            </tr>
            <tr>
              <td className="py-[10px] px-[12px] text-left align-top">WhatsApp number and email address</td>
              <td className="py-[10px] px-[12px] text-left align-top">To deliver the Report, confirm details and answer your questions</td>
            </tr>
            <tr>
              <td className="py-[10px] px-[12px] text-left align-top">Payment information: amount, Razorpay payment ID, payment status, and the name, email and phone entered at checkout</td>
              <td className="py-[10px] px-[12px] text-left align-top">To confirm your order and keep tax records</td>
            </tr>
            <tr>
              <td className="py-[10px] px-[12px] text-left align-top">Messages you send us</td>
              <td className="py-[10px] px-[12px] text-left align-top">To provide support and resolve complaints</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="max-w-[72ch]">We do not collect your card number, CVV, UPI PIN or net banking password. These are entered directly on Razorpay's secure page. If you order a Report for someone else, please make sure you have their permission to share their details with us.</p>
    </section>
  );
}
