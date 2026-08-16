const experience = [
  {
    role: 'MERN Stack Developer',
    company: 'WEBSCARE Technologies',
    dates: 'Dec 2025 — Present',
    desc: 'Building full-stack MERN applications, designing responsive UIs with React.js & Tailwind CSS, creating RESTful APIs with Node.js/Express, and managing MongoDB databases.',
  },
  {
    role: 'Web Application Development Intern',
    company: 'WEBSCARE Technologies',
    dates: '2024',
    desc: 'Developed full-stack MERN apps, built responsive UIs, created RESTful APIs, and managed MongoDB. Improved performance, responsiveness, and collaborated to deliver new features.',
  },
  {
    role: 'Freelance Web Developer',
    company: 'UK-Based Clients (Remote, Manchester)',
    dates: '2023 — Present',
    desc: 'Delivered responsive business websites and web apps using MERN stack. Built CMS solutions, designed React frontends, created backend APIs, and worked directly with clients.',
  },
  {
    role: 'Software Development Intern',
    company: 'AL-ASAR Technologies, NSTP-NUST, Islamabad',
    dates: '2022',
    desc: 'Worked with Java and Python to solve algorithmic problems, built clean maintainable code, collaborated with technical teams, and gained full SDLC experience.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="section-line"></div>

      <div className="timeline">
        {experience.map((ex, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card hud-card">
              <h3 className="timeline-role">{ex.role}</h3>
              <div className="timeline-meta">
                <span className="company">⚙ {ex.company}</span>
                <span className="dates">📅 {ex.dates}</span>
              </div>
              <p className="timeline-desc">{ex.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
