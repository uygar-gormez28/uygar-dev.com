import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";
import Certificates from "./Certificates";
import Blog from "./Blog";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="resume">
        <Resume />
      </section>
      
      <section id="certificates">
        <Certificates />
      </section>
      
      <section id="blog">
        <Blog />
      </section>
      
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default Home;
