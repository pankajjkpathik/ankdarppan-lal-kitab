import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Sampurna Lal Kitab Report | Ank Darppan" },
    { name: "description", content: "Personalised Sampurna Lal Kitab report with kundli charts, planetary analysis and a priority-wise remedy plan from Ank Darppan." },
    { property: "og:title", content: "Sampurna Lal Kitab Report | Ank Darppan" },
    { property: "og:description", content: "Discover your personalised Lal Kitab analysis and remedy plan from Ank Darppan." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  const [sample, setSample] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const closeSample = () => { setSample(null); trigger.current?.focus(); };
  useEffect(() => {
    if (sample === null) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSample();
      if (event.key === "ArrowRight") setSample(value => value === null ? null : (value + 1) % 9);
      if (event.key === "ArrowLeft") setSample(value => value === null ? null : (value + 8) % 9);
      if (event.key === "Tab") {
        const controls = Array.from(document.querySelectorAll<HTMLButtonElement>("#lb button"));
        const first = controls[0]; const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = overflow; window.removeEventListener("keydown", onKey); };
  }, [sample]);
  return (
    <>
      <style>{capturedCSS}</style>
      <svg className="absolute" width="0" height="0" aria-hidden="true">
        <symbol id="i-lock" viewBox="0 0 24 24">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24">
          <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z" />
          <path d="M8.5 12l2.5 2.5 4.5-5" />
        </symbol>
        <symbol id="i-file" viewBox="0 0 24 24">
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <path d="M14 3v6h6M8 13h8M8 17h5" />
        </symbol>
        <symbol id="i-chat" viewBox="0 0 24 24">
          <path d="M21 12a8 8 0 0 1-11.7 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z" />
        </symbol>
        <symbol id="i-lang" viewBox="0 0 24 24">
          <path d="M4 5h9M8.5 3v2M6 5c.6 3.4 3 6 6 7.5M11 5c-.8 3.6-3.4 6.6-7 8" />
          <path d="M13 21l4-9 4 9M14.4 18h5.2" />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.5 2.5L16 9.5" />
        </symbol>
        <symbol id="i-zoom" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4-4M11 8v6M8 11h6" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </symbol>
        <symbol id="i-mail" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </symbol>
        <symbol id="i-globe" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </symbol>
        <symbol id="i-star" viewBox="0 0 24 24">
          <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" />
        </symbol>
        <symbol id="i-link" viewBox="0 0 24 24">
          <path d="M9 7H7a5 5 0 0 0 0 10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" />
        </symbol>
        <symbol id="i-moon" viewBox="0 0 24 24">
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
          <path d="M15 4h3l-3 3h3" />
        </symbol>
        <symbol id="i-swords" viewBox="0 0 24 24">
          <path d="M4 4l10 10M4 4v4M4 4h4M20 4L10 14M20 4v4M20 4h-4M7 17l-3 3M17 17l3 3M6 15l3 3M18 15l-3 3" />
        </symbol>
        <symbol id="i-gauge" viewBox="0 0 24 24">
          <path d="M4 18a8 8 0 1 1 16 0" />
          <path d="M12 18l4-6" />
          <circle cx="12" cy="18" r="1.2" />
        </symbol>
        <symbol id="i-eye" viewBox="0 0 24 24">
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </symbol>
        <symbol id="i-list" viewBox="0 0 24 24">
          <path d="M10 6h10M10 12h10M10 18h10" />
          <path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
        </symbol>
        <symbol id="i-brief" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
        </symbol>
        <symbol id="i-heart" viewBox="0 0 24 24">
          <path d="M12 20s-7.5-4.6-9-9.3C2 7.4 4.3 4.5 7.4 4.5c2 0 3.4 1.1 4.6 2.7 1.2-1.6 2.6-2.7 4.6-2.7 3.1 0 5.4 2.9 4.4 6.2C19.5 15.4 12 20 12 20z" />
        </symbol>
        <symbol id="i-coins" viewBox="0 0 24 24">
          <ellipse cx="9" cy="7" rx="6" ry="3" />
          <path d="M3 7v4c0 1.7 2.7 3 6 3s6-1.3 6-3V7" />
          <path d="M9 14v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-6c0-1.6-2.4-2.9-5.5-3" />
        </symbol>
        <symbol id="i-bed" viewBox="0 0 24 24">
          <path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" />
          <circle cx="7" cy="11" r="2" />
        </symbol>
        <symbol id="i-pulse" viewBox="0 0 24 24">
          <path d="M3 12h4l2-5 4 10 2-5h6" />
        </symbol>
        <symbol id="i-home" viewBox="0 0 24 24">
          <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
        </symbol>
        <symbol id="i-book" viewBox="0 0 24 24">
          <path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z" />
          <path d="M4 20a2 2 0 0 0 2 2h13v-4" />
        </symbol>
        <symbol id="i-users" viewBox="0 0 24 24">
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
          <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6" />
        </symbol>
      </svg>
      <header className="top bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor-deep) sticky top-[env(safe-area-inset-top,0px)] z-9">
        <div className="wrap items-center gap-[12px] justify-between my-0 mx-auto max-w-[1140px]"><a className="brand items-center gap-[10px] no-underline whitespace-nowrap [font:400_22px/1_var(--display)]" href="#">{"\n      "}<svg className="mk h-[30px] w-[30px]" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M20 6l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="currentColor" opacity=".9" /></svg>
            Ank Darppan <small className="tracking-[.04em] opacity-75 [font:500_13px/1_var(--body)]">Lal Kitab Reports</small></a><a className={"buy sm items-center cursor-pointer text-[15px]! gap-[10px] justify-center overflow-hidden py-[10px] px-[18px] no-underline [font:700_18px/1_var(--body)] [&:hover]:[filter:brightness(1.07)]"} href="https://rzp.io/rzp/lalkitabreport" rel="noopener" target="_blank"><span className="lg">Get My Report · </span>₹941</a></div>
        <svg className="toran h-[44px] left-0 pointer-events-none absolute right-0 top-full w-full" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <pattern id="tp" width="64" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 3 Q32 10 64 3" fill="none" stroke="#c9972b" strokeWidth="2" />
              <path d="M16 6v8" stroke="#c9972b" strokeWidth="1.2" />
              <circle cx="16" cy="22" r="9" fill="#f0a020" />
              <circle cx="16" cy="22" r="6" fill="#d9661a" opacity=".55" />
              <circle cx="16" cy="22" r="9" fill="none" stroke="#b5490f" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="16" cy="35" r="5" fill="#f6c142" />
              <path d="M48 7 C56 16 54 30 48 38 C42 30 40 16 48 7Z" fill="#3e7d2c" />
              <path d="M48 9 V36" stroke="#9dc77f" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="44" fill="url(#tp)" />
        </svg>
      </header>
      <ImportedSectionKnowWhyProblemsRepeat />
      <section className="ledger bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) relative" aria-label="Report at a glance">
        <div className="wrap my-0 mx-auto max-w-[1140px] text-center">
          <dl className="m-0 py-[26px] [@media(max-width:720px)]:gap-y-[16px]">
            <div className="text-center">
              <dt className="[font:400_38px/1_var(--display)] [font-variant-numeric:tabular-nums]">65</dt>
              <dd className="text-[14px] leading-[1.3] mt-[6px] mr-0 mb-0 ml-0">pages, made for your chart alone</dd>
            </div>
            <div className="text-center">
              <dt className="[font:400_38px/1_var(--display)] [font-variant-numeric:tabular-nums]">29</dt>
              <dd className="text-[14px] leading-[1.3] mt-[6px] mr-0 mb-0 ml-0">chapters of Lal Kitab analysis</dd>
            </div>
            <div className="text-center">
              <dt className="[font:400_38px/1_var(--display)] [font-variant-numeric:tabular-nums]">6</dt>
              <dd className="text-[14px] leading-[1.3] mt-[6px] mr-0 mb-0 ml-0">kundli charts drawn</dd>
            </div>
            <div className="text-center">
              <dt className="[font:400_38px/1_var(--display)] [font-variant-numeric:tabular-nums]">9</dt>
              <dd className="text-[14px] leading-[1.3] mt-[6px] mr-0 mb-0 ml-0">grahas scored out of 100</dd>
            </div>
            <div className="text-center">
              <dt className="[font:400_38px/1_var(--display)] [font-variant-numeric:tabular-nums]">43</dt>
              <dd className="text-[14px] leading-[1.3] mt-[6px] mr-0 mb-0 ml-0">day remedy cycles, step by step</dd>
            </div>
          </dl>
        </div>
      </section>
      <ImportedSectionWhichPlanetCouldBe />
      <ImportedSectionTheQuestionsLalKitab />
      <ImportedSectionSeeThePagesBefore onOpen={(index, button) => { trigger.current = button; setSample(index); }} />
      <div className="orn items-center gap-[14px] my-0 mx-auto max-w-[420px]" aria-hidden="true">
        <i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[10px] w-[10px]" />
      </div>
      <ImportedSection29ChaptersIncluding />
      <ImportedSectionThreeStepsToYour />
      <ImportedSectionReadByFamiliesAcross />
      <ImportedSectionStartWithTheRemedy />
      <ImportedSectionBeforeYouOrder />
      <ImportedFooter />
      <a className={"wa bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#1f9d55] place-items-center fixed right-[max(18px,env(safe-area-inset-right,0px))] z-8 [&:hover]:[filter:brightness(1.1)]"} aria-label="Chat on WhatsApp" href="https://wa.me/919317365025?text=Hi%2C%20I%20want%20the%20Sampurna%20Lal%20Kitab%20report" rel="noopener" target="_blank">
        <svg className="fill-current h-[28px] w-[28px]" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" />
        </svg>
      </a>
      <div className="mbar [@media(max-width:640px)]:items-center [@media(max-width:640px)]:bg-none [@media(max-width:640px)]:[background-position:0%_0%] [@media(max-width:640px)]:[background-size:auto_auto] [@media(max-width:640px)]:[background-repeat:repeat] [@media(max-width:640px)]:[background-origin:padding-box] [@media(max-width:640px)]:[background-clip:border-box] [@media(max-width:640px)]:[background-attachment:scroll] [@media(max-width:640px)]:bg-(--sindoor-deep) [@media(max-width:640px)]:bottom-0 [@media(max-width:640px)]:gap-[12px] [@media(max-width:640px)]:justify-between [@media(max-width:640px)]:left-0 [@media(max-width:640px)]:pt-[10px] [@media(max-width:640px)]:pr-[max(16px,env(safe-area-inset-right,0px))] [@media(max-width:640px)]:pb-[calc(10px_+_env(safe-area-inset-bottom,0px))] [@media(max-width:640px)]:pl-[max(16px,env(safe-area-inset-left,0px))] [@media(max-width:640px)]:fixed [@media(max-width:640px)]:right-0 [@media(max-width:640px)]:z-8">
        <div className="p [@media(max-width:640px)]:[font:400_26px/1_var(--display)]">₹941<small className="[@media(max-width:640px)]:[font:500_12px/1.2_var(--body)]">65-page Lal Kitab PDF</small></div>
        <a className={"buy sm items-center cursor-pointer text-[15px]! gap-[10px] justify-center overflow-hidden py-[10px] px-[18px] no-underline [font:700_18px/1_var(--body)] [&:hover]:[filter:brightness(1.07)]"} href="https://rzp.io/rzp/lalkitabreport" rel="noopener" target="_blank">Get My Report</a>
      </div>
      <div className="lb bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#120806ee] grid-rows-[auto_1fr] inset-0 pt-[calc(env(safe-area-inset-top,0px)_+_12px)] pr-[max(12px,env(safe-area-inset-right,0px))] pb-[calc(env(safe-area-inset-bottom,0px)_+_12px)] pl-[max(12px,env(safe-area-inset-left,0px))] fixed z-50" id="lb" hidden={sample === null} onClick={event => { if (event.target === event.currentTarget) closeSample(); }} role="dialog" aria-modal="true" aria-label="Sample page viewer">
        <div className="lb-bar items-center flex-wrap gap-[12px] justify-between pb-[10px]">
          <span id="lb-cap">{sample === null ? "" : samplePages[sample]?.caption}</span>
          <div className="lb-nav gap-[8px]"><button className="cursor-pointer py-[9px] px-[15px] [font:600_15px/1_var(--body)]" type="button" id="lb-prev" onClick={() => setSample(value => value === null ? null : (value + 8) % 9)} aria-label="Previous page">←</button><button className="cursor-pointer py-[9px] px-[15px] [font:600_15px/1_var(--body)]" type="button" id="lb-next" onClick={() => setSample(value => value === null ? null : (value + 1) % 9)} aria-label="Next page">→</button><button className="cursor-pointer py-[9px] px-[15px] [font:600_15px/1_var(--body)]" type="button" id="lb-close" ref={closeButton} onClick={closeSample}>Close</button></div>
        </div>
        <div className="lb-stage items-start justify-center overflow-auto">
          <img className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white h-auto max-w-[min(900px,100%)]" id="lb-img" src={sample === null ? undefined : samplePages[sample]?.src} alt={sample === null ? "" : samplePages[sample]?.caption} />
        </div>
      </div>
    </>
  );
}

