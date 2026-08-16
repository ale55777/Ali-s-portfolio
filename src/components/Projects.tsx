import { useState } from 'react';

type Project = {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  category: string;
};

const projects: Project[] = [
  // React / MERN
  {
    title: 'AI Debugger',
    desc: 'AI-powered code debugger that identifies errors and suggests fixes in real time.',
    tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    github: 'https://github.com/ale55777/AI-Debugger-MERN.git',
    category: 'MERN',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack marketplace with product browsing, cart system, and secure checkout.',
    tech: ['React', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/ale55777/E-Commerce-Web.git',
    category: 'MERN',
  },
  {
    title: 'Gemini Clone',
    desc: 'AI-powered chatbot application inspired by Google Gemini with streaming responses.',
    tech: ['React', 'Gemini API', 'CSS'],
    github: 'https://github.com/ale55777/REACT-JS.git',
    category: 'MERN',
  },
  {
    title: 'Garage.com — Car Buy/Sell',
    desc: 'A platform for users to buy, sell, and manage car listings easily.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ale55777/REACT-JS.git',
    category: 'MERN',
  },
  {
    title: 'Weather Live',
    desc: 'Real-time weather forecast app with clean UI and dynamic icons.',
    tech: ['React', 'OpenWeather API', 'CSS'],
    github: 'https://github.com/ale55777/WeatherApp.git',
    category: 'MERN',
  },
  {
    title: 'TikTak — TikTok Clone',
    desc: 'Short-video sharing platform with modern UI and interactive features.',
    tech: ['React', 'Firebase', 'Node.js'],
    github: 'https://github.com/ale55777/REACT-JS.git',
    category: 'MERN',
  },
  // Flutter
  {
    title: 'FitBuds — Fitness App',
    desc: 'Cross-platform fitness tracking app with workout plans and Firebase backend.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/ale55777/Flutter/blob/main/FITS_BUDS.zip',
    category: 'Flutter',
  },
  {
    title: 'Weather App Mobile',
    desc: 'Flutter mobile app fetching live weather data with a clean dashboard UI.',
    tech: ['Flutter', 'API', 'Dart'],
    github: 'https://github.com/ale55777/Weather-App-Latest-',
    category: 'Flutter',
  },
  // C++
  {
    title: 'Hospital Management System',
    desc: 'Manages patient records, doctor schedules, and hospital operations.',
    tech: ['C++', 'OOP', 'File I/O'],
    github: 'https://github.com/ale55777/C-Projects.git',
    category: 'C++',
  },
  {
    title: 'Grocery Store Management',
    desc: 'Handles billing, stock management, and customer transactions.',
    tech: ['C++', 'OOP', 'DSA'],
    github: 'https://github.com/ale55777/C-Projects.git',
    category: 'C++',
  },
  {
    title: 'Graph Path Algorithms',
    desc: "Implements Prim's, Dijkstra's & Kruskal's algorithms with visual output.",
    tech: ['C++', 'Graph Theory', 'DSA'],
    github: 'https://github.com/ale55777/C-Projects.git',
    category: 'C++',
  },
  // Python
  {
    title: 'Sorting Algorithm Suite',
    desc: 'Complete collection of sorting algorithms with performance comparison benchmarks.',
    tech: ['Python', 'Algorithms', 'Big-O'],
    github: 'https://github.com/ale55777/My-Python.git',
    category: 'Python',
  },
];

const FILTERS = ['All', 'MERN', 'Flutter', 'C++', 'Python'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="section-line"></div>

      {/* Filter buttons */}
      <div className="projects-filter">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="projects-grid">
        {filtered.map((p, i) => (
          <div key={i} className="project-card hud-card">
            <div className="project-header">
              <h3 className="project-title">{p.title}</h3>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub ↗
              </a>
            </div>

            <p className="project-desc">{p.desc}</p>

            <div className="tech-tags">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
