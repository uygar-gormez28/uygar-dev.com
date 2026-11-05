import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from "./FadeIn";
import { useLanguage } from '../context/LanguageContext';
import { events } from '../data/events';

const formatDate = (date, lang) => {
  if (!date) return '';
  if (typeof date === 'object') return date[lang] || date.en || '';
  if (lang === 'tr') {
    return date
      .replace('February', 'Şubat')
      .replace('October', 'Ekim')
      .replace('January', 'Ocak')
      .replace('March', 'Mart')
      .replace('April', 'Nisan')
      .replace('May', 'Mayıs')
      .replace('June', 'Haziran')
      .replace('July', 'Temmuz')
      .replace('August', 'Ağustos')
      .replace('September', 'Eylül')
      .replace('November', 'Kasım')
      .replace('December', 'Aralık');
  }
  return date;
};

const Certificates = () => {
  const { language } = useLanguage();

  return (
    <section id="certificates" className="py-20 px-4 bg-bg-primary relative border-t border-white/[0.04]">
      <div className="max-w-container mx-auto">
        
        {/* Section Heading - Clean without eyebrow label */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              <span className="text-gradient">
                {language === 'tr' ? "Katıldığım Etkinlikler" : "Attended Events"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <FadeIn key={event.id} delay={index * 150} className="h-full">
              <article className="group h-full flex flex-col rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden shadow-xl">
                
                {/* Event Cover Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-bg-surface border-b border-white/[0.06]">
                  <img 
                    src={event.image} 
                    alt={event.title[language]} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50935339?q=80&w=1000&auto=format&fit=crop'; 
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1016] via-transparent to-transparent opacity-60" />

                  {/* Organization Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#08090D]/85 backdrop-blur-md text-white border border-white/10 shadow-sm">
                      {event.organization}
                    </span>
                  </div>
                </div>
                
                {/* Event Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <div className="text-xs text-content-secondary mb-3">
                    <span>{formatDate(event.date, language)}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors mb-2.5">
                    {event.title[language]}
                  </h3>
                  
                  <div className="text-xs text-content-secondary mb-4 font-medium">
                    {event.location[language]}
                  </div>

                  <p className="text-content-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                    {event.description[language]}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      to={`/event/${event.id}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                    >
                      <span>{language === 'tr' ? "Detayları & Notları Oku" : "Read Notes & Details"}</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
