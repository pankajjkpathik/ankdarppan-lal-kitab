import { useState, type FormEvent } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Route = createFileRoute('/auth')({
  staticData: { sitemap: false },
  head: () => ({ meta: [
    { title: 'Admin Sign In | Ank Darppan' },
    { name: 'description', content: 'Sign in to manage Ank Darppan discount approvals.' },
    { property: 'og:title', content: 'Admin Sign In | Ank Darppan' },
    { property: 'og:description', content: 'Staff sign-in for Ank Darppan.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'in' | 'up'>('in');
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(''); const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault(); setBusy(true); setMsg('');
    if (mode === 'in') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message); else navigate({ to: '/admin' });
    } else {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth` } });
      setMsg(error ? error.message : 'Check your email to confirm your account, then sign in.');
    }
    setBusy(false);
  }
  return (
    <main className="admin-shell">
      <form onSubmit={submit} className="admin-card admin-narrow">
        <h1 className="admin-title">{mode === 'in' ? 'Admin sign in' : 'Create admin account'}</h1>
        <div className="admin-field"><Label htmlFor="email">Email</Label><Input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} /></div>
        <div className="admin-field"><Label htmlFor="password">Password</Label><Input id="password" type="password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)} /></div>
        <Button type="submit" disabled={busy} className="w-full">{mode === 'in' ? 'Sign in' : 'Create account'}</Button>
        {msg && <p role="status" className="admin-note">{msg}</p>}
        <button type="button" className="admin-link" onClick={() => { setMode(mode === 'in' ? 'up' : 'in'); setMsg(''); }}>{mode === 'in' ? 'First time? Create your account' : 'Already have an account? Sign in'}</button>
      </form>
    </main>
  );
}
