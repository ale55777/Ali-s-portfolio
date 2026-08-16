const services = [
  {
    icon: '🌐',
    title: 'Full-Stack Web Dev',
    desc: 'End-to-end web applications using React, Node.js, Express & MongoDB. Scalable APIs, responsive UIs.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Integrating AI/ML models, OpenAI APIs, and intelligent chatbot solutions into existing or new products.',
    tags: ['OpenAI', 'Python', 'LangChain', 'GPT'],
  },
  {
    icon: '📱',
    title: 'Mobile App Dev',
    desc: 'Cross-platform mobile applications built with Flutter & Kotlin with Firebase backend.',
    tags: ['Flutter', 'Firebase', 'Kotlin', 'Dart'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    desc: 'Complete marketplace platforms with product management, cart systems, and secure payment flows.',
    tags: ['MERN', 'Stripe', 'Cart', 'Auth'],
  },
  {
    icon: '🔧',
    title: 'API Development',
    desc: 'Robust RESTful & GraphQL APIs with authentication, rate limiting, and full documentation.',
    tags: ['Express', 'JWT', 'GraphQL', 'Swagger'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Development',
    desc: 'Pixel-perfect, responsive frontends with modern animations, dark themes and great UX.',
    tags: ['React', 'Tailwind', 'Framer', 'CSS'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="section-title">Services</h2>
      <div className="section-line"></div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card hud-card">
            <span className="service-icon">{s.icon}</span>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <div className="service-tags">
              {s.tags.map((t) => (
                <span key={t} className="service-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
