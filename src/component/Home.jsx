import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";
import Certificates from "./Certificates";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <section id="projects">
        <Projects />
      </section>
      <Certificates />
      <Resume />
      <section id="contact">
        <Contact />
      </section>
      <section id="blog">
        <Blog />
      </section>
    </>
  );
};

export default Home;
