import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
              Uygar Görmez
            </span>
            {language === 'tr' ? ". Tüm hakları saklıdır." : ". All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
