import { useEffect, useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { checkReportPayment } from '@/lib/report-orders.functions';
import { orderAccessSchema } from '@/lib/report-order-schema';
import { formatINR } from '@/lib/checkout-pricing';
import checkoutCSS from '@/styles/pages/checkout.css?raw';
import { generateOrderReading } from '@/lib/readings.functions';
import { type PersonalReading } from '@/lib/reading-schema';

export const Route = createFileRoute('/checkout_/confirmation')({
  validateSearch: (search: Record<string, unknown>): { order?: string; token?: string } => ({
    ...(typeof search['order'] === 'string' ? { order: search['order'] } : {}),
    ...(typeof search['token'] === 'string' ? { token: search['token'] } : {}),
  }),
  staticData: { sitemap: false },
  head: () => ({ meta: [
    { title: 'Report Payment Confirmation | Ank Darppan' },
    { name: 'description', content: 'Secure payment confirmation for your personalised Ank Darppan Lal Kitab report.' },
    { property: 'og:title', content: 'Report Payment Confirmation | Ank Darppan' },
    { property: 'og:description', content: 'Check the verified status of your Lal Kitab report payment.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'referrer', content: 'no-referrer' },
  ] }),
  component: Confirmation,
});

function Confirmation() {
  const search = Route.useSearch();
  const check = useServerFn(checkReportPayment);
  const [result, setResult] = useState<{ order: string; amount: number; status: string } | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const generate = useServerFn(generateOrderReading);
  const [reading, setReading] = useState<PersonalReading | null>(null);
  const [generating, setGenerating] = useState(false);
  async function createReading() {
    const access = orderAccessSchema.safeParse(search);
    if (!access.success || generating) return;
    setGenerating(true); setError('');
    try { setReading(await generate({ data: access.data })); }
    catch (err) { setError(err instanceof Error ? err.message : 'Reading generation could not complete.'); }
    finally { setGenerating(false); }
  }
  async function verify() {
    const access = orderAccessSchema.safeParse(search);
    if (!access.success) { setError('This order confirmation link is invalid. Please contact Ank Darppan.'); return; }
    setBusy(true); setError('');
    try {
      const next = await check({ data: access.data });
      setResult(next);
      if (['paid', 'delivered'].includes(next.status) && !sessionStorage.getItem(`order-tracked:${next.order}`)) {
        window.__lovableEvents?.track?.('project.order_completed', { amount_paise: next.amount });
        sessionStorage.setItem(`order-tracked:${next.order}`, '1');
      }
    }
    catch (err) { setError(err instanceof Error ? err.message : 'Unable to check payment. Please try again.'); }
    finally { setBusy(false); }
  }
  useEffect(() => { void verify(); }, [search.order, search.token]);
  const paid = result?.status === 'paid' || result?.status === 'delivered';
  return <div className="checkout-page"><style>{checkoutCSS}</style>
    <header className="checkout-header"><div className="checkout-header-inner"><Link to="/" className="checkout-brand">Ank Darppan</Link><ShieldCheck size={20} /></div></header>
    <main className="checkout-main"><div className="checkout-heading">{paid ? <CheckCircle2 size={36} /> : <Clock size={36} />}<h1>{busy ? 'Checking your payment…' : paid ? 'Payment confirmed' : 'Payment confirmation'}</h1>
      {paid && <p>Your report order is confirmed. Your personalised PDF will be sent to the WhatsApp number and email you provided.</p>}
      {result && !paid && <p>{result.status === 'failed' ? 'This payment was not completed. Contact us if money was deducted; do not pay again until checked.' : 'Payment is not confirmed yet. If you have paid, check again in a moment; do not pay twice.'}</p>}
    </div>
      {result && <section className="checkout-summary" aria-label="Order status"><p>Order reference: <strong>{result.order}</strong></p><p>{paid ? 'Amount paid' : 'Amount payable'}: <strong>{formatINR(result.amount)}</strong></p></section>}
      {error && <p role="alert" className="checkout-error">{error}</p>}
      {!paid && <Button className="checkout-gold" disabled={busy} onClick={() => void verify()}>Check payment status</Button>}
      {paid && !reading && <section className="checkout-summary"><h2>Your AI Lal Kitab-inspired reading</h2><p>Personalised reflections and gentle remedies using the birth details you provided. This is AI guidance, not a calculated kundli or the expert 65-page report.</p><Button className="checkout-gold" disabled={generating} onClick={() => void createReading()}>{generating ? 'Preparing your reading…' : 'Generate my reading'}</Button></section>}
      {reading && <article className="checkout-summary"><h2>{reading.title}</h2><p>{reading.overview}</p><p className="checkout-message">{reading.limitations}</p>{reading.themes.map((theme, index) => <section key={index}><h3>{theme.title}</h3><p>{theme.insight}</p></section>)}<h2>Your remedies</h2>{reading.remedies.map((remedy, index) => <section key={index}><h3>{index + 1}. {remedy.title}</h3><p>{remedy.action}</p><p>{remedy.reason}</p><small>{remedy.caution}</small></section>)}<p>{reading.closing}</p><Button variant="outline" onClick={() => window.print()}>Print reading</Button></article>}
      <nav className="checkout-footer"><Link to="/">Back to report</Link><a href="https://wa.me/919317365025?text=LAL_KITAB_PAYMENT_HELP" target="_blank" rel="noopener noreferrer">Contact on WhatsApp</a></nav>
    </main>
  </div>;
}