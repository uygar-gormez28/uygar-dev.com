import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textToType = "Uygar Görmez";

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textToType;
      
      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        setTypingSpeed(150);
        
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        setTypingSpeed(100);
        
        if (displayedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Merhaba, Ben{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-medium mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
            Bilgisayar Mühendisi | Web Geliştirme & Veri Bilimi{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* CV İndir Butonu */}
            <a 
              href="/cv/Uygar_Gormez_CV.pdf"
              download
              className="px-10 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 ease-in-out text-center flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV İndir
            </a>

            {/* İletişim Butonu */}
            <a 
              href="#contact"
              className="px-10 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black hover:scale-110 hover:shadow-2xl hover:shadow-white/50 transition-all duration-500 ease-in-out text-center"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;