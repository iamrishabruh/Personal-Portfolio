import { useContext } from 'react'
import { ThemeContext } from './theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Leaderships from './components/Leaderships/Leaderships'
import Scroll from './components/Scroll/Scroll'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="leaderships" className="section">
          <Leaderships />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Scroll />
      <Footer />
    </div>
  )
}

export default App