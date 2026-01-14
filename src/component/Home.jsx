import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
