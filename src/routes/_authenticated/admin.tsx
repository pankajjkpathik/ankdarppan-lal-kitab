import { useState, type FormEvent } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { isAdmin, listApprovals, saveApproval, removeApproval, listOrders, markGenuine, requestBalance, checkBalance } from '@/lib/admin.functions';
import { formatINR } from '@/lib/checkout-pricing';

export const Route = createFileRoute('/_authenticated/admin')({
  staticData: { sitemap: false },
  head: () => ({ meta: [
    { title: 'Discount Approvals | Ank Darppan Admin' },
    { name: 'description', content: 'Approve Facebook followers and subscribers for Ank Darppan discounts.' },
    { property: 'og:title', content: 'Discount Approvals | Ank Darppan Admin' },
    { property: 'og:description', content: 'Ank Darppan staff tools.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }),
  component: AdminPage,
});

function newCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; const bytes = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(bytes, b => chars[b % chars.length]).join('');
}

function AdminPage() {
  const navigate = useNavigate(); const qc = useQueryClient();
  const checkAdmin = useServerFn(isAdmin); const list = useServerFn(listApprovals);
  const save = useServerFn(saveApproval); const remove = useServerFn(removeApproval);
  const admin = useQuery({ queryKey: ['is-admin'], queryFn: () => checkAdmin() });
  const rows = useQuery({ queryKey: ['approvals'], queryFn: () => list(), enabled: admin.data === true });
  const [facebookId, setFacebookId] = useState(''); const [status, setStatus] = useState<'follower' | 'subscriber'>('follower');
  const [code, setCode] = useState(newCode); const [msg, setMsg] = useState(''); const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault(); setBusy(true); setMsg('');
    try { await save({ data: { facebookId, status, code } }); setMsg(`Saved. Send this code to ${facebookId} on WhatsApp: ${code}`); setFacebookId(''); setCode(newCode()); qc.invalidateQueries({ queryKey: ['approvals'] }); }
    catch (err) { setMsg(err instanceof Error ? err.message : 'Could not save.'); }
    setBusy(false);
  }
  async function signOut() { await supabase.auth.signOut(); navigate({ to: '/auth' }); }
  if (admin.isLoading) return <main className="admin-shell"><p className="admin-note">Loading…</p></main>;
  if (!admin.data) return <main className="admin-shell"><div className="admin-card admin-narrow"><h1 className="admin-title">No admin access</h1><p className="admin-note">This account is not an Ank Darppan admin.</p><Button onClick={signOut}>Sign out</Button></div></main>;
  return (
    <main className="admin-shell">
      <div className="admin-wide">
        <header className="admin-head"><h1 className="admin-title">Ank Darppan admin</h1><Button variant="outline" className="admin-outline" onClick={signOut}>Sign out</Button></header>
        <OrdersSection />
        <form onSubmit={submit} className="admin-card">
          <h2 className="admin-sub">Approve a customer</h2>
          <div className="admin-grid">
            <div className="admin-field"><Label htmlFor="fb">Facebook ID / username</Label><Input id="fb" required pattern="[a-zA-Z0-9._\-]+" maxLength={100} value={facebookId} onChange={e => setFacebookId(e.target.value)} /></div>
            <div className="admin-field"><Label htmlFor="st">Approved as</Label><select id="st" className="admin-select" value={status} onChange={e => setStatus(e.target.value as 'follower' | 'subscriber')}><option value="follower">Follower (Follower20 · 20% off)</option><option value="subscriber">Subscriber (Subscriber50 · 50% off)</option></select></div>
            <div className="admin-field"><Label htmlFor="code">Private code</Label><div className="admin-row"><Input id="code" required minLength={6} maxLength={64} value={code} onChange={e => setCode(e.target.value)} /><Button type="button" variant="outline" className="admin-outline" onClick={() => setCode(newCode())}>New</Button></div></div>
          </div>
          <Button type="submit" disabled={busy}>Save approval</Button>
          {msg && <p role="status" className="admin-note">{msg}</p>}
          <p className="admin-note">Codes are stored scrambled, so copy the code before saving. Saving again for the same Facebook ID replaces the old code.</p>
        </form>
        <section className="admin-card">
          <h2 className="admin-sub">Approved customers</h2>
          {rows.isLoading ? <p className="admin-note">Loading…</p> : !rows.data?.length ? <p className="admin-note">No approvals yet.</p> : (
            <ul className="admin-list">{rows.data.map(r => (
              <li key={r.facebookId}><span><strong>{r.facebookId}</strong> · {r.subscriber ? 'Subscriber' : r.follower ? 'Follower' : 'Not approved'}{!r.hasCode && (r.follower || r.subscriber) ? ' · no code' : ''}</span>
                {(r.follower || r.subscriber) && <Button size="sm" variant="outline" className="admin-outline" onClick={async () => { await remove({ data: { facebookId: r.facebookId } }); qc.invalidateQueries({ queryKey: ['approvals'] }); }}>Remove</Button>}</li>
            ))}</ul>
          )}
        </section>
      </div>
    </main>
  );
}

const REVIEW_LABEL: Record<string, string> = { pending: 'Needs review', genuine: 'Genuine', balance_requested: 'Balance requested', balance_paid: 'Balance paid' };

function OrdersSection() {
  const qc = useQueryClient();
  const list = useServerFn(listOrders); const genuine = useServerFn(markGenuine);
  const ask = useServerFn(requestBalance); const check = useServerFn(checkBalance);
  const orders = useQuery({ queryKey: ['orders'], queryFn: () => list() });
  const [msg, setMsg] = useState(''); const [busyId, setBusyId] = useState('');
  async function run(id: string, fn: () => Promise<string>) {
    setBusyId(id); setMsg('');
    try { setMsg(await fn()); qc.invalidateQueries({ queryKey: ['orders'] }); }
    catch (err) { setMsg(err instanceof Error ? err.message : 'Something went wrong.'); }
    setBusyId('');
  }
  function waLink(phone: string, name: string, url: string, balance: number) {
    const text = `Namaste ${name}, your Facebook follower/subscriber status could not be verified. Please pay the balance of ${formatINR(balance)} here: ${url} — your Lal Kitab report will be delivered within 12-24 hours after payment. – Ank Darppan`;
    return `https://wa.me/91${phone}?text=${encodeURIComponent(text)}`;
  }
  return (
    <section className="admin-card" aria-labelledby="orders-heading">
      <h2 id="orders-heading" className="admin-sub">Paid orders</h2>
      {msg && <p role="status" className="admin-note">{msg}</p>}
      {orders.isLoading ? <p className="admin-note">Loading…</p> : orders.isError ? <p className="admin-note">Orders could not be loaded.</p> : !orders.data?.length ? <p className="admin-note">No paid orders yet.</p> : (
        <ul className="admin-list">{orders.data.map(o => {
          const discounted = o.balance > 0;
          return (
            <li key={o.id} style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
              <span><strong>{o.name || 'Customer'}</strong> · {formatINR(o.amount)} paid{o.coupon ? ` · ${o.coupon}` : ''}{o.facebookId ? ` · FB: ${o.facebookId}` : ''}{o.claimed !== 'neither' ? ` (${o.claimed})` : ''}<br />
                <small>{new Date(o.createdAt).toLocaleString('en-IN')} · {o.whatsapp && `+91 ${o.whatsapp}`} {o.email && `· ${o.email}`} · {discounted ? REVIEW_LABEL[o.review] ?? o.review : 'Full price'}</small></span>
              {discounted && o.review !== 'genuine' && o.review !== 'balance_paid' && <span className="admin-row">
                <Button size="sm" disabled={busyId === o.id} onClick={() => run(o.id, async () => { await genuine({ data: { id: o.id } }); return `${o.name} marked genuine. Send the report.`; })}>Mark genuine</Button>
                {!o.balanceUrl
                  ? <Button size="sm" variant="outline" className="admin-outline" disabled={busyId === o.id} onClick={() => run(o.id, async () => { await ask({ data: { id: o.id } }); return `Balance link for ${formatINR(o.balance)} created and sent by SMS/email. You can also send it on WhatsApp.`; })}>Ask for {formatINR(o.balance)} balance</Button>
                  : <>
                    {o.whatsapp && <Button size="sm" variant="outline" className="admin-outline" asChild><a href={waLink(o.whatsapp, o.name, o.balanceUrl, o.balance)} target="_blank" rel="noopener noreferrer">Send on WhatsApp</a></Button>}
                    <Button size="sm" variant="outline" className="admin-outline" disabled={busyId === o.id} onClick={() => run(o.id, async () => (await check({ data: { id: o.id } })).paid ? 'Balance received. Send the report.' : 'Balance not paid yet.')}>Check balance paid</Button>
                  </>}
              </span>}
            </li>
          );
        })}</ul>
      )}
    </section>
  );
}
