import { profile, projects, stationOrder } from '../data';
import type { Project } from '../data';
import { Rosette, TintField } from './Guilloche';
import { Arrow, Download, MicrOnUs, MicrTransit } from './Icons';
import Kern from './Kern';
import WireSeal from './WireSeal';
import { useResumeAvailable } from '../hooks';

export const serial = (p: Project) => p.index.padStart(3, '0');
export const toolCode = (t: string) => t.replace(/[^a-z0-9]/gi, '').toUpperCase();
export const rosetteFor = (p: Project) => {
  const n = parseInt(p.metrics[0]?.value ?? '', 10);
  return { petals: Number.isFinite(n) ? Math.max(3, Math.min(14, n)) : 8, rings: p.tools.length };
};
export const stationsOf = (p: Project) => stationOrder.filter((s) => p.approach.some((a) => a.station === s));

export function MicrLine({ p }: { p: Project }) {
  return (
    <div className="micr" aria-label={`Case ${serial(p)}, tools ${p.tools.join(', ')}`}>
      <span><MicrOnUs />{serial(p)}<MicrOnUs /></span>
      <span><MicrTransit />{toolCode(p.tag).slice(0, 8)}<MicrTransit /></span>
      <span>{p.tools.map(toolCode).join(' ')}</span>
      <span><MicrOnUs /></span>
    </div>
  );
}

const micro = `${profile.first}${profile.last}·${profile.role}·FinTech·Accounting·`.toUpperCase().replace(/\s/g, '').repeat(40);

export default function Instrument({ onOpen }: { onOpen: (id: string) => void }) {
  const lead = projects[0];
  const hasResume = useResumeAvailable();
  const r = rosetteFor(lead);
  const legend = `Frame drawn from case ${serial(lead)}: ${r.petals} lobes for ${lead.metrics[0]?.value} ${lead.metrics[0]?.label}, ${r.rings} rings for ${r.rings} tools.`;
  const validated = lead.metrics.find((m) => /accura/i.test(m.label));

  return (
    <div className="wrap instrument-wrap" id="top">
      <article className="instrument" aria-label={`${profile.first} ${profile.last}, ${profile.role}`}>
        <TintField seed={2} />
        <span className="microprint" aria-hidden="true" style={{ position: 'relative', padding: '10px 14px 0' }}>{micro}</span>
        <div className="inst-body">
          <div className="inst-top">
            <div>
              <h1>{profile.first} <span>{profile.last}</span></h1>
              <p className="role"><Kern text={`${profile.role} · FinTech & accounting data`} /></p>
              <p className="intro">{profile.intro}</p>
              <p className="status"><span className="field-label">Status</span><span>{profile.status}{profile.location && ` · ${profile.location}`}</span></p>
            </div>
            <div className="seal">
              <div className="serial">
                <span className="field-label">Case no.</span>
                <span className="no">{serial(lead)}</span>
                <span className="date"><span className="field-label">Type</span><span className="data">{lead.tag}</span></span>
              </div>
              <figure className="medallion">
                <WireSeal petals={r.petals} rings={r.rings} fallback={<Rosette petals={r.petals} rings={r.rings} hollow className="medallion-frame" />} />
                <img src={profile.photo} alt={`Portrait of ${profile.first} ${profile.last}`} width={560} height={560} />
              </figure>
              <p className="seal-legend">{legend}</p>
            </div>
          </div>

          <div className="inst-main">
            <div>
              <div className="payee">
                <span className="field-label">Case study</span>
                <span className="val"><Kern text={lead.title} /></span>
                <span className="field-label for">For</span>
                <span className="val small">{lead.problem}</span>
              </div>
              <div className="stations" aria-label="Stations">
                {stationsOf(lead).map((s, i, a) => (
                  <span key={s} style={{ display: 'contents' }}>
                    <span className="station">{s}</span>
                    {i < a.length - 1 && <span className="station-sep" aria-hidden="true" />}
                  </span>
                ))}
              </div>
              <div className="payee-row">
                <div className="actions">
                  <button className="btn btn-seal" onClick={() => onOpen(lead.id)}>Open case study <Arrow /></button>
                  {hasResume && <a className="btn" href={profile.resume} target="_blank" rel="noopener">Résumé <Download /></a>}
                </div>
                {validated && (
                  <div className="amount" aria-label={`${validated.value} ${validated.label}`}>
                    <span className="field-label">Validated</span>
                    <strong>{validated.value}</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <MicrLine p={lead} />
      </article>
    </div>
  );
}
