import About from "./components/About"
import ContactFooter from "./components/ContactFooter"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className='min-h-screen p-2 md:p-4 lg:p-6 bg-base-300 flex flex-col gap-8'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactFooter/>
    </div>
  )
}

export default App
