import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#101116]/80 hover:bg-purple-600 text-white border border-white/10 hover:border-purple-400 backdrop-blur-md shadow-xl hover:shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-base font-semibold"
      aria-label={language === 'tr' ? "Yukarı Kaydır" : "Scroll to Top"}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
