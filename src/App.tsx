import React from "react";
import Header from "./components/Header";
import Intro from "./sections/Intro"; // Add this!
import About from "./sections/About";
import Skills from "./sections/Skills";
import Service from "./sections/Service";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import BackToTop from "./components/BackToTop";
function App() {
  return (
    <div className="relative">
      <Header />
      <Intro /> {/* Include this */}
      <About />
      <Skills />
      <Service />
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
