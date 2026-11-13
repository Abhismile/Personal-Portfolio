import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { profile } from './data';
import { copyEmail, useTheme, useToast } from './hooks';
import Header from './components/Header';
import Instrument from './components/Instrument';
import Cases from './components/Cases';
import { About, Experience, Skills } from './components/Registers';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

const micro = `${profile.first}${profile.last}·DATAANALYST·`.toUpperCase().repeat(60);

export default function App() {
  const { theme, toggle } = useTheme();
  const { msg, show } = useToast();
  const [openId, setOpenId] = useState<string | null>(null);

  const openCase = useCallback((id: string) => {
    setOpenId(id);
    window.setTimeout(() => {
      const el = document.getElementById(`case-${id}`);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
    }, 60);
  }, []);

  const onCopy = useCallback(async () => {
    show((await copyEmail()) ? 'Email copied' : 'Copy blocked here. Select the address and copy it.');
  }, [show]);

  return (
    <>
      <Header theme={theme} onTheme={toggle} />
      <main>
        <Instrument onOpen={openCase} />
        <Cases openId={openId} setOpenId={setOpenId} />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Contact onCopy={onCopy} />
      </main>
      <footer>
        <div className="wrap">
          <span className="microprint" aria-hidden="true">{micro}</span>
          <div className="row">
            <span>© {new Date().getFullYear()} {profile.first} {profile.last}</span>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {msg && (
          <motion.div className="toast" role="status" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
            {msg}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
