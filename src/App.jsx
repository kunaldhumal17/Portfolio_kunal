import Navbar from './Components/Navbar'
import './App.css'

import Home from './Components/Home';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/footer';

function App() {

  return (
    <div className="Container">

      <Navbar />

      <main>

        <section id="home">
          <Home />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />

    </div>
  )
}

export default App