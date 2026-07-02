import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const { language } = useLanguage();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // offset to account for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRoleIndex = loopNum % roles.length;
      const currentFullText = roles[currentRoleIndex];

      if (!isDeleting) {
        const nextText = currentFullText.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
        setTypingSpeed(80);

        if (nextText === currentFullText) {
          setTypingSpeed(1200);
          setIsDeleting(true);
        }
      } else {
        const nextText = currentFullText.substring(0, displayedText.length - 1);
        setDisplayedText(nextText);
        setTypingSpeed(40);

        if (nextText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <div>
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img/Matrix.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px) brightness(0.4)",
            transform: "scale(1.1)",
          }}
        ></div>

        <div className="relative z-10 text-center px-4">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {language === 'tr' ? "Merhaba, Ben" : "Hello, I'm"}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
                Uygar Görmez
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="text-2xl md:text-3xl font-semibold mb-10 min-h-[40px] flex items-center justify-center gap-1">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
                {displayedText}
              </span>
              <span className="text-pink-500 animate-pulse font-bold">|</span>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* CV İndir Butonu */}
              <a
                href="/cv/Uygar_G%C3%B6rmez_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 ease-in-out text-center flex items-center justify-center gap-2"
              >
                {language === 'tr' ? "Portfolyo & CV" : "Portfolio & CV"}
              </a>

              {/* İletişim Butonu */}
              <a
                href="#contact"
                className="px-10 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black hover:scale-110 hover:shadow-2xl hover:shadow-white/50 transition-all duration-500 ease-in-out text-center"
              >
                {language === 'tr' ? "İletişime Geç" : "Get in Touch"}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {/* 3+ Staj Deneyimi */}
              <button
                onClick={() => handleScrollTo('resume')}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  3+
                </span>
                <span className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold mt-2 group-hover:text-purple-400 transition-colors duration-300">
                  {language === 'tr' ? "Staj Deneyimi" : "Internships"}
                </span>
              </button>

              {/* 1 Freelance İş */}
              <button
                onClick={() => handleScrollTo('conlaysjcrown')}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  1
                </span>
                <span className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold mt-2 group-hover:text-purple-400 transition-colors duration-300">
                  {language === 'tr' ? "Freelance İş" : "Freelance Job"}
                </span>
              </button>

              {/* 4 Tamamlanan Proje */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  4
                </span>
                <span className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold mt-2 group-hover:text-purple-400 transition-colors duration-300">
                  {language === 'tr' ? "Tamamlanan Proje" : "Completed Projects"}
                </span>
              </button>

              {/* 50+ Github Repository */}
              <a
                href="https://github.com/uygar-gormez28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  50+
                </span>
                <span className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold mt-2 group-hover:text-purple-400 transition-colors duration-300">
                  {language === 'tr' ? "Github Repository" : "Github Repository"}
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Hero;
