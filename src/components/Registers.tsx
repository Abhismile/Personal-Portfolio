import { about, experience, services, skillGroups, stats } from '../data';

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="sec-head"><h2>About</h2><p>A finance graduate who works on the data behind the numbers.</p></div>
        <div className="about-grid">
          <div>
            <p className="statement">{about.statement}</p>
            <p>
              I work as a data analyst across FinTech and accounting data. I clean and combine data from many sources, build the reports and dashboards teams rely on, and explain what the numbers mean to the people who need to act on them. My finance training means I understand the loans, payments and reconciliations behind every table.
            </p>
            <table className="ledger figures-table">
              <thead><tr><th scope="col">Figure</th><th scope="col" className="num">Value</th></tr></thead>
              <tbody>
                {stats.map((s) => (
                  <tr key={s.label}><td>{s.label}</td><td className="num">{s.text ?? `${s.value!.toLocaleString('en-IN')}${s.suffix ?? ''}`}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <table className="ledger">
              <thead><tr><th scope="col">Particulars</th><th scope="col">Details</th></tr></thead>
              <tbody>{about.facts.map((f) => <tr key={f.k}><td className="k">{f.k}</td><td>{f.v}</td></tr>)}</tbody>
            </table>
            <table className="ledger" style={{ marginTop: 28 }}>
              <thead><tr><th scope="col">What I do</th><th scope="col">How</th></tr></thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.title}><td className="k">{s.title}</td><td>{s.body}<div className="tools" style={{ marginTop: 6 }}>{s.tools.join(' · ')}</div></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="sec-head"><h2>Experience</h2><p>Statement of service, most recent first.</p></div>
        <table className="ledger">
          <thead><tr><th scope="col">Period</th><th scope="col">Role</th><th scope="col">Tools</th></tr></thead>
          <tbody>
            {experience.map((j) => (
              <tr key={j.when}>
                <td className="period">{j.when}</td>
                <td>
                  <h3>{j.role} <span>· {j.org}</span></h3>
                  <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </td>
                <td className="tools" style={{ width: 180 }}>{j.tools.join(' · ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="sec-head"><h2>Skills</h2><p>Register of tools and methods I use from raw extract to finished report.</p></div>
        <table className="ledger">
          <thead><tr><th scope="col">Area</th><th scope="col">Entries</th><th scope="col" className="num">Count</th></tr></thead>
          <tbody>
            {skillGroups.map((g) => (
              <tr key={g.title}>
                <td className="k">{g.title}</td>
                <td>{g.items.join(' · ')}</td>
                <td className="num">{String(g.items.length).padStart(2, '0')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