function ImportedSectionKnowWhyProblemsRepeat() {
  return (
    <section className="hero overflow-hidden">
      <span className="corner l left-[max(20px,env(safe-area-inset-left,0px))] opacity-85 absolute top-[58px] z-1 [font:400_22px/1_var(--display)]" aria-hidden="true">शुभ</span>
      <span className="corner r opacity-85 absolute right-[max(20px,env(safe-area-inset-right,0px))] top-[58px] z-1 [font:400_22px/1_var(--display)]" aria-hidden="true">लाभ</span>
      <div className="wrap items-center my-0 mx-auto max-w-[1140px] relative z-1">
        <div>
          <span className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#00000030] gap-[8px] py-[7px] px-[14px] [font:600_14px/1_var(--body)]"><span className="dot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--marigold) h-[8px] w-[8px]" />Personalised from your exact birth time</span>
          <h1 className="font-[family-name:var(--display)] text-[clamp(38px,5.6vw,66px)] font-normal leading-[1.15] m-0 mt-[18px]! text-balance"><span className="dev [background:linear-gradient(90deg,#f6dc8e,#c9972b,#f6dc8e)] bg-clip-text! text-[.6em] mb-[8px]">संपूर्ण लाल किताब</span>Know <em className="not-italic">why</em> problems repeat, and the upay that ends them</h1>
          <p className="sub text-[19px] m-0 mt-[18px]! max-w-[52ch]">A 65-page Lal Kitab report made only for your kundli. It finds your karmic debts, sleeping planets and planetary clashes, then gives you a priority-wise remedy plan you can start this week.</p>
          <div className="price-row items-center flex-wrap gap-y-[16px] gap-x-[24px] mt-[30px]">
            <div>
              <div className="price items-start gap-[2px]"><sup className="text-[.42em] mt-[.25em]">₹</sup>941</div>
              <span className="per tracking-[.02em] mt-[4px] [font:600_13px/1.3_var(--body)]">Less than ₹15 a page</span>
            </div>
            <a className={"buy items-center cursor-pointer gap-[10px] justify-center overflow-hidden py-[17px] px-[28px] no-underline [font:700_18px/1_var(--body)] [&:hover]:[filter:brightness(1.07)]"} href="https://rzp.io/rzp/lalkitabreport" rel="noopener" target="_blank">Get My Lal Kitab Report <svg className="ic fill-none flex-none h-[18px] stroke-current w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
          </div>
          <div className="trust flex-wrap text-[15px] gap-y-[10px] gap-x-[22px] mt-[26px]"><span className="items-center gap-[7px]"><svg className="ic fill-none flex-none h-[18px] stroke-current w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-shield" } as any)} /></svg>Secure Razorpay checkout</span><span className="items-center gap-[7px]"><svg className="ic fill-none flex-none h-[18px] stroke-current w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-chat" } as any)} /></svg>PDF on WhatsApp &amp; email</span><span className="items-center gap-[7px]"><svg className="ic fill-none flex-none h-[18px] stroke-current w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-lang" } as any)} /></svg>English with Hindi terms</span></div>
        </div>
        <div className="altar aspect-[1] justify-self-center relative w-full [@media(max-width:900px)]:-order-1" aria-hidden="true"><div className="halo [background:radial-gradient(circle,#fff6dc_0%,#f6d98c_34%,#e0a33a33_58%,transparent_70%)] inset-[6%] absolute" /><svg className="mandala h-full inset-0 absolute w-full" viewBox="-200 -200 400 400" aria-hidden="true"><circle className="fill-none opacity-70 stroke-current [stroke-width:1]" r="194" /><circle className="fill-none opacity-70 stroke-current [stroke-width:1]" r="186" strokeDasharray="2 5" /><g><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(0.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(15.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(30.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(45.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(60.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(75.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(90.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(105.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(120.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(135.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(150.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(165.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(180.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(195.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(210.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(225.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(240.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(255.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(270.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(285.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(300.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(315.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(330.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(345.00)" /></g><g><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(0.00)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(22.50)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(45.00)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(67.50)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(90.00)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(112.50)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(135.00)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(157.50)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(180.00)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(202.50)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(225.00)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(247.50)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(270.00)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(292.50)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(315.00)" /><path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(337.50)" /></g><g><circle className="fill-current opacity-80" cx="0.0" cy="-95.0" r="1.8" /><circle className="fill-current opacity-80" cx="8.3" cy="-94.6" r="1.8" /><circle className="fill-current opacity-80" cx="16.5" cy="-93.6" r="1.8" /><circle className="fill-current opacity-80" cx="24.6" cy="-91.8" r="1.8" /><circle className="fill-current opacity-80" cx="32.5" cy="-89.3" r="1.8" /><circle className="fill-current opacity-80" cx="40.1" cy="-86.1" r="1.8" /><circle className="fill-current opacity-80" cx="47.5" cy="-82.3" r="1.8" /><circle className="fill-current opacity-80" cx="54.5" cy="-77.8" r="1.8" /><circle className="fill-current opacity-80" cx="61.1" cy="-72.8" r="1.8" /><circle className="fill-current opacity-80" cx="67.2" cy="-67.2" r="1.8" /><circle className="fill-current opacity-80" cx="72.8" cy="-61.1" r="1.8" /><circle className="fill-current opacity-80" cx="77.8" cy="-54.5" r="1.8" /><circle className="fill-current opacity-80" cx="82.3" cy="-47.5" r="1.8" /><circle className="fill-current opacity-80" cx="86.1" cy="-40.1" r="1.8" /><circle className="fill-current opacity-80" cx="89.3" cy="-32.5" r="1.8" /><circle className="fill-current opacity-80" cx="91.8" cy="-24.6" r="1.8" /><circle className="fill-current opacity-80" cx="93.6" cy="-16.5" r="1.8" /><circle className="fill-current opacity-80" cx="94.6" cy="-8.3" r="1.8" /><circle className="fill-current opacity-80" cx="95.0" cy="-0.0" r="1.8" /><circle className="fill-current opacity-80" cx="94.6" cy="8.3" r="1.8" /><circle className="fill-current opacity-80" cx="93.6" cy="16.5" r="1.8" /><circle className="fill-current opacity-80" cx="91.8" cy="24.6" r="1.8" /><circle className="fill-current opacity-80" cx="89.3" cy="32.5" r="1.8" /><circle className="fill-current opacity-80" cx="86.1" cy="40.1" r="1.8" /><circle className="fill-current opacity-80" cx="82.3" cy="47.5" r="1.8" /><circle className="fill-current opacity-80" cx="77.8" cy="54.5" r="1.8" /><circle className="fill-current opacity-80" cx="72.8" cy="61.1" r="1.8" /><circle className="fill-current opacity-80" cx="67.2" cy="67.2" r="1.8" /><circle className="fill-current opacity-80" cx="61.1" cy="72.8" r="1.8" /><circle className="fill-current opacity-80" cx="54.5" cy="77.8" r="1.8" /><circle className="fill-current opacity-80" cx="47.5" cy="82.3" r="1.8" /><circle className="fill-current opacity-80" cx="40.1" cy="86.1" r="1.8" /><circle className="fill-current opacity-80" cx="32.5" cy="89.3" r="1.8" /><circle className="fill-current opacity-80" cx="24.6" cy="91.8" r="1.8" /><circle className="fill-current opacity-80" cx="16.5" cy="93.6" r="1.8" /><circle className="fill-current opacity-80" cx="8.3" cy="94.6" r="1.8" /><circle className="fill-current opacity-80" cx="0.0" cy="95.0" r="1.8" /><circle className="fill-current opacity-80" cx="-8.3" cy="94.6" r="1.8" /><circle className="fill-current opacity-80" cx="-16.5" cy="93.6" r="1.8" /><circle className="fill-current opacity-80" cx="-24.6" cy="91.8" r="1.8" /><circle className="fill-current opacity-80" cx="-32.5" cy="89.3" r="1.8" /><circle className="fill-current opacity-80" cx="-40.1" cy="86.1" r="1.8" /><circle className="fill-current opacity-80" cx="-47.5" cy="82.3" r="1.8" /><circle className="fill-current opacity-80" cx="-54.5" cy="77.8" r="1.8" /><circle className="fill-current opacity-80" cx="-61.1" cy="72.8" r="1.8" /><circle className="fill-current opacity-80" cx="-67.2" cy="67.2" r="1.8" /><circle className="fill-current opacity-80" cx="-72.8" cy="61.1" r="1.8" /><circle className="fill-current opacity-80" cx="-77.8" cy="54.5" r="1.8" /><circle className="fill-current opacity-80" cx="-82.3" cy="47.5" r="1.8" /><circle className="fill-current opacity-80" cx="-86.1" cy="40.1" r="1.8" /><circle className="fill-current opacity-80" cx="-89.3" cy="32.5" r="1.8" /><circle className="fill-current opacity-80" cx="-91.8" cy="24.6" r="1.8" /><circle className="fill-current opacity-80" cx="-93.6" cy="16.5" r="1.8" /><circle className="fill-current opacity-80" cx="-94.6" cy="8.3" r="1.8" /><circle className="fill-current opacity-80" cx="-95.0" cy="0.0" r="1.8" /><circle className="fill-current opacity-80" cx="-94.6" cy="-8.3" r="1.8" /><circle className="fill-current opacity-80" cx="-93.6" cy="-16.5" r="1.8" /><circle className="fill-current opacity-80" cx="-91.8" cy="-24.6" r="1.8" /><circle className="fill-current opacity-80" cx="-89.3" cy="-32.5" r="1.8" /><circle className="fill-current opacity-80" cx="-86.1" cy="-40.1" r="1.8" /><circle className="fill-current opacity-80" cx="-82.3" cy="-47.5" r="1.8" /><circle className="fill-current opacity-80" cx="-77.8" cy="-54.5" r="1.8" /><circle className="fill-current opacity-80" cx="-72.8" cy="-61.1" r="1.8" /><circle className="fill-current opacity-80" cx="-67.2" cy="-67.2" r="1.8" /><circle className="fill-current opacity-80" cx="-61.1" cy="-72.8" r="1.8" /><circle className="fill-current opacity-80" cx="-54.5" cy="-77.8" r="1.8" /><circle className="fill-current opacity-80" cx="-47.5" cy="-82.3" r="1.8" /><circle className="fill-current opacity-80" cx="-40.1" cy="-86.1" r="1.8" /><circle className="fill-current opacity-80" cx="-32.5" cy="-89.3" r="1.8" /><circle className="fill-current opacity-80" cx="-24.6" cy="-91.8" r="1.8" /><circle className="fill-current opacity-80" cx="-16.5" cy="-93.6" r="1.8" /><circle className="fill-current opacity-80" cx="-8.3" cy="-94.6" r="1.8" /></g><g><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(0.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(30.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(60.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(90.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(120.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(150.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(180.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(210.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(240.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(270.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(300.00)" /><path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(330.00)" /></g><circle className="fill-none opacity-70 stroke-current [stroke-width:1]" r="58" /></svg><ul className="graha inset-0 list-none m-0 p-0 absolute"><li className="left-1/2 absolute top-1/2" style={{ "--a": "0deg" } as CSSProperties}>सू</li><li className="left-1/2 absolute top-1/2" style={{ "--a": "40deg" } as CSSProperties}>चं</li><li className="left-1/2 absolute top-1/2" style={{ "--a": "80deg" } as CSSProperties}>मं</li><li className="left-1/2 absolute top-1/2" style={{ "--a": "120deg" } as CSSProperties}>बु</li><li className="left-1/2 absolute top-1/2" style={{ "--a": "160deg" } as CSSProperties}>गु</li><li className="left-1/2 absolute top-1/2" style={{ "--a": "200deg" } as CSSProperties}>शु</li><li className="left-1/2 absolute top-1/2" style={{ "--a": "240deg" } as CSSProperties}>श</li><li className="left-1/2 absolute top-1/2" style={{ "--a": "280deg" } as CSSProperties}>रा</li><li className="left-1/2 absolute top-1/2" style={{ "--a": "320deg" } as CSSProperties}>के</li></ul><svg className="lotus bottom-[9%] left-1/2 absolute w-[58%]" viewBox="0 0 300 80">{"\n        "}<defs><linearGradient id="lp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f7b2a0" /><stop offset="1" stopColor="#d9574a" /></linearGradient></defs>{"\n        "}<path d="M150 74 C110 74 40 66 12 44 C50 40 98 52 150 74Z" fill="url(#lp)" opacity=".85" />{"\n        "}<path d="M150 74 C190 74 260 66 288 44 C250 40 202 52 150 74Z" fill="url(#lp)" opacity=".85" />{"\n        "}<path d="M150 74 C118 60 70 34 58 10 C96 18 132 44 150 74Z" fill="url(#lp)" />{"\n        "}<path d="M150 74 C182 60 230 34 242 10 C204 18 168 44 150 74Z" fill="url(#lp)" />{"\n        "}<path d="M150 74 C132 50 128 20 150 0 C172 20 168 50 150 74Z" fill="url(#lp)" />{"\n        "}<ellipse cx="150" cy="76" rx="118" ry="5" fill="#c9972b" />{"\n      "}</svg><img className="ganesha left-1/2 max-w-full absolute top-1/2 w-[54%] [filter:drop-shadow(0_12px_18px_#3a0606aa)]" alt="" /><svg className="diya l bottom-[2%] left-0 absolute w-[19%]" viewBox="0 0 100 90">{"\n        "}<defs><radialGradient id="fl" cx=".5" cy=".7" r=".6"><stop offset="0" stopColor="#fff7c2" /><stop offset=".45" stopColor="#ffc23a" /><stop offset="1" stopColor="#e2531a" stopOpacity="0" /></radialGradient></defs>{"\n        "}<ellipse cx="50" cy="30" rx="26" ry="30" fill="#ffb53a" opacity=".25" />{"\n        "}<path className="flame" d="M50 6 C60 22 62 34 50 44 C38 34 40 22 50 6Z" fill="url(#fl)" />{"\n        "}<path d="M8 50 Q50 92 92 50 Q86 48 80 52 Q50 64 20 52 Q14 48 8 50Z" fill="#b5651d" />{"\n        "}<path d="M20 52 Q50 64 80 52" fill="none" stroke="#f2cf72" strokeWidth="2" />{"\n        "}<path d="M30 70 Q50 80 70 70" fill="none" stroke="#7a3b0f" strokeWidth="2" />{"\n      "}</svg><svg className="diya r bottom-[2%] absolute right-0 w-[19%]" viewBox="0 0 100 90">{"\n        "}<ellipse cx="50" cy="30" rx="26" ry="30" fill="#ffb53a" opacity=".25" />{"\n        "}<path className="flame" d="M50 6 C60 22 62 34 50 44 C38 34 40 22 50 6Z" fill="url(#fl)" />{"\n        "}<path d="M8 50 Q50 92 92 50 Q86 48 80 52 Q50 64 20 52 Q14 48 8 50Z" fill="#b5651d" />{"\n        "}<path d="M20 52 Q50 64 80 52" fill="none" stroke="#f2cf72" strokeWidth="2" />{"\n        "}<path d="M30 70 Q50 80 70 70" fill="none" stroke="#7a3b0f" strokeWidth="2" />{"\n      "}</svg></div>
      </div>
    </section>
  );
}

const finderResults = [
  {
    "house": "Lal Kitab looks at Houses 1 & 10",
    "title": "Authority, status and hard work",
    "badges": [
      [
        "सू",
        "Sun"
      ],
      [
        "श",
        "Saturn"
      ]
    ],
    "text": "The Sun rules self and status, Saturn rules karma and the 10th house of work. A weak or clashing Saturn often shows as delays and effort without reward."
  },
  {
    "house": "Lal Kitab looks at House 7",
    "title": "Partnership and married life",
    "badges": [
      [
        "शु",
        "Venus"
      ],
      [
        "बु",
        "Mercury"
      ]
    ],
    "text": "Venus and Mercury share the 7th as their pakka ghar. Enemies sitting with Venus, or the Sun burning it, are classic reasons for delay or friction."
  },
  {
    "house": "Lal Kitab looks at Houses 2 & 12",
    "title": "Savings and expenses",
    "badges": [
      [
        "गु",
        "Jupiter"
      ],
      [
        "रा",
        "Rahu"
      ]
    ],
    "text": "Jupiter guards the 2nd house of family wealth. Rahu in the 12th, the house of expenses, is the well-known 'sarai mein Rahu' that lets money slip away."
  },
  {
    "house": "Lal Kitab looks at Houses 4 & 12",
    "title": "Peace of mind and sleep",
    "badges": [
      [
        "चं",
        "Moon"
      ],
      [
        "रा",
        "Rahu"
      ],
      [
        "के",
        "Ketu"
      ]
    ],
    "text": "The Moon rules the mind from its pakka ghar, the 4th. Rahu and Ketu eclipse the Moon, and a troubled 12th house disturbs sleep."
  },
  {
    "house": "Lal Kitab looks at Houses 6 & 8",
    "title": "Disease and sudden trouble",
    "badges": [
      [
        "मं",
        "Mars"
      ],
      [
        "श",
        "Saturn"
      ]
    ],
    "text": "The 6th is the house of disease and the 8th of sudden events, where Mars and Saturn sit as pakka owners. Their condition shapes recurring health issues."
  },
  {
    "house": "Lal Kitab looks at House 4",
    "title": "Home, property and mother",
    "badges": [
      [
        "चं",
        "Moon"
      ],
      [
        "श",
        "Saturn"
      ]
    ],
    "text": "The 4th house is the Moon's own. Saturn connected with the 4th is linked with delayed or disputed property and a home built late."
  },
  {
    "house": "Lal Kitab looks at House 5",
    "title": "Children and education",
    "badges": [
      [
        "गु",
        "Jupiter"
      ],
      [
        "के",
        "Ketu"
      ]
    ],
    "text": "Jupiter is the pakka owner of the 5th house of children and learning. Ketu is the Lal Kitab karaka of sons. Enemies in the 5th can point to Svayam Rin."
  },
  {
    "house": "Lal Kitab looks at Houses 2, 4, 5, 9 & 12",
    "title": "Rin: a carried-forward karmic debt",
    "badges": [
      [
        "सू",
        "Sun"
      ],
      [
        "शु",
        "Venus"
      ],
      [
        "रा",
        "Rahu"
      ],
      [
        "के",
        "Ketu"
      ]
    ],
    "text": "When the same trouble repeats across generations, Lal Kitab checks for Pitru, Matru, Stri or other Rin. The remedy is done together by the whole family."
  }
];

const samplePages = [
  {
    "src": "/site-assets/cover.jpg",
    "caption": "Report cover page"
  },
  {
    "src": "/site-assets/birth-details.jpg",
    "caption": "Birth, astrological and panchang details page"
  },
  {
    "src": "/site-assets/kundli-charts.jpg",
    "caption": "Lagna, Lal Kitab and Chandra kundli charts"
  },
  {
    "src": "/site-assets/kundli-prakar.jpg",
    "caption": "Kundli prakar, life area predictions and Lal Kitab dasha"
  },
  {
    "src": "/site-assets/planet-predictions.jpg",
    "caption": "Planet-wise predictions and remedies table"
  },
  {
    "src": "/site-assets/karmic-debt.jpg",
    "caption": "Karmic debt analysis page"
  },
  {
    "src": "/site-assets/key-indicators.jpg",
    "caption": "Kundli key indicators and quick reference"
  },
  {
    "src": "/site-assets/remedy-plan.jpg",
    "caption": "Master remedy plan with priorities"
  },
  {
    "src": "/site-assets/remedy-rules.jpg",
    "caption": "Remedy sequence and Lal Kitab remedy guidelines"
  }
];

function ImportedSectionWhichPlanetCouldBe() {
  const [selected, setSelected] = useState(0);
  const result = finderResults[selected] ?? finderResults[0];
  if (!result) return null;
  return (
    <section className="section py-[80px]" id="finder">
      <div className="wrap my-0 mx-auto max-w-[1140px]">
        <p className="eyebrow items-center gap-[10px] tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">Try it: graha finder</p>
        <h2 className="font-[family-name:var(--display)] text-[clamp(30px,4.4vw,46px)] font-normal leading-[1.15] m-0 mt-[12px]! text-balance">Which planet could be behind your problem?</h2>
        <p className="lede m-0 mt-[14px]! max-w-[62ch]">Pick what is troubling you most. See which grahas Lal Kitab usually connects with it.</p>
        <div className="finder items-start gap-[28px] mt-[40px]">
          <div className="chips flex-wrap gap-[10px]" role="group" aria-label="Choose a problem"><button className="chip items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] cursor-pointer gap-[9px] py-[12px] px-[16px] text-left [font:600_16px/1.2_var(--body)]" type="button" aria-pressed={selected === 0} onClick={() => setSelected(0)}><svg className="ic fill-none flex-none h-[20px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-brief" } as any)} /></svg>Career not growing</button><button className="chip items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] cursor-pointer gap-[9px] py-[12px] px-[16px] text-left [font:600_16px/1.2_var(--body)]" type="button" aria-pressed={selected === 1} onClick={() => setSelected(1)}><svg className="ic fill-none flex-none h-[20px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-heart" } as any)} /></svg>Marriage delay or discord</button><button className="chip items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] cursor-pointer gap-[9px] py-[12px] px-[16px] text-left [font:600_16px/1.2_var(--body)]" type="button" aria-pressed={selected === 2} onClick={() => setSelected(2)}><svg className="ic fill-none flex-none h-[20px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-coins" } as any)} /></svg>Money comes but doesn't stay</button><button className="chip items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] cursor-pointer gap-[9px] py-[12px] px-[16px] text-left [font:600_16px/1.2_var(--body)]" type="button" aria-pressed={selected === 3} onClick={() => setSelected(3)}><svg className="ic fill-none flex-none h-[20px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-bed" } as any)} /></svg>Anxiety or poor sleep</button><button className="chip items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] cursor-pointer gap-[9px] py-[12px] px-[16px] text-left [font:600_16px/1.2_var(--body)]" type="button" aria-pressed={selected === 4} onClick={() => setSelected(4)}><svg className="ic fill-none flex-none h-[20px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-pulse" } as any)} /></svg>Health keeps troubling</button><button className="chip items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] cursor-pointer gap-[9px] py-[12px] px-[16px] text-left [font:600_16px/1.2_var(--body)]" type="button" aria-pressed={selected === 5} onClick={() => setSelected(5)}><svg className="ic fill-none flex-none h-[20px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-home" } as any)} /></svg>Property or home issues</button><button className="chip items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] cursor-pointer gap-[9px] py-[12px] px-[16px] text-left [font:600_16px/1.2_var(--body)]" type="button" aria-pressed={selected === 6} onClick={() => setSelected(6)}><svg className="ic fill-none flex-none h-[20px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-book" } as any)} /></svg>Children or studies</button><button className="chip items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] cursor-pointer gap-[9px] py-[12px] px-[16px] text-left [font:600_16px/1.2_var(--body)]" type="button" aria-pressed={selected === 7} onClick={() => setSelected(7)}><svg className="ic fill-none flex-none h-[20px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-users" } as any)} /></svg>Same trouble runs in the family</button></div>
          <div className="result [background:linear-gradient(160deg,var(--sindoor),var(--sindoor-deep))] min-h-full overflow-hidden p-[28px]" aria-live="polite">
            <p className="lbl tracking-[.14em] m-0 mt-[16px]! relative uppercase z-1 [font:600_12px/1_var(--body)]" id="r-house">{result.house}</p>
            <h3 className="font-[family-name:var(--display)] text-[28px] font-normal leading-[1.15] m-0 mt-[10px]! text-balance" id="r-title">{result.title}</h3>
            <div className="gbadges flex-wrap gap-[10px] mt-[16px]" id="r-badges">
              {result.badges.map(([symbol, name]) => <span className="gb" key={name}><b>{symbol}</b><span>{name}</span></span>)}
            </div>
            <p className="m-0 mt-[16px]! relative z-1" id="r-text">{result.text}</p>
            <a className={"buy items-center cursor-pointer gap-[10px] justify-center mt-[22px] overflow-hidden py-[17px] px-[28px] no-underline z-1 [font:700_18px/1_var(--body)] [&:hover]:[filter:brightness(1.07)]"} href="https://rzp.io/rzp/lalkitabreport" rel="noopener" target="_blank">Check my own chart · ₹941 <svg className="ic fill-none flex-none h-[18px] stroke-current w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
          </div>
        </div>
        <p className="note text-[13px] m-0 mt-[14px]!">This is general Lal Kitab guidance. Your report reads where these grahas actually sit in your kundli.</p>
      </div>
    </section>
  );
}

function ImportedSectionTheQuestionsLalKitab() {
  return (
    <section className="section inside bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[80px]" id="answers">
      <div className="wrap my-0 mx-auto max-w-[1140px]">
        <div className="answers-head items-center gap-[40px]">
          <div>
            <p className="eyebrow items-center gap-[10px] tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">What your report tells you</p>
            <h2 className="font-[family-name:var(--display)] text-[clamp(30px,4.4vw,46px)] font-normal leading-[1.15] m-0 mt-[12px]! text-balance">The questions Lal Kitab answers better than any other system</h2>
            <p className="lede m-0 mt-[14px]! max-w-[62ch]">Lal Kitab looks at why the same problem keeps coming back, and corrects it with simple, low-cost upay. No expensive pujas. No fear.</p>
          </div>
          <svg className="kundli w-full" viewBox="0 0 300 300" role="img" aria-label="Lal Kitab kundli chart with 12 houses">
            <rect className="fill-(--card) stroke-(--foil) [stroke-width:2]" x="4" y="4" width="292" height="292" rx="6" />
            <polygon className="fill-[#f0a02033]" points="150,4 77,77 150,150 223,77" />
            <line className="fill-none stroke-(--foil) [stroke-width:1.4]" x1="4" y1="4" x2="296" y2="296" />
            <line className="fill-none stroke-(--foil) [stroke-width:1.4]" x1="296" y1="4" x2="4" y2="296" />
            <polygon className="in fill-none stroke-(--foil) [stroke-width:1.4]" points="150,4 296,150 150,296 4,150" />
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="150" y="62">1</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="75" y="30">2</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="28" y="78">3</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="88" y="155">4</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="28" y="228">5</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="75" y="282">6</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="150" y="210">7</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="225" y="282">8</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="272" y="228">9</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="212" y="155">10</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="272" y="78">11</text>
            <text className="fill-(--ink-2) [font:600_13px_var(--body)] [text-anchor:middle]" x="225" y="30">12</text>
            <text className="pl fill-(--accent-ink) [font:700_13px_var(--body)] [text-anchor:middle]" x="150" y="100">सू  गु</text>
            <text className="pl fill-(--accent-ink) [font:700_13px_var(--body)] [text-anchor:middle]" x="150" y="248">शु</text>
            <text className="pl fill-(--accent-ink) [font:700_13px_var(--body)] [text-anchor:middle]" x="212" y="178">श</text>
            <text className="pl fill-(--accent-ink) [font:700_13px_var(--body)] [text-anchor:middle]" x="88" y="178">चं</text>
            <text className="pl fill-(--accent-ink) [font:700_13px_var(--body)] [text-anchor:middle]" x="262" y="248">मं</text>
            <text className="pl fill-(--accent-ink) [font:700_13px_var(--body)] [text-anchor:middle]" x="75" y="50">बु</text>
            <text className="pl fill-(--accent-ink) [font:700_13px_var(--body)] [text-anchor:middle]" x="225" y="50">रा</text>
            <text className="pl fill-(--accent-ink) [font:700_13px_var(--body)] [text-anchor:middle]" x="75" y="262">के</text>
          </svg>
        </div>
        <div className="answers gap-[18px] mt-[40px]">
          <article className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) min-w-0 py-[24px] px-[22px]">
            <div className="icb bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) h-[46px] place-items-center w-[46px]">
              <svg className="ic fill-none flex-none h-[24px] stroke-current w-[24px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-link" } as any)} />
              </svg>
            </div>
            <span className="hi mt-[16px] mr-0 mb-[6px] ml-0 [font:500_15px/1_var(--body)]">रिण दोष</span>
            <h3 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.15] m-0 text-balance">Karmic debts (Rin)</h3>
            <p className="text-[16px] m-0 mt-[8px]!">Is a pitru, matru, stri or kudrat rin active in your chart? Which planets trigger it, what it does in life, and the exact remedy to clear it.</p>
          </article>
          <article className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) min-w-0 py-[24px] px-[22px]">
            <div className="icb bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) h-[46px] place-items-center w-[46px]">
              <svg className="ic fill-none flex-none h-[24px] stroke-current w-[24px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-moon" } as any)} />
              </svg>
            </div>
            <span className="hi mt-[16px] mr-0 mb-[6px] ml-0 [font:500_15px/1_var(--body)]">सोया हुआ ग्रह</span>
            <h3 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.15] m-0 text-balance">Sleeping planets &amp; houses</h3>
            <p className="text-[16px] m-0 mt-[8px]!">Which grahas are asleep and holding back results, the age they wake up, and how to wake them earlier.</p>
          </article>
          <article className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) min-w-0 py-[24px] px-[22px]">
            <div className="icb bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) h-[46px] place-items-center w-[46px]">
              <svg className="ic fill-none flex-none h-[24px] stroke-current w-[24px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-swords" } as any)} />
              </svg>
            </div>
            <span className="hi mt-[16px] mr-0 mb-[6px] ml-0 [font:500_15px/1_var(--body)]">टक्कर · षडाष्टक</span>
            <h3 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.15] m-0 text-balance">Planetary clashes</h3>
            <p className="text-[16px] m-0 mt-[8px]!">Which planet is "cutting the root" (jad katna) of another, and the remedy that removes the clash.</p>
          </article>
          <article className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) min-w-0 py-[24px] px-[22px]">
            <div className="icb bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) h-[46px] place-items-center w-[46px]">
              <svg className="ic fill-none flex-none h-[24px] stroke-current w-[24px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-gauge" } as any)} />
              </svg>
            </div>
            <span className="hi mt-[16px] mr-0 mb-[6px] ml-0 [font:500_15px/1_var(--body)]">जीवन फल</span>
            <h3 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.15] m-0 text-balance">Life area scores</h3>
            <p className="text-[16px] m-0 mt-[8px]!">Career, business, marriage, love, education, finance, health and spirituality, each scored out of 100 with Lal Kitab dasha timing.</p>
          </article>
          <article className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) min-w-0 py-[24px] px-[22px]">
            <div className="icb bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) h-[46px] place-items-center w-[46px]">
              <svg className="ic fill-none flex-none h-[24px] stroke-current w-[24px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-eye" } as any)} />
              </svg>
            </div>
            <span className="hi mt-[16px] mr-0 mb-[6px] ml-0 [font:500_15px/1_var(--body)]">मसनूई ग्रह</span>
            <h3 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.15] m-0 text-balance">Masnui &amp; dhoke ke grah</h3>
            <p className="text-[16px] m-0 mt-[8px]!">Artificial planets formed by combinations, the betrayal planet in your chart, and kaayam grahas that give full results.</p>
          </article>
          <article className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) min-w-0 py-[24px] px-[22px]">
            <div className="icb bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) h-[46px] place-items-center w-[46px]">
              <svg className="ic fill-none flex-none h-[24px] stroke-current w-[24px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-list" } as any)} />
              </svg>
            </div>
            <span className="hi mt-[16px] mr-0 mb-[6px] ml-0 [font:500_15px/1_var(--body)]">उपाय क्रम</span>
            <h3 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.15] m-0 text-balance">Master Remedy Plan</h3>
            <p className="text-[16px] m-0 mt-[8px]!">All your upay ranked by priority, with why each one is prescribed and the rules for doing it so it actually works.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSeeThePagesBefore({ onOpen }: { onOpen: (index: number, button: HTMLButtonElement) => void }) {
  return (
    <section className="section py-[80px]" id="inside">
      <div className="wrap my-0 mx-auto max-w-[1140px]">
        <div className="text-center">
          <p className="eyebrow items-center gap-[10px] justify-center tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">Look inside a real report</p>
          <h2 className="font-[family-name:var(--display)] text-[clamp(30px,4.4vw,46px)] font-normal leading-[1.15] m-0 mt-[12px]! text-balance">See the pages before you buy</h2>
          <p className="lede m-0 mx-auto! mt-[14px]! max-w-[62ch]">These are actual pages from a client's Sampurna Lal Kitab report. Tap any page to read it full size.</p>
          <p className="privacy items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) text-[14px] gap-[8px] m-0 mt-[16px]! py-[7px] px-[14px]"><svg className="ic fill-none flex-none h-[16px] stroke-current w-[16px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-lock" } as any)} /></svg>Client name and birth details are blurred for privacy</p>
        </div>
        <div className="gallery gap-y-[30px] gap-x-[22px] mt-[36px]" id="gallery">
          <figure className="m-0 min-w-0">
            <button type="button" onClick={event => onOpen(0, event.currentTarget)} aria-haspopup="dialog">
              <img className="aspect-[911/1100] bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white max-w-full object-cover object-top w-full" loading="lazy" alt="Report cover page" />
              <span className="tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor) tracking-[.1em] py-[5px] px-[8px] absolute right-[10px] top-[10px] [font:600_11px/1_var(--body)]">SAMPLE</span>
              <span className="zoom items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#2a1a12d9] bottom-[10px] gap-[6px] left-[10px] py-[7px] px-[10px] absolute [font:600_13px/1_var(--body)]"><svg className="ic fill-none flex-none h-[15px] stroke-current w-[15px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-zoom" } as any)} /></svg>View page</span>
            </button>
            <figcaption className="text-[15px] leading-[1.45] mt-[12px]"><b className="text-[16px] font-semibold">Your personal cover</b>Prepared in your name with birth date, time and place.</figcaption>
          </figure>
          <figure className="m-0 min-w-0">
            <button type="button" onClick={event => onOpen(1, event.currentTarget)} aria-haspopup="dialog">
              <img className="aspect-[911/1100] bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white max-w-full object-cover object-top w-full" loading="lazy" alt="Birth, astrological and panchang details page" />
              <span className="tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor) tracking-[.1em] py-[5px] px-[8px] absolute right-[10px] top-[10px] [font:600_11px/1_var(--body)]">SAMPLE</span>
              <span className="zoom items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#2a1a12d9] bottom-[10px] gap-[6px] left-[10px] py-[7px] px-[10px] absolute [font:600_13px/1_var(--body)]"><svg className="ic fill-none flex-none h-[15px] stroke-current w-[15px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-zoom" } as any)} /></svg>View page</span>
            </button>
            <figcaption className="text-[15px] leading-[1.45] mt-[12px]"><b className="text-[16px] font-semibold">Birth, astro &amp; panchang details</b>Lagna, rashi, nakshatra, strongest and weakest planet, dasha balance.</figcaption>
          </figure>
          <figure className="m-0 min-w-0">
            <button type="button" onClick={event => onOpen(2, event.currentTarget)} aria-haspopup="dialog">
              <img className="aspect-[911/1100] bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white max-w-full object-cover object-top w-full" loading="lazy" alt="Lagna, Lal Kitab and Chandra kundli charts" />
              <span className="tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor) tracking-[.1em] py-[5px] px-[8px] absolute right-[10px] top-[10px] [font:600_11px/1_var(--body)]">SAMPLE</span>
              <span className="zoom items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#2a1a12d9] bottom-[10px] gap-[6px] left-[10px] py-[7px] px-[10px] absolute [font:600_13px/1_var(--body)]"><svg className="ic fill-none flex-none h-[15px] stroke-current w-[15px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-zoom" } as any)} /></svg>View page</span>
            </button>
            <figcaption className="text-[15px] leading-[1.45] mt-[12px]"><b className="text-[16px] font-semibold">Lagna, Lal Kitab &amp; Chandra kundli</b>Plus Surya, Navamsa (D9) and Varshphal charts on the next page.</figcaption>
          </figure>
          <figure className="m-0 min-w-0">
            <button type="button" onClick={event => onOpen(3, event.currentTarget)} aria-haspopup="dialog">
              <img className="aspect-[911/1100] bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white max-w-full object-cover object-top w-full" loading="lazy" alt="Kundli prakar, life area predictions and Lal Kitab dasha" />
              <span className="tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor) tracking-[.1em] py-[5px] px-[8px] absolute right-[10px] top-[10px] [font:600_11px/1_var(--body)]">SAMPLE</span>
              <span className="zoom items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#2a1a12d9] bottom-[10px] gap-[6px] left-[10px] py-[7px] px-[10px] absolute [font:600_13px/1_var(--body)]"><svg className="ic fill-none flex-none h-[15px] stroke-current w-[15px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-zoom" } as any)} /></svg>View page</span>
            </button>
            <figcaption className="text-[15px] leading-[1.45] mt-[12px]"><b className="text-[16px] font-semibold">Kundli prakar &amp; life area scores</b>Andha, Rathandh and Dharmi checks, 8 life areas scored, and the active Lal Kitab dasha.</figcaption>
          </figure>
          <figure className="m-0 min-w-0">
            <button type="button" onClick={event => onOpen(4, event.currentTarget)} aria-haspopup="dialog">
              <img className="aspect-[911/1100] bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white max-w-full object-cover object-top w-full" loading="lazy" alt="Planet-wise predictions and remedies table" />
              <span className="tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor) tracking-[.1em] py-[5px] px-[8px] absolute right-[10px] top-[10px] [font:600_11px/1_var(--body)]">SAMPLE</span>
              <span className="zoom items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#2a1a12d9] bottom-[10px] gap-[6px] left-[10px] py-[7px] px-[10px] absolute [font:600_13px/1_var(--body)]"><svg className="ic fill-none flex-none h-[15px] stroke-current w-[15px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-zoom" } as any)} /></svg>View page</span>
            </button>
            <figcaption className="text-[15px] leading-[1.45] mt-[12px]"><b className="text-[16px] font-semibold">Planet-wise predictions</b>Positive effects, challenges and top remedies for each graha.</figcaption>
          </figure>
          <figure className="m-0 min-w-0">
            <button type="button" onClick={event => onOpen(5, event.currentTarget)} aria-haspopup="dialog">
              <img className="aspect-[911/1100] bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white max-w-full object-cover object-top w-full" loading="lazy" alt="Karmic debt analysis page" />
              <span className="tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor) tracking-[.1em] py-[5px] px-[8px] absolute right-[10px] top-[10px] [font:600_11px/1_var(--body)]">SAMPLE</span>
              <span className="zoom items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#2a1a12d9] bottom-[10px] gap-[6px] left-[10px] py-[7px] px-[10px] absolute [font:600_13px/1_var(--body)]"><svg className="ic fill-none flex-none h-[15px] stroke-current w-[15px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-zoom" } as any)} /></svg>View page</span>
            </button>
            <figcaption className="text-[15px] leading-[1.45] mt-[12px]"><b className="text-[16px] font-semibold">Karmic debt (Rin) analysis</b>Trigger planets, ancestral cause, signs in life and the nivaran upay.</figcaption>
          </figure>
          <figure className="m-0 min-w-0">
            <button type="button" onClick={event => onOpen(6, event.currentTarget)} aria-haspopup="dialog">
              <img className="aspect-[911/1100] bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white max-w-full object-cover object-top w-full" loading="lazy" alt="Kundli key indicators and quick reference" />
              <span className="tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor) tracking-[.1em] py-[5px] px-[8px] absolute right-[10px] top-[10px] [font:600_11px/1_var(--body)]">SAMPLE</span>
              <span className="zoom items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#2a1a12d9] bottom-[10px] gap-[6px] left-[10px] py-[7px] px-[10px] absolute [font:600_13px/1_var(--body)]"><svg className="ic fill-none flex-none h-[15px] stroke-current w-[15px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-zoom" } as any)} /></svg>View page</span>
            </button>
            <figcaption className="text-[15px] leading-[1.45] mt-[12px]"><b className="text-[16px] font-semibold">Kundli key indicators</b>Takkar, kaayam, soya graha, soya ghar and dhoke ka grah at a glance.</figcaption>
          </figure>
          <figure className="m-0 min-w-0">
            <button type="button" onClick={event => onOpen(7, event.currentTarget)} aria-haspopup="dialog">
              <img className="aspect-[911/1100] bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white max-w-full object-cover object-top w-full" loading="lazy" alt="Master remedy plan with priorities" />
              <span className="tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor) tracking-[.1em] py-[5px] px-[8px] absolute right-[10px] top-[10px] [font:600_11px/1_var(--body)]">SAMPLE</span>
              <span className="zoom items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#2a1a12d9] bottom-[10px] gap-[6px] left-[10px] py-[7px] px-[10px] absolute [font:600_13px/1_var(--body)]"><svg className="ic fill-none flex-none h-[15px] stroke-current w-[15px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-zoom" } as any)} /></svg>View page</span>
            </button>
            <figcaption className="text-[15px] leading-[1.45] mt-[12px]"><b className="text-[16px] font-semibold">Master Remedy Plan</b>Every upay ranked 1, 2, 3 with the reason it was prescribed.</figcaption>
          </figure>
          <figure className="m-0 min-w-0">
            <button type="button" onClick={event => onOpen(8, event.currentTarget)} aria-haspopup="dialog">
              <img className="aspect-[911/1100] bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white max-w-full object-cover object-top w-full" loading="lazy" alt="Remedy sequence and Lal Kitab remedy guidelines" />
              <span className="tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor) tracking-[.1em] py-[5px] px-[8px] absolute right-[10px] top-[10px] [font:600_11px/1_var(--body)]">SAMPLE</span>
              <span className="zoom items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#2a1a12d9] bottom-[10px] gap-[6px] left-[10px] py-[7px] px-[10px] absolute [font:600_13px/1_var(--body)]"><svg className="ic fill-none flex-none h-[15px] stroke-current w-[15px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-zoom" } as any)} /></svg>View page</span>
            </button>
            <figcaption className="text-[15px] leading-[1.45] mt-[12px]"><b className="text-[16px] font-semibold">How to do the remedies</b>Sequence, timing, water and daan rules, and when to expect results.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function ImportedSection29ChaptersIncluding() {
  return (
    <section className="section py-[80px]" id="chapters">
      <div className="wrap my-0 mx-auto max-w-[1140px]">
        <p className="eyebrow items-center gap-[10px] tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">Inside the report</p>
        <h2 className="font-[family-name:var(--display)] text-[clamp(30px,4.4vw,46px)] font-normal leading-[1.15] m-0 mt-[12px]! text-balance">29 chapters, including</h2>
        <ol className="chapters gap-x-[48px] list-none mt-[36px] mr-0 mb-0 ml-0 p-0">
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">1</span>
            <span className="t font-semibold">Janam Vivaran <i className="not-italic font-normal">Birth details</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">2</span>
            <span className="t font-semibold">Janam Hora <i className="not-italic font-normal">Birth time planet &amp; masnui</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">3</span>
            <span className="t font-semibold">Grah Sthiti <i className="not-italic font-normal">Planet positions</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">4</span>
            <span className="t font-semibold">Bhav Vivaran <i className="not-italic font-normal">All 12 houses</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">5</span>
            <span className="t font-semibold">Grah Maitri <i className="not-italic font-normal">Planet friendship table</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">6</span>
            <span className="t font-semibold">Kundli Prakar <i className="not-italic font-normal">Horoscope type</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">8</span>
            <span className="t font-semibold">Grah Bal <i className="not-italic font-normal">Planet strength</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">9</span>
            <span className="t font-semibold">Grah Phal <i className="not-italic font-normal">Planet results by house</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">11</span>
            <span className="t font-semibold">Bhav Phal <i className="not-italic font-normal">House results</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">12</span>
            <span className="t font-semibold">Jeevan Phal <i className="not-italic font-normal">Life area predictions</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">14</span>
            <span className="t font-semibold">Varshphal <i className="not-italic font-normal">Current year</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">15</span>
            <span className="t font-semibold">Rin Dosha <i className="not-italic font-normal">Karmic debts</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">16</span>
            <span className="t font-semibold">Mangal Baddh</span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">17</span>
            <span className="t font-semibold">RaKeSH Effect <i className="not-italic font-normal">Rahu, Ketu &amp; Saturn</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">18</span>
            <span className="t font-semibold">Shadashtak <i className="not-italic font-normal">6-8 planetary clashes</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">20</span>
            <span className="t font-semibold">Soya Hua Grah <i className="not-italic font-normal">Sleeping planets</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">22</span>
            <span className="t font-semibold">Vishesh Yoga <i className="not-italic font-normal">Raj yog &amp; special combinations</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">23</span>
            <span className="t font-semibold">Ichchhit Grah Sthan <i className="not-italic font-normal">Where each planet should be</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">24</span>
            <span className="t font-semibold">Grah Upay <i className="not-italic font-normal">Planet remedies</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">25</span>
            <span className="t font-semibold">Khazana Potli <i className="not-italic font-normal">Gemstone &amp; object remedies</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">26</span>
            <span className="t font-semibold">Upay Ke Niyam <i className="not-italic font-normal">Rules for doing remedies</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">27</span>
            <span className="t font-semibold">Makan Kab Banwaye <i className="not-italic font-normal">Best time to build a house</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">28</span>
            <span className="t font-semibold">Shubh Tatva <i className="not-italic font-normal">Lucky day, colour, metal &amp; direction</i></span>
          </li>
          <li className="break-inside-avoid gap-[4px] grid-cols-[48px_1fr] py-[11px] px-0">
            <span className="n [font:400_20px/1.3_var(--display)] [font-variant-numeric:tabular-nums]">29</span>
            <span className="t font-semibold">Saaransh <i className="not-italic font-normal">Final conclusion &amp; life summary</i></span>
          </li>
        </ol>
      </div>
    </section>
  );
}

