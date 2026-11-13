import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { profile, projects, stationOrder } from '../data';
import type { Project } from '../data';
import { Arrow, External } from './Icons';
import { serial, stationsOf, toolCode } from './Instrument';
import Kern from './Kern';

function Detail({ p }: { p: Project }) {
  return (
    <div className="detail-grid">
      <div><h4>The problem</h4><p>{p.problem}</p></div>
      <div>
        <h4>Stations</h4>
        <ol className="steps">
          {stationOrder.flatMap((s) => p.approach.filter((a) => a.station === s)).map((a) => (
            <li key={a.text}><b>{a.station}</b><span>{a.text}</span></li>
          ))}
        </ol>
      </div>
      <div><h4>Outcome</h4><ul className="outcome">{p.outcome.map((o) => <li key={o}>{o}</li>)}</ul></div>
      <div>
        <h4>Dashboard</h4>
        {p.images?.length ? (
          <div className="shots">{p.images.map((src) => <img key={src} src={src} alt={`${p.title} dashboard`} loading="lazy" />)}</div>
        ) : (
          <p className="pending">Dashboard screenshots will appear here. Add them to <code>public/projects/</code> and list them under <code>images</code> in <code>src/data.ts</code>.</p>
        )}
      </div>
      {p.links && (
        <div className="actions">
          {p.links.map((l) => <a key={l.href} className="btn" href={l.href} target="_blank" rel="noopener">{l.label} <External /></a>)}
        </div>
      )}
    </div>
  );
}

export default function Cases({ openId, setOpenId }: { openId: string | null; setOpenId: (id: string | null) => void }) {
  const tools = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tools))), []);
  const [tool, setTool] = useState<string | null>(null);
  const shown = projects.filter((p) => !tool || p.tools.includes(tool));

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="sec-head">
          <h2>Case studies</h2>
          <p>Each case follows the data from source to report. Open one to read the full story.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter case studies by tool">
          <span className="field-label">Tool</span>
          <button className="filter" aria-pressed={tool === null} onClick={() => setTool(null)}>All</button>
          {tools.map((t) => <button key={t} className="filter" aria-pressed={tool === t} onClick={() => setTool(t)}>{t}</button>)}
        </div>
        <div className="cases">
          {shown.map((p) => {
            const open = openId === p.id;
            return (
              <article className="case" key={p.id} id={`case-${p.id}`}>
                <div className="stub">
                  <span className="no">{serial(p)}</span>
                  <dl>
                    <div><dt>Type</dt><dd>{p.tag}</dd></div>
                    <div><dt>Tools</dt><dd className="data">{p.tools.map((t) => <span key={t} style={{ display: 'block' }}>{toolCode(t)}</span>)}</dd></div>
                  </dl>
                </div>
                <div className="case-body">
                  <h3><Kern text={p.title} /></h3>
                  <p>{p.summary}</p>
                  <table className="figures">
                    <thead><tr><th scope="col">Figure</th><th scope="col" style={{ textAlign: 'right' }}>Value</th></tr></thead>
                    <tbody>{p.metrics.map((m) => <tr key={m.label}><td>{m.label}</td><td className="num">{m.value}</td></tr>)}</tbody>
                  </table>
                  <div className="case-foot">
                    <div className="stations" style={{ marginTop: 0 }} aria-label="Stations">
                      {stationsOf(p).map((s, i, a) => (
                        <span key={s} style={{ display: 'contents' }}>
                          <span className="station">{s}</span>
                          {i < a.length - 1 && <span className="station-sep" aria-hidden="true" />}
                        </span>
                      ))}
                    </div>
                    <button className={open ? 'btn' : 'btn btn-seal'} aria-expanded={open} aria-controls={`detail-${p.id}`} onClick={() => setOpenId(open ? null : p.id)}>
                      {open ? 'Close case study' : <>Open case study <Arrow /></>}
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`detail-${p.id}`} className="case-detail"
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Detail p={p} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </article>
            );
          })}
        </div>
        <div className="actions" style={{ marginTop: 26 }}>
          <a className="btn" href={profile.github} target="_blank" rel="noopener">More code on GitHub <External /></a>
        </div>
      </div>
    </section>
  );
}
