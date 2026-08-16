export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="section-line"></div>

      <div className="about-layout">

        {/* ── Left: Bio + Contact Info ── */}
        <div className="about-bio-card hud-card">
          <p>
            I'm <span>Ali Raza Khan</span>, a passionate{' '}
            <span>Computer Scientist</span> &amp; <span>AI Engineer</span> with
            a strong foundation in full-stack development. I specialize in building
            modern, scalable, and impactful applications using the{' '}
            <span>MERN Stack</span>.
          </p>
          <p>
            Currently working as a <span>MERN Stack Developer</span> at{' '}
            <span>WEBSCARE Technologies</span> and delivering web solutions
            for <span>UK-based clients</span> remotely.
          </p>

          <ul className="about-info-list">
            <li>
              <span className="icon">📧</span>
              <a href="mailto:malirazakhan55777@gmail.com">malirazakhan55777@gmail.com</a>
            </li>
            <li>
              <span className="icon">📱</span>
              <a href="tel:+923041659109">+92 304 165 9109</a>
            </li>
            <li>
              <span className="icon">📍</span>
              26B, Street 687, G-13/3, Islamabad, Pakistan
            </li>
            <li>
              <span className="icon">💻</span>
              <a href="https://github.com/ale55777" target="_blank" rel="noreferrer">
                github.com/ale55777
              </a>
            </li>
          </ul>
        </div>

        {/* ── Right: Education ── */}
        <div className="edu-card hud-card">
          <h3 className="edu-heading">// Education</h3>
          <div className="edu-list">
            <div className="edu-item-row">
              <div className="edu-year">2021 — 2025</div>
              <h4>BS Computer Science</h4>
              <p>FAST NUCES, Islamabad — CGPA 3.5</p>
            </div>
            <div className="edu-item-row">
              <div className="edu-year">2019 — 2021</div>
              <h4>Intermediate — FSC Pre Engineering</h4>
              <p>Score: 80%</p>
            </div>
            <div className="edu-item-row">
              <div className="edu-year">2017 — 2019</div>
              <h4>Matriculation — Computer Science</h4>
              <p>Score: 87.6%</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
