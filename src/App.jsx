import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Works from './components/Works'
import Documents from './components/Documents'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-maroon-900">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Works />
      <Documents />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
