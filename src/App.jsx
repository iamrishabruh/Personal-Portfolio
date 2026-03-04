import SideNav from './components/SideNav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Honors from './components/Honors'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <SideNav />
      <main className="page">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Honors />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
