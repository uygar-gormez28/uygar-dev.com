import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Projects = () => {
  const { language } = useLanguage();

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-bg-primary relative border-t border-white/[0.04]">
      <div className="max-w-container mx-auto">
        
        {/* Section Heading */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              <span className="text-gradient">
                {language === 'tr' ? "Projeler" : "Projects"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* 1. FEATURED PROJECTS (ÖNE ÇIKAN PROJELER) */}
        <div className="mb-16">
          <FadeIn delay={100}>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                {language === 'tr' ? "Öne Çıkan Projeler" : "Featured Projects"}
              </h3>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 150} className="h-full">
                <article className="group h-full flex flex-col rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/10">
                  
                  {/* Screenshot Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-bg-surface border-b border-white/[0.06]">
                    <img
                      src={project.image}
                      alt={project.title[language]}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${project.imageClass || ''}`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-60" />
                    
                    {/* Category Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#08090D]/85 backdrop-blur-md text-white border border-white/10 shadow-sm">
                        {project.category[language]}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    <h4 className="text-2xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors mb-3">
                      {project.title[language]}
                    </h4>

                    <p className="text-content-secondary text-sm sm:text-base leading-relaxed mb-6">
                      {project.description[language]}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-content-primary border border-white/[0.06] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links Bar */}
                    <div className="mt-auto pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4 flex-wrap">
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        {language === 'tr' ? "Detayları İncele →" : "View Project Details →"}
                      </Link>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-content-secondary hover:text-white border border-white/[0.08] text-xs font-semibold transition-colors"
                          >
                            GitHub
                          </a>
                        )}
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 text-xs font-semibold transition-colors"
                          >
                            {language === 'tr' ? "Canlı Site →" : "Live Demo →"}
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 2. OTHER PROJECTS (DİĞER PROJELER) — HORIZONTAL CAROUSEL */}
        <div>
          <FadeIn delay={200}>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                {language === 'tr' ? "Diğer Projeler" : "Other Projects"}
              </h3>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="relative px-12 sm:px-14 md:px-16">
              {/* Prev Navigation Button */}
              <button
                id="swiper-prev-other-projects"
                aria-label={language === 'tr' ? "Önceki Proje" : "Previous Project"}
                className="absolute left-0 sm:left-0.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#08090D]/90 backdrop-blur-md text-white border border-purple-500/40 hover:border-purple-400 hover:bg-purple-600/20 hover:text-purple-300 flex items-center justify-center transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none cursor-pointer shadow-lg shadow-black/60 hover:shadow-purple-500/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-base font-bold select-none"
              >
                ←
              </button>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: "#swiper-prev-other-projects",
                  nextEl: "#swiper-next-other-projects",
                }}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="!pb-4"
              >
                {otherProjects.map((project) => (
                  <SwiperSlide key={project.id} className="h-auto">
                    <article className="group h-full flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden shadow-lg">
                      
                      {/* Project Thumbnail */}
                      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-bg-surface border-b border-white/[0.06]">
                        <img
                          src={project.image}
                          alt={project.title[language]}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.imageClass || ''}`}
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#08090D]/85 backdrop-blur-md text-white border border-white/10">
                            {project.category[language]}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h4 className="text-lg font-bold font-heading text-white group-hover:text-purple-300 transition-colors mb-2">
                          {project.title[language]}
                        </h4>

                        <p className="text-content-secondary text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                          {project.description[language]}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-content-primary border border-white/[0.06] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer Link */}
                        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                          <Link
                            to={`/project/${project.id}`}
                            className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            {language === 'tr' ? "Detayları İncele →" : "View Details →"}
                          </Link>

                          {project.website && (
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-purple-300 hover:text-white transition-colors"
                            >
                              {language === 'tr' ? "Canlı Site →" : "Live Demo →"}
                            </a>
                          )}
                        </div>

                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Next Navigation Button */}
              <button
                id="swiper-next-other-projects"
                aria-label={language === 'tr' ? "Sonraki Proje" : "Next Project"}
                className="absolute right-0 sm:right-0.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#08090D]/90 backdrop-blur-md text-white border border-purple-500/40 hover:border-purple-400 hover:bg-purple-600/20 hover:text-purple-300 flex items-center justify-center transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none cursor-pointer shadow-lg shadow-black/60 hover:shadow-purple-500/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-base font-bold select-none"
              >
                →
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Compact GitHub Redirect */}
        <FadeIn delay={400}>
          <div className="text-center mt-12 pt-6">
            <p className="text-content-secondary text-sm mb-3">
              {language === 'tr' 
                ? "Diğer projelerim için GitHub hesabıma bakabilirsiniz." 
                : "You can check my GitHub account for my other projects."}
            </p>
            <a
              href="https://github.com/uygar-gormez28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-95 hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300"
            >
              GitHub →
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Projects;
