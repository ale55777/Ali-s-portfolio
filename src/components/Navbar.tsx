import React from 'react'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const links = ["about", "skills", "experience", "projects", "contact"]

  return (
    <nav className="nav glass sexy-nav">
      {/* Logo */}
      <div className="logo sexy-logo" onClick={() => scrollTo('hero')}>
      Ali Raza Khan
      </div>

      {/* Nav Buttons in One Line */}
      <div className="nav-buttons">
        {links.map((link) => (
          <button
            key={link}
            className="nav-btn"
            onClick={() => scrollTo(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  )
}
