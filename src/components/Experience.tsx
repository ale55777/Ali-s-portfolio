import React from 'react'

export default function Experience() {
  const experience = [
    {
      role: "Software Development Intern",
      company: "AL-ASAR Technologies",
      dates: "2022",
      details: "Built modern UI components and state management."
    },
    {
      role: "Web Application Development Intern",
      company: "Webscare Technologies",
      dates: "2024",
      details: "Worked on React.js projects and full-stack features."
    }
  ]

  return (
    <section id="experience" className="section experience">
      <h2>Experience</h2>
      <div className="experience-wrap">
        {experience.map((ex, i) => (
          <div key={i} className="exp-item">
            <h3>{ex.role}</h3>
            <p className="company">{ex.company} • {ex.dates}</p>
            <p className="details">{ex.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
