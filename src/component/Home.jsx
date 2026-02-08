import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";
import Certificates from "./Certificates";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
