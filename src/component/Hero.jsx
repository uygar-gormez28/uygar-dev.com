import React, { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const ROLES = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "TypeScript Enthusiast",
  "Web Systems Builder"
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const { language } = useLanguage();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleTyping = () => {
      const currentRoleIndex = loopNum % ROLES.length;
      const currentFullText = ROLES[currentRoleIndex];

      if (!isDeleting) {
        const nextText = currentFullText.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
        setTypingSpeed(70);

        if (nextText === currentFullText) {
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        const nextText = currentFullText.substring(0, displayedText.length - 1);
        setDisplayedText(nextText);
        setTypingSpeed(35);

        if (nextText === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setTypingSpeed(250);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center pt-24 pb-14 px-4 overflow-hidden">
      {/* Matrix / Neo Background with Enhanced Visibility & Clarity */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-90"
        style={{
          backgroundImage: "url('/img/Matrix.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px) brightness(0.65) contrast(1.1)",
          transform: "scale(1.04)",
        }}
      />
      {/* Localized radial gradient centered behind the text for crisp readability */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(8,9,13,0.7)_0%,rgba(8,9,13,0.35)_55%,transparent_85%)] pointer-events-none" />
      {/* Top navbar blend & smooth fade to page dark background (#08090D) at bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#08090D]/50 via-transparent to-[#08090D] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Main Heading */}
        <FadeIn delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            {language === 'tr' ? "Merhaba, Ben" : "Hello, I'm"}{" "}
            <span className="text-gradient inline-block">
              Uygar Görmez
            </span>
          </h1>
        </FadeIn>

        {/* Dynamic Typing Title */}
        <FadeIn delay={200}>
          <div className="h-9 sm:h-11 flex items-center justify-center gap-1.5 mb-6">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-content-primary">
              {displayedText}
            </span>
            <span className="w-[3px] h-6 sm:h-7 bg-purple-400 animate-pulse rounded-full" />
          </div>
        </FadeIn>

        {/* Supporting Description */}
        <FadeIn delay={300}>
          <p className="text-content-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {language === 'tr' 
              ? "Modern web uygulamaları geliştiriyor, kullanıcı deneyimini güçlü yazılım altyapılarıyla birleştiriyorum."
              : "I develop modern web applications, combining user experience with robust software foundations."}
          </p>
        </FadeIn>

        {/* Compact, Clean Typography Buttons */}
        <FadeIn delay={400}>
          <div className="flex flex-row flex-wrap gap-3.5 justify-center items-center w-full max-w-md mx-auto mb-14">
            {/* Primary Action Button */}
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center cursor-pointer whitespace-nowrap"
            >
              {language === 'tr' ? "Projelerimi İncele" : "Explore Projects"}
            </button>

            {/* Secondary CV Button */}
            <a
              href="/cv/Uygar_Gormez_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-content-primary bg-white/[0.04] hover:bg-white/[0.1] border border-white/20 hover:border-white/50 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center whitespace-nowrap"
            >
              {language === 'tr' ? "CV'mi Görüntüle" : "View CV"}
            </a>
          </div>
        </FadeIn>

        {/* Statistics Metric Cards */}
        <FadeIn delay={500}>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-white/[0.08]">
            
            {/* Stat 1: Staj */}
            <button
              onClick={() => handleScrollTo('resume')}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-200 text-center flex flex-col items-center group cursor-pointer"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all mb-1">
                3+
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-content-secondary group-hover:text-white transition-colors">
                {language === 'tr' ? "Staj Deneyimi" : "Internships"}
              </span>
            </button>

            {/* Stat 2: Freelance */}
            <button
              onClick={() => handleScrollTo('projects')}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-200 text-center flex flex-col items-center group cursor-pointer"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all mb-1">
                1
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-content-secondary group-hover:text-white transition-colors">
                {language === 'tr' ? "Freelance Proje" : "Freelance Job"}
              </span>
            </button>

            {/* Stat 3: Tamamlanan Proje */}
            <button
              onClick={() => handleScrollTo('projects')}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-200 text-center flex flex-col items-center group cursor-pointer"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all mb-1">
                6
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-content-secondary group-hover:text-white transition-colors">
                {language === 'tr' ? "Tamamlanan Proje" : "Completed Projects"}
              </span>
            </button>

            {/* Stat 4: GitHub */}
            <a
              href="https://github.com/uygar-gormez28"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-200 text-center flex flex-col items-center group"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all mb-1">
                50+
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-content-secondary group-hover:text-white transition-colors">
                {language === 'tr' ? "GitHub Reposu" : "GitHub Repos"}
              </span>
            </a>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Hero;
