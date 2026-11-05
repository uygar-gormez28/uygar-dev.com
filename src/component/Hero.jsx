import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[62vh] lg:min-h-[70vh] flex items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Matrix / Neo Background with ~18% Brighter Visibility & Sharper Detail */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-95"
        style={{
          backgroundImage: "url('/img/Matrix.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          filter: "blur(1.5px) brightness(0.78) contrast(1.08)",
          transform: "scale(1.04)",
        }}
      />
      {/* Subtle left-side shield gradient to keep left text readable while keeping overall background bright */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#08090D]/70 via-[#08090D]/30 to-transparent pointer-events-none" />
      {/* Soft radial overlay with reduced opacity for greater background visibility */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(8,9,13,0.45)_0%,rgba(8,9,13,0.15)_60%,transparent_90%)] pointer-events-none" />
      {/* Top navbar blend & smooth fade to page dark background (#08090D) at bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#08090D]/40 via-transparent to-[#08090D] pointer-events-none" />

      {/* Main 2-Column Content */}
      <div className="relative z-10 w-full max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Personal Information & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn delay={100}>
              {/* Eyebrow Label */}
              <div className="mb-2.5">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-purple-400 uppercase">
                  DEVELOPER
                </span>
              </div>

              {/* Main Name Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                <span className="text-gradient">
                  Uygar Görmez
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-content-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-7">
                {language === 'tr' 
                  ? "Tasarlıyor, kodluyor ve fikirleri çalışan projelere dönüştürüyorum."
                  : "Designing, coding, and turning ideas into working projects."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row flex-wrap gap-3.5 items-center">
                {/* Primary Action Button */}
                <button
                  onClick={() => handleScrollTo('projects')}
                  className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center cursor-pointer whitespace-nowrap"
                >
                  {language === 'tr' ? "Projelerimi Keşfet" : "Explore Projects"}
                </button>

                {/* Secondary CV Button */}
                <a
                  href="/cv/Uygar_Gormez_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-content-primary bg-white/[0.04] hover:bg-white/[0.1] border border-white/20 hover:border-white/50 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center whitespace-nowrap"
                >
                  {language === 'tr' ? "CV'm" : "My CV"}
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: 2x2 Statistics Grid */}
          <div className="lg:col-span-5 w-full">
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5 w-full">
                
                {/* Stat 1: Staj Deneyimi */}
                <button
                  onClick={() => handleScrollTo('resume')}
                  className="group rounded-xl py-3 sm:py-3.5 px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-[#08090D]/80 hover:bg-[#08090D]/95 border border-white/10 hover:border-white/25 backdrop-blur-md min-h-[82px] sm:min-h-[94px] w-full shadow-sm hover:shadow-xl hover:shadow-black/50"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-0.5">
                    3+
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-gray-200 transition-colors">
                    {language === 'tr' ? "Staj Deneyimi" : "Internships"}
                  </span>
                </button>

                {/* Stat 2: Freelance Proje */}
                <button
                  onClick={() => handleScrollTo('projects')}
                  className="group rounded-xl py-3 sm:py-3.5 px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-[#08090D]/80 hover:bg-[#08090D]/95 border border-white/10 hover:border-white/25 backdrop-blur-md min-h-[82px] sm:min-h-[94px] w-full shadow-sm hover:shadow-xl hover:shadow-black/50"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-0.5">
                    1
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-gray-200 transition-colors">
                    {language === 'tr' ? "Freelance Proje" : "Freelance Job"}
                  </span>
                </button>

                {/* Stat 3: Tamamlanan Proje */}
                <button
                  onClick={() => handleScrollTo('projects')}
                  className="group rounded-xl py-3 sm:py-3.5 px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-[#08090D]/80 hover:bg-[#08090D]/95 border border-white/10 hover:border-white/25 backdrop-blur-md min-h-[82px] sm:min-h-[94px] w-full shadow-sm hover:shadow-xl hover:shadow-black/50"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-0.5">
                    6
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-gray-200 transition-colors">
                    {language === 'tr' ? "Tamamlanan Proje" : "Completed Projects"}
                  </span>
                </button>

                {/* Stat 4: GitHub Reposu */}
                <a
                  href="https://github.com/uygar-gormez28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl py-3 sm:py-3.5 px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-[#08090D]/80 hover:bg-[#08090D]/95 border border-white/10 hover:border-white/25 backdrop-blur-md min-h-[82px] sm:min-h-[94px] w-full shadow-sm hover:shadow-xl hover:shadow-black/50"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-0.5">
                    50+
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-gray-200 transition-colors">
                    {language === 'tr' ? "GitHub Reposu" : "GitHub Repos"}
                  </span>
                </a>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
