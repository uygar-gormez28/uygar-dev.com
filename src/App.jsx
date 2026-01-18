import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Resume from "./component/Resume";

function App() {
  return (
    <>
      {/* sadece deneme yapıyorum */}
      <Hero />
      <About />
      {/* ID'leri buraya ekliyoruz */}
      <section id="projects">
        <Projects />
      </section>
      <Resume />
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
