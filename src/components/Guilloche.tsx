import { useEffect, useRef } from 'react';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function tokens() {
  const s = getComputedStyle(document.documentElement);
  return { g: s.getPropertyValue('--guilloche').trim(), b: s.getPropertyValue('--bronze').trim() };
}

// Redraws on resize and theme change; `draw` receives progress 0..1 for the one load-time draw-in.
function useCanvas(draw: (ctx: CanvasRenderingContext2D, w: number, h: number, p: number) => void, deps: unknown[], duration = 1800) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    let done = false;
    const paint = (p: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      draw(ctx, w, h, p);
    };
    if (reduced()) { paint(1); done = true; }
    else {
      const t0 = performance.now();
      const tick = (now: number) => {
        // rAF timestamps can predate t0 on the first frame; clamp so no radius goes negative
        const t = Math.max(0, Math.min(1, (now - t0) / duration));
        paint(1 - Math.pow(1 - t, 3));
        if (t < 1) raf = requestAnimationFrame(tick); else done = true;
      };
      raf = requestAnimationFrame(tick);
    }
    const again = () => { if (done) paint(1); };
    const ro = new ResizeObserver(again);
    ro.observe(canvas);
    const mo = new MutationObserver(again);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', again);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); mo.disconnect(); mq.removeEventListener('change', again); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}

/** Banknote-style rosette. `petals` and `rings` come from the project's own figures. */
/** `hollow` leaves the centre empty so the rosette can frame a portrait medallion (photo radius = 0.62R). */
export function Rosette({ petals = 10, rings = 5, className = 'rosette', label, hollow = false }: { petals?: number; rings?: number; className?: string; label?: string; hollow?: boolean }) {
  const ref = useCanvas((ctx, w, h, p) => {
    const { g, b } = tokens();
    const cx = w / 2, cy = h / 2, R = Math.min(w, h) / 2 - 2;
    ctx.lineWidth = 0.4;
    if (hollow) {
      // hairline frame rings around the portrait, one per tool
      for (let i = 0; i < rings; i++) {
        ctx.strokeStyle = i % 2 ? b : g;
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(cx, cy, R * (0.645 + i * 0.022), -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * p);
        ctx.stroke();
      }
    }
    // outer band: phase-shifted sine rings, woven like banknote lace
    const lines = 36;
    for (let i = 0; i < lines; i++) {
      ctx.strokeStyle = i % 3 === 0 ? b : g;
      ctx.globalAlpha = 0.35;
      ctx.beginPath();
      const steps = Math.floor(720 * p);
      for (let s = 0; s <= steps; s++) {
        const t = (s / 720) * Math.PI * 2;
        // one lobe per KPI; each strand is phase-shifted a hair so the lobes read as fine engraved lace
        const r = hollow
          ? R * (0.87 + 0.09 * Math.cos(t * petals + i * 0.045)) + Math.sin(t * petals * 4 + i * 0.3) * R * 0.012
          : R * (0.8 + 0.12 * Math.cos(t * petals + i * 0.045)) + Math.sin(t * petals * 4 + i * 0.3) * R * 0.015;
        const x = cx + Math.cos(t) * r, y = cy + Math.sin(t) * r;
        s ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
    }
    if (hollow) { ctx.globalAlpha = 1; return; }
    // inner hypotrochoid lattice
    const k = petals;
    const copies = rings * 5;
    for (let i = 0; i < copies; i++) {
      ctx.strokeStyle = g;
      ctx.globalAlpha = 0.38;
      ctx.beginPath();
      const rot = (i / copies) * (Math.PI * 2) / k;
      const n = Math.floor(720 * p);
      for (let s = 0; s <= n; s++) {
        const t = (s / 720) * Math.PI * 2;
        const rr = R * 0.6 * (0.55 + 0.45 * Math.cos(k * t));
        const x = cx + Math.cos(t + rot) * rr, y = cy + Math.sin(t + rot) * rr;
        s ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 0.8;
    ctx.strokeStyle = b;
    ctx.beginPath(); ctx.arc(cx, cy, R * 0.16 * p, 0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = 1;
  }, [petals, rings, hollow]);
  return <canvas ref={ref} className={className} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} />;
}

/** Security-tint line field printed behind an instrument. */
export function TintField({ seed = 1 }: { seed?: number }) {
  const ref = useCanvas((ctx, w, h, p) => {
    const { g, b } = tokens();
    ctx.lineWidth = 0.5;
    const gap = 9;
    const reach = w * p;
    for (let y = -20, i = 0; y < h + 20; y += gap, i++) {
      ctx.strokeStyle = i % 3 === 0 ? b : g;
      ctx.globalAlpha = 0.16;
      ctx.beginPath();
      for (let x = 0; x <= reach; x += 6) {
        const yy = y + Math.sin(x * 0.012 + i * 0.35 + seed) * 7 + Math.sin(x * 0.031 + seed * 2) * 2.5;
        x ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }, [seed], 1400);
  return <canvas ref={ref} className="field" aria-hidden="true" />;
}
