import { profile } from '../data';
import { useResumeAvailable } from '../hooks';
import { TintField } from './Guilloche';
import { Copy, Download, External } from './Icons';

export default function Contact({ onCopy }: { onCopy: () => void }) {
  const hasResume = useResumeAvailable();
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="slip">
          <TintField seed={5} />
          <div className="slip-inner">
            <div className="slip-main">
              <h2>Get in touch</h2>
              <p>Hiring for a FinTech, lending or accounting data role? Write to me and I'll reply soon.</p>
              <div className="remit">
                <span className="field-label">Email</span>
                <div className="addr">
                  <span>{profile.email}</span>
                  <button className="btn" onClick={onCopy}><Copy /> Copy email</button>
                </div>
              </div>
            </div>
            <div className="slip-side">
              <span className="field-label">Elsewhere</span>
              <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn <External /></a>
              <a href={profile.github} target="_blank" rel="noopener">GitHub <External /></a>
              {hasResume && <a href={profile.resume} target="_blank" rel="noopener">Résumé (PDF) <Download /></a>}
              <a href={`mailto:${profile.email}`}>Open in mail app <External /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