function ImportedSectionThreeStepsToYour() {
  return (
    <section className="section inside bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[80px]" id="how">
      <div className="wrap my-0 mx-auto max-w-[1140px]">
        <div className="text-center">
          <p className="eyebrow items-center gap-[10px] justify-center tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">How it works</p>
          <h2 className="font-[family-name:var(--display)] text-[clamp(30px,4.4vw,46px)] font-normal leading-[1.15] m-0 mt-[12px]! text-balance">Three steps to your report</h2>
        </div>
        <ol className="steps gap-[24px] list-none mt-[40px] mr-0 mb-0 ml-0 p-0 relative [counter-reset:s]">
          <li className="py-[28px] px-[24px] relative [counter-increment:s]">
            <h3 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.15] m-0 text-balance">Pay ₹941 securely</h3>
            <p className="text-[16px] m-0 mt-[6px]!">Pay with UPI, card, net banking or wallet through Razorpay.</p>
          </li>
          <li className="py-[28px] px-[24px] relative [counter-increment:s]">
            <h3 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.15] m-0 text-balance">Share your birth details</h3>
            <p className="text-[16px] m-0 mt-[6px]!">Fill in your details on the payment page. An accurate birth time gives the most accurate report.</p>
          </li>
          <li className="py-[28px] px-[24px] relative [counter-increment:s]">
            <h3 className="font-[family-name:var(--display)] text-[22px] font-normal leading-[1.15] m-0 text-balance">Receive your PDF</h3>
            <p className="text-[16px] m-0 mt-[6px]!">Your 65-page report is prepared by Ank Darppan and sent to your WhatsApp and email.</p>
          </li>
        </ol>
        <div className="need items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) flex-wrap text-[15px] gap-y-[10px] gap-x-[12px] mt-[28px] py-[20px] px-[22px]"><b className="mr-[6px]">We need:</b><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[4px] px-[12px]">Full name</span><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[4px] px-[12px]">Date of birth</span><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[4px] px-[12px]">Exact birth time</span><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[4px] px-[12px]">Place of birth</span><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[4px] px-[12px]">Gender</span><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) py-[4px] px-[12px]">WhatsApp number &amp; email</span></div>
      </div>
    </section>
  );
}

