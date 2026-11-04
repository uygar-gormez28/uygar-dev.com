import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { language, toggleLanguage } = useLanguage();

  const navLinks = useMemo(() => {
    return language === 'tr' ? [
      { name: 'Ana Sayfa', href: '#home' },
      { name: 'Hakkımda', href: '#about' },
      { name: 'Projeler', href: '#projects' },
      { name: 'Özgeçmiş', href: '#resume' },
      { name: 'Referanslar', href: '#references' },
      { name: 'Etkinlikler', href: '#certificates' },
      { name: 'Blog', href: '#blog' },
      { name: 'İletişim', href: '#contact' },
    ] : [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Resume', href: '#resume' },
      { name: 'References', href: '#references' },
      { name: 'Events', href: '#certificates' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' },
    ];
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      if (window.scrollY < 100) {
        setActiveSection('#home');
      } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('#contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const isAtTop = window.scrollY < 100;
          const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

          if (!isAtTop && !isAtBottom) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navLinks]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(href);

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#08090D]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo / Simple authentic branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-heading font-semibold text-lg sm:text-xl tracking-tight text-white hover:text-purple-300 transition-colors cursor-pointer"
          >
            uygar<span className="text-purple-400">.dev</span>
          </a>

          {/* Desktop Navigation Links with minimal underline indicator */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-1 text-sm font-medium transition-colors relative group ${isActive
                    ? 'text-white font-semibold'
                    : 'text-content-secondary hover:text-white'
                    }`}
                >
                  {link.name}
                  {/* Underline indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Area: Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              aria-label={language === 'tr' ? "Switch to English" : "Türkçe diline geç"}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 text-content-secondary hover:text-white hover:border-white/25 transition-all bg-white/[0.03] backdrop-blur-md flex items-center gap-1.5 shadow-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-purple-500/50 cursor-pointer"
            >
              <span className={language === 'tr' ? 'text-blue-400 font-bold' : 'text-gray-500'}>TR</span>
              <span className="text-gray-600 text-[10px]">/</span>
              <span className={language === 'en' ? 'text-purple-400 font-bold' : 'text-gray-500'}>EN</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden text-content-secondary hover:text-white p-2 hover:bg-white/10 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 cursor-pointer flex items-center justify-center w-9 h-9 text-lg"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/[0.08] bg-[#0A0C12]/95 backdrop-blur-2xl rounded-2xl mb-4 px-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${isActive
                      ? 'text-white bg-white/[0.1] font-semibold text-purple-300'
                      : 'text-content-secondary hover:text-white hover:bg-white/[0.04]'
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
