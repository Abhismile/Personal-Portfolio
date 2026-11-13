// One authored icon set: 1.5px strokes on a 20px grid.
type P = { size?: number };
const base = (size = 18) => ({ width: size, height: size, viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true });

export const Arrow = ({ size }: P) => <svg {...base(size)}><path d="M4 10h12M11 5l5 5-5 5" /></svg>;
export const External = ({ size }: P) => <svg {...base(size)}><path d="M8 4H4v12h12v-4M11 4h5v5M16 4l-7 7" /></svg>;
export const Copy = ({ size }: P) => <svg {...base(size)}><rect x="7" y="7" width="9" height="9" /><path d="M4 13V4h9" /></svg>;
export const Download = ({ size }: P) => <svg {...base(size)}><path d="M10 3v10M6 9l4 4 4-4M4 16h12" /></svg>;
export const Sun = ({ size }: P) => <svg {...base(size)}><circle cx="10" cy="10" r="3.5" /><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M4.3 15.7l1.4-1.4M14.3 5.7l1.4-1.4" /></svg>;
export const Moon = ({ size }: P) => <svg {...base(size)}><path d="M16 12.5A6.5 6.5 0 0 1 7.5 4 6.5 6.5 0 1 0 16 12.5z" /></svg>;
export const Menu = ({ size }: P) => <svg {...base(size)}><path d="M3 6h14M3 10h14M3 14h14" /></svg>;
export const Close = ({ size }: P) => <svg {...base(size)}><path d="M5 5l10 10M15 5L5 15" /></svg>;

// MICR E-13B control symbols, drawn rather than relying on font coverage.
export const MicrTransit = () => (
  <svg width="12" height="16" viewBox="0 0 12 16" aria-hidden="true" fill="currentColor"><rect x="0" y="0" width="3" height="16" /><rect x="6" y="2" width="5" height="5" /><rect x="6" y="9" width="5" height="5" /></svg>
);
export const MicrOnUs = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true" fill="currentColor"><rect x="0" y="2" width="3" height="10" /><rect x="5" y="2" width="3" height="10" /><rect x="10" y="10" width="4" height="4" /></svg>
);
