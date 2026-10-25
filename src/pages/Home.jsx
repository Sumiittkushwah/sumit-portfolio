
import React from "react";

import Hero from "../pages/Hero";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Education from "../pages/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Project />
      <Contact />
    </>
  );
}
