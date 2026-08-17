import { useState, useEffect } from 'react';


const ROLES = [
  'AI ENGINEER',
  'MERN STACK DEVELOPER',
  'FULL-STACK DEVELOPER',
  'FREELANCE DEV',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <header id="hero" className="hero">
      <div className="hero-inner">

        {/* ── Left: Terminal Window ── */}
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="t-dot red"></span>
            <span className="t-dot yellow"></span>
            <span className="t-dot green"></span>
            <span className="terminal-title">ali_raza_khan — bash</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">~/portfolio $</span> whoami
            </div>

            <h1 className="hero-name">ALI RAZA KHAN</h1>

            <div className="hero-role">
              <span>{displayed}</span>
              <span className="cursor"></span>
            </div>

            <p className="hero-bio">
              <span className="hl">Computer Science graduate</span> from{' '}
              <span className="hl">FAST Islamabad</span> with a passion for building
              intelligent, scalable applications. Specialized in{' '}
              <span className="hl">MERN Stack</span> &amp;{' '}
              <span className="hl">AI Engineering</span>.
              Currently delivering full-stack solutions for{' '}
              <span className="hl">WEBSCARE Technologies</span>.
            </p>

            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                ⚡ Hire Me
              </a>
              <a
                href="https://github.com/ale55777"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                ↗ GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: HUD Image Frame ── */}
        <div className="hero-visual">
          <div className="hud-frame">
            <div className="hud-ring"></div>
            <div className="hud-ring"></div>

            <div className="profile-img-wrap">
              <img src="/Ali.jpg" alt="Ali Raza Khan" className="profile-img" />
            </div>

            {/* Scan overlay */}
            <div className="hud-scan"></div>

            {/* HUD stat badges */}
            <div className="hud-stat tl">CGPA: 3.5</div>
            <div className="hud-stat tr">FAST ISB</div>
            <div className="hud-stat bl">MERN ✓</div>
            <div className="hud-stat br">AI ✓</div>
          </div>
        </div>

      </div>
    </header>
  );
}
