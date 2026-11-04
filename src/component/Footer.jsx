import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-primary border-t border-white/[0.06] py-10 px-4">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleScrollToTop}
              className="text-left font-heading font-semibold text-white hover:text-purple-300 transition-colors cursor-pointer"
            >
              uygar<span className="text-purple-400">.dev</span>
            </button>
            <span className="text-content-muted text-xs">•</span>
            <span className="text-xs text-content-secondary">
              Full Stack Developer
            </span>
          </div>

          <p className="text-content-secondary text-xs sm:text-sm">
            © {currentYear}{" "}
            <span className="text-white font-medium">Uygar Görmez</span>
            {language === 'tr' ? ". Tüm hakları saklıdır." : ". All rights reserved."}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
