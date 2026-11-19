import { useState, type FormEvent } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { isAdmin, listApprovals, saveApproval, removeApproval } from '@/lib/admin.functions';

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
        <header className="admin-head"><h1 className="admin-title">Discount approvals</h1><Button variant="outline" onClick={signOut}>Sign out</Button></header>
        <form onSubmit={submit} className="admin-card">
          <h2 className="admin-sub">Approve a customer</h2>
          <div className="admin-grid">
            <div className="admin-field"><Label htmlFor="fb">Facebook ID / username</Label><Input id="fb" required pattern="[a-zA-Z0-9._\-]+" maxLength={100} value={facebookId} onChange={e => setFacebookId(e.target.value)} /></div>
            <div className="admin-field"><Label htmlFor="st">Approved as</Label><select id="st" className="admin-select" value={status} onChange={e => setStatus(e.target.value as 'follower' | 'subscriber')}><option value="follower">Follower (Follower20 · 20% off)</option><option value="subscriber">Subscriber (Subscriber50 · 50% off)</option></select></div>
            <div className="admin-field"><Label htmlFor="code">Private code</Label><div className="admin-row"><Input id="code" required minLength={6} maxLength={64} value={code} onChange={e => setCode(e.target.value)} /><Button type="button" variant="outline" onClick={() => setCode(newCode())}>New</Button></div></div>
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
                {(r.follower || r.subscriber) && <Button size="sm" variant="outline" onClick={async () => { await remove({ data: { facebookId: r.facebookId } }); qc.invalidateQueries({ queryKey: ['approvals'] }); }}>Remove</Button>}</li>
            ))}</ul>
          )}
        </section>
      </div>
    </main>
  );
}
