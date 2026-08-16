const skills = [
  { name: 'React.js',     pct: 92 },
  { name: 'Node.js',      pct: 88 },
  { name: 'TypeScript',   pct: 85 },
  { name: 'MongoDB',      pct: 84 },
  { name: 'Express.js',   pct: 87 },
  { name: 'Python',       pct: 80 },
  { name: 'C++',          pct: 82 },
  { name: 'Flutter',      pct: 75 },
  { name: 'HTML / CSS',   pct: 95 },
  { name: 'Tailwind CSS', pct: 90 },
  { name: 'Git / GitHub', pct: 88 },
  { name: 'AI APIs',      pct: 78 },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="section-line"></div>

      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-row">
            <div className="skill-top">
              <span className="skill-name">{s.name}</span>
              <span className="skill-pct">{s.pct}%</span>
            </div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
