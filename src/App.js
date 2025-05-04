import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './theme'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import Achievements from './components/Achievements/Achievements.jsx'
import Contact from './components/Contact/Contact.jsx'
import Fireworks from './components/Fireworks/Fireworks'
import './App.css'

const Section = ({ id, children }) => (
  <section id={id} className="w-full">
    <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        {children}
      </div>
    </div>
  </section>
)

function App() {
  const [isPartyMode, setIsPartyMode] = useState(false)

  const togglePartyMode = () => {
    setIsPartyMode(!isPartyMode)
  }

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Fireworks isActive={isPartyMode} />
          <Navbar onPartyModeToggle={togglePartyMode} />
          <main className="w-full">
            <div className="space-y-32">
              <Section id="hero">
                <Hero />
              </Section>

              <Section id="experience">
                <Experience />
              </Section>

              <Section id="projects">
                <Projects />
              </Section>

              <Section id="achievements">
                <Achievements />
              </Section>

              <Section id="contact">
                <Contact />
              </Section>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App