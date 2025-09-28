import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Node from './components/npm'

export default function App() {
  return (
    <div className="page-root">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
    
      <Projects />
      <Node/>
      <Contact />
      <Footer />
    </div>
  )
}
