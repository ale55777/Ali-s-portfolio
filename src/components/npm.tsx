import React from 'react'

export default function NpmPackages() {
  const npmPackages = [
    { name: "narzoaliatm", desc: "ATM Machine CLI Package", link: "https://www.npmjs.com/package/narzoaliatm" },
    { name: "narzoalicalcul", desc: "Simple Calculator CLI", link: "https://www.npmjs.com/package/narzoalicalcul" },
    { name: "narzoaleguess", desc: "Number Guessing Game", link: "https://www.npmjs.com/package/narzoaleguess" },
    { name: "narzoalistdmang", desc: "List Manager Utility", link: "https://www.npmjs.com/package/narzoalistdmang" },
    { name: "narzoalicurr", desc: "Currency Converter CLI", link: "https://www.npmjs.com/package/narzoalicurr" },
    { name: "narzoalicountdown_timer", desc: "Countdown Timer CLI", link: "https://www.npmjs.com/package/narzoalicountdown_timer" },
    { name: "narzoalewordcounter", desc: "Word Counter CLI", link: "https://www.npmjs.com/package/narzoalewordcounter" },
    { name: "narzoalitodoo", desc: "To-Do App CLI", link: "https://www.npmjs.com/package/narzoalitodoo" }
  ]

  return (
    <section id="npm" className="section npm-packages">
      <h2 className="section-titlee">NPM Published Packages</h2>
      <div className="proj-grid">
        {npmPackages.map((pkg, i) => (
          <div key={i} className="proj-card npm-card">
            <div className="proj-title">{pkg.name}</div>
            <p>{pkg.desc}</p>
            <a
              className="github-btn npm-btn"
              href={pkg.link}
              target="_blank"
              rel="noreferrer"
            >
              View on NPM ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
