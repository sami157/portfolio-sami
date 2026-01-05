import React, { useRef } from "react";
import About from "./components/About";
import ContactFooter from "./components/ContactFooter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen p-2 md:p-4 lg:p-6 bg-base-300 flex flex-col gap-8">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ heroRef, aboutRef, skillsRef, projectsRef, contactRef }}
      />

      <section ref={heroRef}>
        <Hero />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={skillsRef}>
        <Skills />
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={contactRef}>
        <ContactFooter />
      </section>
    </div>
  );
}

export default App;
