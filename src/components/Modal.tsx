import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

export default function Modal({ open, onClose, label, children, className }: {
  open: boolean; onClose: () => void; label: string; children: ReactNode; className?: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const back = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    setTimeout(() => box.current?.querySelector<HTMLElement>('button')?.focus(), 50);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); back?.focus(); };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="overlay" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            ref={box} className={className} role="dialog" aria-modal="true" aria-label={label}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
