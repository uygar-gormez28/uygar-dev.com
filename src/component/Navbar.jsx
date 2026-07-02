import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { language, toggleLanguage } = useLanguage();

  const navLinks = language === 'tr' ? [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımda', href: '#about' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Özgeçmiş', href: '#resume' },
    { name: 'Etkinlikler', href: '#certificates' },
    { name: 'Blog', href: '#blog' },
    { name: 'İletişim', href: '#contact' },
  ] : [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Events', href: '#certificates' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Edge case: Top of the page
      if (window.scrollY < 80) {
        setActiveSection('#home');
      }
      // Edge case: Bottom of the page
      else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('#contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const isAtTop = window.scrollY < 80;
          const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
          
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
  }, [language]); // Re-observe when links change on language toggle

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(href);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button (Left on mobile, hidden on desktop) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Spacer to balance menu centering */}
          <div className="hidden md:block w-24"></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-gray-300 hover:text-white transition-colors relative group ${
                    isActive ? 'text-white font-medium' : ''
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Language Toggle (Right side on mobile and desktop) */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold border border-white/20 text-gray-300 hover:text-white hover:border-white transition-all bg-white/5 backdrop-blur-md cursor-pointer flex items-center gap-1 shadow-sm uppercase tracking-wider"
            >
              <span className={language === 'tr' ? 'text-blue-400 font-extrabold' : 'text-gray-500 font-medium'}>TR</span>
              <span className="text-gray-600">/</span>
              <span className={language === 'en' ? 'text-blue-400 font-extrabold' : 'text-gray-500 font-medium'}>EN</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black/90 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-3 px-4 transition-colors rounded-lg ${
                    isActive
                      ? 'text-white bg-white/10 font-medium'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
