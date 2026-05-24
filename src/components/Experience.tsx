export default function Experience() {
  const experience = [
    {
      role: "MERN STACK Developer ",
      company: "WEBSCARE Technologies",
      dates: "December 2025 - Present",
      details:
        "Developing full-stack MERN applications, builting responsive UI using React.js and Tailwind CSS, created RESTful APIs with Node.js and Express, and managed MongoDB databases. ",
    },
    {
      role: "Web Application Development Intern",
      company: "WEBSCARE Technologies",
      dates: "2024",
      details:
        "Developed full-stack MERN applications, built responsive UI using React.js and Tailwind CSS, created RESTful APIs with Node.js and Express, and managed MongoDB databases. Improved performance, responsiveness, and collaborated with the team to deliver new features.",
    },
    {
      role: "Freelance Web Developer",
      company: "UK-Based Client Projects (Remote, Manchester)",
      dates: "2023 - Present",
      details:
        "Developed responsive business websites and web apps using MERN stack. Built CMS-based solutions, designed frontend interfaces with React.js and Tailwind CSS, created backend APIs, and worked directly with clients for requirements and delivery.",
    },
    {
      role: "Software Development Intern",
      company: "AL-ASAR Technologies, NSTP-NUST, Islamabad",
      dates: "2022",
      details:
        "Worked with Java and Python to solve algorithmic problems, built clean and maintainable code, collaborated with technical teams, and gained experience in full software development lifecycle including debugging and testing.",
    }
  ]

  return (
    <section id="experience" className="section experience">
      <h2>Experience</h2>
      <div className="experience-wrap">
        {experience.map((ex, i) => (
          <div key={i} className="exp-item">
            <h3>{ex.role}</h3>
            <p className="company">
              {ex.company} {" • "} {ex.dates}
            </p>

            <p className="details">{ex.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
