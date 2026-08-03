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

  // Projeleri 2'li dikey sütunlara ayırarak her slide'da 2 kart alt alta gösteriyoruz
  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 2) {
    chunkedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <section className="min-h-screen bg-black py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Başlık */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {language === 'tr' ? "Projeler" : "Projects"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Projeler Swiper Slider + Sağ/Sol Yönlendirme İkonları Yan Yana */}
        <FadeIn delay={200}>
          <div className="relative max-w-5xl mx-auto px-4 md:px-0">
            {/* Sol Buton */}
            <button className="projects-prev absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-purple-500/50 bg-black/60 backdrop-blur-sm text-purple-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/20 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="px-8 md:px-0">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".projects-prev",
                  nextEl: ".projects-next",
                }}
                spaceBetween={24}
                slidesPerView={2}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  540: {
                    slidesPerView: 2, // 540px ve üstünde 2 kolon yan yana (toplam 4 kart görünür)
                  },
                }}
                className="projects-swiper pb-4"
              >
                {chunkedProjects.map((pair, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
                      {pair.map((project) => (
                        <Link
                          key={project.id}
                          id={project.id}
                          to={`/project/${project.id}`}
                          className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/50 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 block shadow-lg hover:shadow-purple-500/30 h-full"
                        >
                          {/* Görsel - Full width */}
                          <div className="w-full h-56 overflow-hidden relative">
                            <img 
                              src={project.image} 
                              alt={project.title[language]} 
                              className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${project.imageClass || 'object-cover'}`} 
                            />
                          </div>

                          {/* İçerik */}
                          <div className="p-5 flex flex-col h-[calc(100%-14rem)]">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
                              {project.title[language]}
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
                              {project.description[language]}
                            </p>

                            {/* Detay linki */}
                            <div className="flex items-center gap-2 text-purple-400 text-xs font-medium transition-colors border-t border-white/10 pt-3 mt-auto">
                              <span>{language === 'tr' ? "Detayları İncele →" : "View Details →"}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Sağ Buton */}
            <button className="projects-next absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-purple-500/50 bg-black/60 backdrop-blur-sm text-purple-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/20 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </FadeIn>

        {/* Github Yönlendirme */}
        <FadeIn delay={200}>
          <div className="text-center mt-16">
            <p className="text-gray-400 text-sm mb-4">
              {language === 'tr' 
                ? "Diğer projelerim için Github hesabıma bakabilirsiniz." 
                : "You can check my Github account for my other projects."}
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