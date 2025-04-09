import { useContext } from 'react'
import { ThemeContext } from './theme'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
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
      <Navbar />
      <Header />

      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="leaderships">
          <Leaderships />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Scroll />
      <Footer />
    </div>
  )
}

export default App