import './styles.css'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Stats      from './components/Stats'
import About      from './components/About'
import Skills     from './components/Skills'
import Services   from './components/Services'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <div className="page-root">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