function ImportedSectionReadByFamiliesAcross() {
  return (
    <section className="section py-[80px]" id="reviews">
      <div className="wrap my-0 mx-auto max-w-[1140px]">
        <div className="text-center">
          <p className="eyebrow items-center gap-[10px] justify-center tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">What readers say</p>
          <h2 className="font-[family-name:var(--display)] text-[clamp(30px,4.4vw,46px)] font-normal leading-[1.15] m-0 mt-[12px]! text-balance">Read by families across India</h2>
        </div>
        <div className="reviews gap-[22px] mt-[40px]">
          <figure className="review bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) flex-col gap-[14px] m-0 min-w-0 py-[26px] px-[24px]">
            <div className="stars gap-[3px]" aria-label="5 out of 5">
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote className="text-[16.5px] leading-[1.6] m-0">I had heard about pitru rin but never knew if I had it. The report showed exactly which planets trigger it in my chart and what to do. The remedy was simple and I finished the 43 days without any confusion.</blockquote>
            <figcaption className="items-center text-[14px] gap-[10px] mt-auto">
              <span className="av [background:radial-gradient(circle_at_35%_30%,var(--sindoor-hi),var(--sindoor-deep))] flex-none h-[40px] place-items-center w-[40px] [font:400_18px/1_var(--display)]">R</span>
              <span><b className="text-[15px] font-semibold">Rajesh M.</b>Ludhiana, Punjab</span>
            </figcaption>
          </figure>
          <figure className="review bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) flex-col gap-[14px] m-0 min-w-0 py-[26px] px-[24px]">
            <div className="stars gap-[3px]" aria-label="5 out of 5">
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote className="text-[16.5px] leading-[1.6] m-0">Very detailed for ₹941. Six charts, every planet with its score, and the life area meter for career and marriage. The Master Remedy Plan told me what to start with first, which I really needed.</blockquote>
            <figcaption className="items-center text-[14px] gap-[10px] mt-auto">
              <span className="av [background:radial-gradient(circle_at_35%_30%,var(--sindoor-hi),var(--sindoor-deep))] flex-none h-[40px] place-items-center w-[40px] [font:400_18px/1_var(--display)]">P</span>
              <span><b className="text-[15px] font-semibold">Priya S.</b>Jaipur, Rajasthan</span>
            </figcaption>
          </figure>
          <figure className="review bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) flex-col gap-[14px] m-0 min-w-0 py-[26px] px-[24px]">
            <div className="stars gap-[3px]" aria-label="5 out of 5">
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote className="text-[16.5px] leading-[1.6] m-0">Other reports gave me a list of 50 upay with no order. This one explained the rule of one remedy per 40-day cycle and ranked them. The sleeping planet section explained why my results were delayed.</blockquote>
            <figcaption className="items-center text-[14px] gap-[10px] mt-auto">
              <span className="av [background:radial-gradient(circle_at_35%_30%,var(--sindoor-hi),var(--sindoor-deep))] flex-none h-[40px] place-items-center w-[40px] [font:400_18px/1_var(--display)]">A</span>
              <span><b className="text-[15px] font-semibold">Amit K.</b>Delhi</span>
            </figcaption>
          </figure>
          <figure className="review bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) flex-col gap-[14px] m-0 min-w-0 py-[26px] px-[24px]">
            <div className="stars gap-[3px]" aria-label="5 out of 5">
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote className="text-[16.5px] leading-[1.6] m-0">Ordered it for my son before his job change. The remedies are things we can do at home, like feeding dogs and donating on the right day. Nothing expensive. The report reached us on WhatsApp.</blockquote>
            <figcaption className="items-center text-[14px] gap-[10px] mt-auto">
              <span className="av [background:radial-gradient(circle_at_35%_30%,var(--sindoor-hi),var(--sindoor-deep))] flex-none h-[40px] place-items-center w-[40px] [font:400_18px/1_var(--display)]">S</span>
              <span><b className="text-[15px] font-semibold">Sunita G.</b>Chandigarh</span>
            </figcaption>
          </figure>
          <figure className="review bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) flex-col gap-[14px] m-0 min-w-0 py-[26px] px-[24px]">
            <div className="stars gap-[3px]" aria-label="5 out of 5">
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote className="text-[16.5px] leading-[1.6] m-0">The design is beautiful and easy to read. Hindi terms with English explanation, so my parents and I could both follow it. The Takkar table finally made sense of the clash between my planets.</blockquote>
            <figcaption className="items-center text-[14px] gap-[10px] mt-auto">
              <span className="av [background:radial-gradient(circle_at_35%_30%,var(--sindoor-hi),var(--sindoor-deep))] flex-none h-[40px] place-items-center w-[40px] [font:400_18px/1_var(--display)]">N</span>
              <span><b className="text-[15px] font-semibold">Neha V.</b>Pune, Maharashtra</span>
            </figcaption>
          </figure>
          <figure className="review bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) flex-col gap-[14px] m-0 min-w-0 py-[26px] px-[24px]">
            <div className="stars gap-[3px]" aria-label="4 out of 5">
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="ic off fill-current flex-none h-[18px] stroke-none w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote className="text-[16.5px] leading-[1.6] m-0">Good value and a lot of content. I wish it had a short Hindi-only version for my mother, but the remedy pages are clear. The Makan Kab Banwaye section was useful for our planning.</blockquote>
            <figcaption className="items-center text-[14px] gap-[10px] mt-auto">
              <span className="av [background:radial-gradient(circle_at_35%_30%,var(--sindoor-hi),var(--sindoor-deep))] flex-none h-[40px] place-items-center w-[40px] [font:400_18px/1_var(--display)]">V</span>
              <span><b className="text-[15px] font-semibold">Vikram T.</b>Hoshangabad, MP</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionStartWithTheRemedy() {
  return (
    <section className="offer [background:radial-gradient(100%_120%_at_20%_0%,var(--sindoor-hi),var(--sindoor)_50%,var(--sindoor-deep))] overflow-hidden relative" id="buy">
      <svg className="mandala h-[620px] inset-auto left-[-200px]! opacity-25 absolute top-[-160px]! w-[620px]" viewBox="-200 -200 400 400" aria-hidden="true">
        <circle className="fill-none opacity-70 stroke-current [stroke-width:1]" r="194" />
        <circle className="fill-none opacity-70 stroke-current [stroke-width:1]" r="186" strokeDasharray="2 5" />
        <g>
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(0.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(15.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(30.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(45.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(60.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(75.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(90.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(105.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(120.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(135.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(150.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(165.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(180.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(195.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(210.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(225.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(240.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(255.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(270.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(285.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(300.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(315.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(330.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-150 C16,-163 12,-180 0,-190 C-12,-180 -16,-163 0,-150Z" transform="rotate(345.00)" />
        </g>
        <g>
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(0.00)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(22.50)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(45.00)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(67.50)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(90.00)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(112.50)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(135.00)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(157.50)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(180.00)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(202.50)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(225.00)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(247.50)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(270.00)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(292.50)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(315.00)" />
          <path className="fill-[#f0a02018] stroke-current [stroke-width:1]" d="M0,-100 C30,-115 26,-138 0,-150 C-26,-138 -30,-115 0,-100Z" transform="rotate(337.50)" />
        </g>
        <g>
          <circle className="fill-current opacity-80" cx="0.0" cy="-95.0" r="1.8" />
          <circle className="fill-current opacity-80" cx="8.3" cy="-94.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="16.5" cy="-93.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="24.6" cy="-91.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="32.5" cy="-89.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="40.1" cy="-86.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="47.5" cy="-82.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="54.5" cy="-77.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="61.1" cy="-72.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="67.2" cy="-67.2" r="1.8" />
          <circle className="fill-current opacity-80" cx="72.8" cy="-61.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="77.8" cy="-54.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="82.3" cy="-47.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="86.1" cy="-40.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="89.3" cy="-32.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="91.8" cy="-24.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="93.6" cy="-16.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="94.6" cy="-8.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="95.0" cy="-0.0" r="1.8" />
          <circle className="fill-current opacity-80" cx="94.6" cy="8.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="93.6" cy="16.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="91.8" cy="24.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="89.3" cy="32.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="86.1" cy="40.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="82.3" cy="47.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="77.8" cy="54.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="72.8" cy="61.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="67.2" cy="67.2" r="1.8" />
          <circle className="fill-current opacity-80" cx="61.1" cy="72.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="54.5" cy="77.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="47.5" cy="82.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="40.1" cy="86.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="32.5" cy="89.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="24.6" cy="91.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="16.5" cy="93.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="8.3" cy="94.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="0.0" cy="95.0" r="1.8" />
          <circle className="fill-current opacity-80" cx="-8.3" cy="94.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="-16.5" cy="93.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="-24.6" cy="91.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="-32.5" cy="89.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="-40.1" cy="86.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="-47.5" cy="82.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="-54.5" cy="77.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="-61.1" cy="72.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="-67.2" cy="67.2" r="1.8" />
          <circle className="fill-current opacity-80" cx="-72.8" cy="61.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="-77.8" cy="54.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="-82.3" cy="47.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="-86.1" cy="40.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="-89.3" cy="32.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="-91.8" cy="24.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="-93.6" cy="16.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="-94.6" cy="8.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="-95.0" cy="0.0" r="1.8" />
          <circle className="fill-current opacity-80" cx="-94.6" cy="-8.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="-93.6" cy="-16.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="-91.8" cy="-24.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="-89.3" cy="-32.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="-86.1" cy="-40.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="-82.3" cy="-47.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="-77.8" cy="-54.5" r="1.8" />
          <circle className="fill-current opacity-80" cx="-72.8" cy="-61.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="-67.2" cy="-67.2" r="1.8" />
          <circle className="fill-current opacity-80" cx="-61.1" cy="-72.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="-54.5" cy="-77.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="-47.5" cy="-82.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="-40.1" cy="-86.1" r="1.8" />
          <circle className="fill-current opacity-80" cx="-32.5" cy="-89.3" r="1.8" />
          <circle className="fill-current opacity-80" cx="-24.6" cy="-91.8" r="1.8" />
          <circle className="fill-current opacity-80" cx="-16.5" cy="-93.6" r="1.8" />
          <circle className="fill-current opacity-80" cx="-8.3" cy="-94.6" r="1.8" />
        </g>
        <g>
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(0.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(30.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(60.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(90.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(120.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(150.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(180.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(210.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(240.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(270.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(300.00)" />
          <path className="fill-[#c9972b22] stroke-current [stroke-width:1.1]" d="M0,-62 C20,-72 16,-86 0,-92 C-16,-86 -20,-72 0,-62Z" transform="rotate(330.00)" />
        </g>
        <circle className="fill-none opacity-70 stroke-current [stroke-width:1]" r="58" />
      </svg>
      <div className="wrap items-center gap-[40px] my-0 mx-auto max-w-[1140px] relative">
        <div>
          <p className="eyebrow items-center gap-[10px] tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">Sampurna Lal Kitab Report</p>
          <h2 className="font-[family-name:var(--display)] text-[clamp(30px,4.4vw,48px)] font-normal leading-[1.15] m-0 mt-[12px]! text-balance">Start with the remedy your chart needs most</h2>
          <p className="lead m-0 mt-[12px]! max-w-[52ch]">Everything in one personalised PDF, prepared from your exact birth details.</p>
          <ul className="gets gap-[10px] list-none mt-[24px] mr-0 mb-0 ml-0 p-0">
            <li className="gap-[10px]"><svg className="ic fill-none flex-none h-[20px] mt-[3px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-check" } as any)} /></svg>6 charts: Lagna, Lal Kitab, Chandra, Surya, Navamsa (D9) &amp; Varshphal</li>
            <li className="gap-[10px]"><svg className="ic fill-none flex-none h-[20px] mt-[3px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-check" } as any)} /></svg>Rin (karmic debt) check with nivaran upay</li>
            <li className="gap-[10px]"><svg className="ic fill-none flex-none h-[20px] mt-[3px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-check" } as any)} /></svg>All 9 grahas: phal, strength score and remedies</li>
            <li className="gap-[10px]"><svg className="ic fill-none flex-none h-[20px] mt-[3px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-check" } as any)} /></svg>Sleeping planets, Takkar clashes, Masnui &amp; Dhoke grah</li>
            <li className="gap-[10px]"><svg className="ic fill-none flex-none h-[20px] mt-[3px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-check" } as any)} /></svg>Priority-wise Master Remedy Plan with 40–43 day rules</li>
            <li className="gap-[10px]"><svg className="ic fill-none flex-none h-[20px] mt-[3px] stroke-current w-[20px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-check" } as any)} /></svg>Lucky day, colour, metal, direction &amp; numbers</li>
          </ul>
        </div>
        <div className="box [background:linear-gradient(180deg,#fff9ec,#f6e6c3)] pt-[30px] pr-[28px] pb-[26px] pl-[28px] text-center [@media(max-width:900px)]:justify-self-center [@media(max-width:900px)]:max-w-[440px] [@media(max-width:900px)]:w-full"><div className="stack h-[150px] mt-[-80px] mr-auto mb-[6px] ml-auto relative w-[220px]" aria-hidden="true"><img className="left-1/2 max-w-full absolute top-0 w-[108px]" alt="" /><img className="left-1/2 max-w-full absolute top-0 w-[108px]" alt="" /><img className="left-1/2 max-w-full absolute top-0 w-[108px]" alt="" /></div><p className="t tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">One-time payment · incl. GST</p><div className="price items-start gap-[2px] justify-center mt-[8px]"><sup className="text-[.42em] mt-[.25em]">₹</sup>941</div><span className="per tracking-[.02em] mt-0 mr-0 mb-[18px] ml-0 [font:600_13px/1.3_var(--body)]">65 pages · less than ₹9 a page</span><a className={"buy items-center cursor-pointer gap-[10px] justify-center overflow-hidden py-[17px] px-[28px] no-underline w-full [font:700_18px/1_var(--body)] [&:hover]:[filter:brightness(1.07)]"} href="https://rzp.io/rzp/lalkitabreport" rel="noopener" target="_blank">Get My Report Now <svg className="ic fill-none flex-none h-[18px] stroke-current w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-arrow" } as any)} /></svg></a><p className="secure items-center flex-wrap text-[13px] gap-[6px] justify-center m-0 mt-[14px]!"><svg className="ic fill-none flex-none h-[16px] stroke-current w-[16px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-shield" } as any)} /></svg>100% secure payment by Razorpay</p><div className="pays flex-wrap gap-[6px] justify-center mt-[10px]" aria-label="Payment methods"><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white tracking-[.06em] py-[5px] px-[8px] [font:700_11px/1_var(--body)]">UPI</span><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white tracking-[.06em] py-[5px] px-[8px] [font:700_11px/1_var(--body)]">CARDS</span><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white tracking-[.06em] py-[5px] px-[8px] [font:700_11px/1_var(--body)]">NET BANKING</span><span className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white tracking-[.06em] py-[5px] px-[8px] [font:700_11px/1_var(--body)]">WALLETS</span></div><p className="agree text-[12.5px] leading-[1.4] m-0 mt-[12px]!">Personalised digital report: no cancellation or refund after payment. By paying you agree to our <a href="/terms.html">Terms</a>, <a href="/refund.html">Refund Policy</a> and <a href="/privacy.html">Privacy Policy</a>.</p></div>
      </div>
    </section>
  );
}

function ImportedSectionBeforeYouOrder() {
  return (
    <section className="section py-[80px]" id="faq">
      <div className="wrap my-0 mx-auto max-w-[1140px] text-center">
        <p className="eyebrow items-center gap-[10px] justify-center tracking-[.14em] m-0 uppercase [font:600_13px/1_var(--body)]">Questions</p>
        <h2 className="font-[family-name:var(--display)] text-[clamp(30px,4.4vw,46px)] font-normal leading-[1.15] m-0 mt-[12px]! text-balance">Before you order</h2>
        <div className="faq mt-[28px] mr-auto mb-0 ml-auto max-w-[820px] text-left">
          <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[10px] py-0 px-[20px]" open>
            <summary className="cursor-pointer list-none pt-[18px] pr-[36px] pb-[18px] pl-0">What details do I need to give?</summary>
            <p className="m-0 max-w-[68ch] pt-0 pr-0 pb-[18px] pl-0">Your full name, date of birth, exact time of birth, place of birth and gender, plus a WhatsApp number and email address where we can send the report.</p>
          </details>
          <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[10px] py-0 px-[20px]">
            <summary className="cursor-pointer list-none pt-[18px] pr-[36px] pb-[18px] pl-0">I don't know my exact birth time. Can I still order?</summary>
            <p className="m-0 max-w-[68ch] pt-0 pr-0 pb-[18px] pl-0">Lal Kitab houses depend on birth time, so an accurate time gives the best report. If you only know an approximate time, mention it when you order and we will contact you before preparing the report.</p>
          </details>
          <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[10px] py-0 px-[20px]">
            <summary className="cursor-pointer list-none pt-[18px] pr-[36px] pb-[18px] pl-0">How will I receive the report?</summary>
            <p className="m-0 max-w-[68ch] pt-0 pr-0 pb-[18px] pl-0">As a PDF sent to your WhatsApp and email. You can read it on your phone or print it.</p>
          </details>
          <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[10px] py-0 px-[20px]">
            <summary className="cursor-pointer list-none pt-[18px] pr-[36px] pb-[18px] pl-0">What language is the report in?</summary>
            <p className="m-0 max-w-[68ch] pt-0 pr-0 pb-[18px] pl-0">English, with Hindi names for every chart, planet, house and concept, so the Lal Kitab terms stay familiar.</p>
          </details>
          <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[10px] py-0 px-[20px]">
            <summary className="cursor-pointer list-none pt-[18px] pr-[36px] pb-[18px] pl-0">Are the remedies expensive?</summary>
            <p className="m-0 max-w-[68ch] pt-0 pr-0 pb-[18px] pl-0">No. Lal Kitab upay are simple acts like feeding animals, donating specific items on specific days, or keeping an object with you. The report also explains the rules, such as doing one remedy at a time for 40 to 43 days.</p>
          </details>
          <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[10px] py-0 px-[20px]">
            <summary className="cursor-pointer list-none pt-[18px] pr-[36px] pb-[18px] pl-0">Can I cancel or get a refund?</summary>
            <p className="m-0 max-w-[68ch] pt-0 pr-0 pb-[18px] pl-0">Each report is prepared personally from your birth details, so orders cannot be cancelled or refunded after payment. Please check your details before paying. If we make a mistake in your report, we correct it and re-send it free within 24–48 hours. See our <a href="/refund.html">Refund &amp; Cancellation Policy</a>.</p>
          </details>
          <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) mb-[10px] py-0 px-[20px]">
            <summary className="cursor-pointer list-none pt-[18px] pr-[36px] pb-[18px] pl-0">Is my birth data kept private?</summary>
            <p className="m-0 max-w-[68ch] pt-0 pr-0 pb-[18px] pl-0">Yes. Your details are used only to prepare your report and are not stored after it is delivered, so please save your PDF. Any sample pages we show have the name and birth details hidden.</p>
          </details>
        </div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--sindoor-deep) text-[15px]">
      <div className="wrap flex-wrap gap-[20px] justify-between my-0 mx-auto max-w-[1140px]">
        <p className="mantra tracking-[.04em] m-0 text-center w-full [font:600_16px/1_var(--body)]">|| Jai Shri Ganesh || Jai Maa Durga || Jai Mahakal ||</p>
        <div>
          <a className="brand items-center text-[26px]! gap-[10px] no-underline whitespace-nowrap [font:400_22px/1_var(--display)]" href="#">Ank Darppan</a>
          <div className="contact flex-wrap gap-y-[8px] gap-x-[22px] mt-[12px]"><span className="items-center gap-[7px]"><svg className="ic fill-none flex-none h-[16px] stroke-current w-[16px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-phone" } as any)} /></svg>9317365025</span><span className="items-center gap-[7px]"><svg className="ic fill-none flex-none h-[16px] stroke-current w-[16px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-mail" } as any)} /></svg>ankdarppan@gmail.com</span><span className="items-center gap-[7px]"><svg className="ic fill-none flex-none h-[16px] stroke-current w-[16px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"><use {...({ href: "#i-globe" } as any)} /></svg>www.ankdarppan.in</span></div>
        </div>
        <nav className="items-start flex-wrap gap-y-[8px] gap-x-[18px]" aria-label="Policies"><a className="no-underline" href="/contact.html">Contact Us</a><a className="no-underline" href="/shipping.html">Shipping &amp; Delivery</a><a className="no-underline" href="/terms.html">Terms &amp; Conditions</a><a className="no-underline" href="/refund.html">Refund Policy</a><a className="no-underline" href="/privacy.html">Privacy Policy</a></nav>
        <p className="fine text-[13px] m-0 opacity-75 pt-[16px] w-full">Astrological guidance is based on the Lal Kitab tradition and is not a substitute for medical, legal or financial advice. Results of remedies vary with each person's karma and sincerity. © Ank Darppan</p>
      </div>
    </footer>
  );
}
