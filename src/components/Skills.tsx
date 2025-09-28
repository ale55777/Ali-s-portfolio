
// skill data with logo icons
const skills = [
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "MERN Stack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }, 
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>
      <div className="skills-wrap">
        {skills.map((s, i) => (
          <div key={i} className="skill-pill">
            <div className="skill-logo-frame">
              <img src={s.logo} alt={s.name} className="skill-logo" />
            </div>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
