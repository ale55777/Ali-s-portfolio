import { useState } from 'react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const links = ["about", "skills", "experience", "projects", "contact"];
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav glass sexy-nav">
      {/* Logo */}
      <div className="logo sexy-logo" onClick={() => scrollTo('hero')}>
        Ali Raza Khan
      </div>

      {/* Hamburger */}
      <div className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Buttons */}
      <div className={`nav-buttons ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <button
            key={link}
            className="nav-btn"
            onClick={() => {
              scrollTo(link);
              setOpen(false); // close menu on click
            }}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}
