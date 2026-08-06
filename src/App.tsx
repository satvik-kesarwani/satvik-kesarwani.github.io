import { useEffect } from "react";
import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Achievements from "@/sections/Achievements";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

function App() {
  useEffect(() => {
    // keep native browser scrolling for a more direct feeling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-espresso">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
