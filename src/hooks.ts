import { useCallback, useEffect, useRef, useState } from 'react';
import { profile } from './data';

export function useTheme() {
  const [theme, setTheme] = useState<string>(() => {
    const set = document.documentElement.getAttribute('data-theme');
    return set || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
      return next;
    });
  }, []);
  return { theme, toggle };
}

export function useToast() {
  const [msg, setMsg] = useState<string | null>(null);
  const timer = useRef<number>();
  const show = useCallback((m: string) => {
    setMsg(m);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMsg(null), 2400);
  }, []);
  return { msg, show };
}

export async function copyEmail(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(profile.email);
    return true;
  } catch {
    return false;
  }
}

// The dev server answers a missing file with the site's own HTML, so check that the résumé is really a PDF.
let resumeCheck: Promise<boolean> | null = null;
export function useResumeAvailable() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    resumeCheck ??= fetch(profile.resume, { method: 'HEAD' })
      .then((r) => r.ok && (r.headers.get('content-type') ?? '').includes('pdf'))
      .catch(() => false);
    let live = true;
    resumeCheck.then((v) => live && setOk(v));
    return () => { live = false; };
  }, []);
  return ok;
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return active;
}
