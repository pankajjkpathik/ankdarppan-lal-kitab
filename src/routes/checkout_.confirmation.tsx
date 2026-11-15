import { useEffect, useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { checkReportPayment } from '@/lib/report-orders.functions';
import { orderAccessSchema } from '@/lib/report-order-schema';
import { formatINR } from '@/lib/checkout-pricing';
import checkoutCSS from '@/styles/pages/checkout.css?raw';

export const Route = createFileRoute('/checkout_/confirmation')({
  validateSearch: (search: Record<string, unknown>): { order?: string; token?: string } => ({
    ...(typeof search['order'] === 'string' ? { order: search['order'] } : {}),
    ...(typeof search['token'] === 'string' ? { token: search['token'] } : {}),
  }),
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
  async function verify() {
    const access = orderAccessSchema.safeParse(search);
    if (!access.success) { setError('This order confirmation link is invalid. Please contact Ank Darppan.'); return; }
    setBusy(true); setError('');
    try { setResult(await check({ data: access.data })); }
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
      <nav className="checkout-footer"><Link to="/">Back to report</Link><a href="https://wa.me/919317365025?text=LAL_KITAB_PAYMENT_HELP" target="_blank" rel="noopener noreferrer">Contact on WhatsApp</a></nav>
    </main>
  </div>;
}