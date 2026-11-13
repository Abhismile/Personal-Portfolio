import { useEffect, useState } from 'react';
import { profile, sections } from '../data';
import { useActiveSection } from '../hooks';
import { Close, Menu, Moon, Sun } from './Icons';

const ids = sections.map((s) => s.id);

export default function Header({ theme, onTheme }: { theme: string; onTheme: () => void }) {
  const active = useActiveSection(ids);
  const [ruled, setRuled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setRuled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`header${ruled || open ? ' ruled' : ''}`}>
      <div className="wrap">
        <a className="monogram" href="#top" onClick={() => setOpen(false)}>
          {profile.first} {profile.last}
          <span className="data">Data Analyst</span>
        </a>
        <nav className="nav" aria-label="Sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>{s.label}</a>
          ))}
        </nav>
        <div className="header-tools">
          <button className="tool-btn" onClick={onTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className="tool-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Menu">
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Sections">
          {sections.map((s) => <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>{s.label}</a>)}
        </nav>
      )}
    </header>
  );
}
