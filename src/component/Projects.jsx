import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import FadeIn from "./FadeIn";

const Projects = () => {
  return (
    <section className="min-h-screen bg-black py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Başlık */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projeler
              </span>
            </h2>
            <p className="text-gray-400 text-lg">İşte geliştirdiğim bazı projelerim</p>
          </div>
        </FadeIn>

        {/* Projeler Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Link
                to={`/project/${project.id}`}
                className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/50 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 block shadow-lg hover:shadow-purple-500/30 h-full"
              >
                {/* Görsel - Full width */}
                <div className="w-full h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>

                {/* İçerik */}
                <div className="p-5 flex flex-col h-[calc(100%-14rem)]">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
                    {project.title}
                  </h3>

                  {/* Teknoloji Etiketleri */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Detay linki */}
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-medium transition-colors border-t border-white/10 pt-3 mt-auto">
                    <span>Detayları İncele &rarr;</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Github Yönlendirme */}
        <FadeIn delay={200}>
          <div className="text-center mt-16">
            <p className="text-gray-400 text-sm mb-4">
              Diğer projelerim için Github hesabıma bakabilirsiniz.
            </p>
            <a
              href="https://github.com/uygar-gormez28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;