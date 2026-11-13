import { useEffect, useRef, useState } from 'react';

const TILT = -1.2;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function webgl() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

/**
 * Engraved wireframe ring behind the portrait: a lobed torus drawn only in lines.
 * `petals` lobes (one per KPI) and `rings` lace strands per tool, matching the 2D rosette it replaces.
 * Turns slowly, leans a few degrees toward the pointer, and draws itself in once.
 */
export default function WireSeal({ petals, rings, fallback }: { petals: number; rings: number; fallback: JSX.Element }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ok] = useState(webgl);

  useEffect(() => {
    if (!ok) return;
    const host = ref.current!;
    let disposed = false;
    let cleanup = () => {};

    import('three').then((THREE) => {
      if (disposed) return;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 20);
      camera.position.set(0, 0, 4.6);

      // lace strands winding round the tube, and meridian hoops across it
      const strands = rings * 4;
      const steps = 480;
      const hoops = petals * 5;
      const R = 1, tube = 0.085;
      const centre = (t: number) => R * (1 + 0.07 * Math.cos(petals * t));
      const point = (t: number, phi: number, out: number[]) => {
        const c = centre(t);
        const w = tube * (1 + 0.35 * Math.cos(petals * t + Math.PI));
        const rr = c + w * Math.cos(phi);
        out.push(Math.cos(t) * rr, Math.sin(t) * rr, w * Math.sin(phi));
      };

      const lace: number[] = [];
      for (let s = 0; s < strands; s++) {
        const base = (s / strands) * Math.PI * 2;
        for (let i = 0; i < steps; i++) {
          const t0 = (i / steps) * Math.PI * 2, t1 = ((i + 1) / steps) * Math.PI * 2;
          // each strand twists once per lobe, so the strands cross like engraved lace
          point(t0, base + t0 * petals * 0.5, lace);
          point(t1, base + t1 * petals * 0.5, lace);
        }
      }
      const hoop: number[] = [];
      for (let h = 0; h < hoops; h++) {
        const t = (h / hoops) * Math.PI * 2;
        for (let j = 0; j < 24; j++) {
          point(t, (j / 24) * Math.PI * 2, hoop);
          point(t, ((j + 1) / 24) * Math.PI * 2, hoop);
        }
      }

      const css = () => {
        const s = getComputedStyle(document.documentElement);
        return { g: s.getPropertyValue('--guilloche').trim() || '#2f5d62', b: s.getPropertyValue('--bronze').trim() || '#8a6a3c' };
      };
      const laceMat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.42, depthWrite: false });
      const hoopMat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.16, depthWrite: false });
      const paint = () => { const c = css(); laceMat.color.set(c.g); hoopMat.color.set(c.b); };
      paint();

      const laceGeo = new THREE.BufferGeometry();
      laceGeo.setAttribute('position', new THREE.Float32BufferAttribute(lace, 3));
      const hoopGeo = new THREE.BufferGeometry();
      hoopGeo.setAttribute('position', new THREE.Float32BufferAttribute(hoop, 3));
      const ring = new THREE.Group();
      ring.add(new THREE.LineSegments(laceGeo, laceMat), new THREE.LineSegments(hoopGeo, hoopMat));
      ring.rotation.x = TILT;
      scene.add(ring);

      const laceCount = lace.length / 3, hoopCount = hoop.length / 3;
      const draw = (p: number) => {
        laceGeo.setDrawRange(0, Math.floor(laceCount * p) & ~1);
        hoopGeo.setDrawRange(0, Math.floor(hoopCount * p) & ~1);
      };

      const size = () => {
        const w = host.clientWidth, h = host.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      size();

      const still = reduced();
      const lean = { x: 0, y: 0, tx: 0, ty: 0 };
      const onMove = (e: PointerEvent) => {
        lean.tx = (e.clientY / window.innerHeight - 0.5) * 0.12;
        lean.ty = (e.clientX / window.innerWidth - 0.5) * 0.16;
      };

      let raf = 0, visible = true, t0 = 0, last = 0, spin = 0;
      const frame = (now: number) => {
        raf = 0;
        if (!t0) { t0 = now; last = now; }
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        const p = Math.min(1, (now - t0) / 2200);
        draw(1 - Math.pow(1 - p, 3));
        spin += dt * 0.07;
        lean.x += (lean.tx - lean.x) * 0.04;
        lean.y += (lean.ty - lean.y) * 0.04;
        ring.rotation.z = spin;
        ring.rotation.x = TILT + lean.x;
        ring.rotation.y = lean.y;
        renderer.render(scene, camera);
        if (visible && !document.hidden) raf = requestAnimationFrame(frame);
      };
      const wake = () => { if (!still && !raf && visible && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); } };
      const once = () => { draw(1); renderer.render(scene, camera); };

      if (still) once(); else raf = requestAnimationFrame(frame);

      const ro = new ResizeObserver(() => { size(); if (still) once(); });
      ro.observe(host);
      const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; wake(); });
      io.observe(host);
      const mo = new MutationObserver(() => { paint(); if (still) once(); });
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const onScheme = () => { paint(); if (still) once(); };
      mq.addEventListener('change', onScheme);
      document.addEventListener('visibilitychange', wake);
      if (!still) window.addEventListener('pointermove', onMove, { passive: true });

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect(); io.disconnect(); mo.disconnect();
        mq.removeEventListener('change', onScheme);
        document.removeEventListener('visibilitychange', wake);
        window.removeEventListener('pointermove', onMove);
        laceGeo.dispose(); hoopGeo.dispose(); laceMat.dispose(); hoopMat.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => { disposed = true; cleanup(); };
  }, [ok, petals, rings]);

  return ok ? <div ref={ref} className="wire-seal" aria-hidden="true" /> : fallback;
}
