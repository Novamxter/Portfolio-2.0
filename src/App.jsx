import Lenis from "@studio-freight/lenis";
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BgCanvas from "./components/BgCanvas";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import AcademicJourney from "./pages/Academics/Academics";
import Work from "./pages/Work/Work";
import WhatIDo from "./pages/Services/Services";
import Contact from "./pages/Contact/ContactMe";
import Footer from "./components/Footer";

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  //     smoothWheel: true,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <>
      <Router>
        <Navbar />
        {/* <BgCanvas /> */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <AcademicJourney />
                <Work />
                <WhatIDo />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Work showAll={true} />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
