import About from "./components/About"
import Contact from "./components/Contact"
import EduExp from "./components/EduExp"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className='min-h-screen bg-base-300 flex flex-col gap-8'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <EduExp/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
