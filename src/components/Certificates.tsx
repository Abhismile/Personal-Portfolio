import { useState } from 'react';
import { certificates, otherCerts } from '../data';
import { Rosette } from './Guilloche';
import Modal from './Modal';

type Cert = (typeof certificates)[number];

function Frame({ c, i }: { c: Cert; i: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="cert-frame">
      {failed ? (
        <>
          <Rosette petals={5 + i * 2} rings={3 + i} className="" />
          <span className="pend">Image pending: public{c.img}</span>
        </>
      ) : (
        <img src={c.img} alt={`${c.title} certificate`} onError={() => setFailed(true)} />
      )}
    </div>
  );
}

export default function Certificates() {
  const [open, setOpen] = useState<Cert | null>(null);
  return (
    <section id="certificates" className="section">
      <div className="wrap">
        <div className="sec-head"><h2>Certificates</h2><p>Certified copies. Select one to view it full size.</p></div>
        <div className="certs">
          {certificates.map((c, i) => (
            <div className="cert" key={c.title}>
              <button className="cert-open" onClick={() => setOpen(c)} aria-label={`View ${c.title} certificate`}>
                <Frame c={c} i={i} />
              </button>
              <h3>{c.title}</h3>
              <p>{c.issuer}. {c.detail}</p>
              {c.id && <p className="id">ID {c.id}</p>}
            </div>
          ))}
        </div>
        <table className="ledger also">
          <thead><tr><th scope="col">Also completed</th><th scope="col">Issuer</th></tr></thead>
          <tbody>{otherCerts.map((c) => <tr key={c.title}><td>{c.title}</td><td className="muted">{c.by}</td></tr>)}</tbody>
        </table>
      </div>
      <Modal open={!!open} onClose={() => setOpen(null)} label={open?.title ?? 'Certificate'} className="viewer">
        {open && (
          <>
            <img src={open.img} alt={`${open.title} certificate`} />
            <button className="btn" style={{ background: 'var(--paper)' }} onClick={() => setOpen(null)}>Close</button>
          </>
        )}
      </Modal>
    </section>
  );
}
