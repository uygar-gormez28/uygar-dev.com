import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';
import { useLanguage } from '../context/LanguageContext';

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id || decodeURIComponent(id) === e.id || e.id === id.replace(/ /g, '-'));
  const [selectedImage, setSelectedImage] = useState(null);
  const { language } = useLanguage();

  if (!event) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-3xl font-bold font-heading mb-4">
          {language === 'tr' ? "Etkinlik Bulunamadı" : "Event Not Found"}
        </h1>
        <p className="text-content-secondary mb-6">
          {language === 'tr' ? "Aradığınız etkinlik mevcut değil." : "The event you are looking for does not exist."}
        </p>
        <Link 
          to="/" 
          className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all"
        >
          {language === 'tr' ? "Ana Sayfaya Dön" : "Back to Home"}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-content-primary pb-24 antialiased">
      {/* Hero Image Background */}
      <div className="relative h-[48vh] sm:h-[55vh] w-full overflow-hidden bg-bg-surface border-b border-white/[0.08]">
        <img 
          src={event.image} 
          alt={event.title[language]} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
        
        {/* Back Link */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white bg-[#08090D]/80 backdrop-blur-md px-4 py-2 rounded-full transition-all border border-white/10 hover:border-white/25 shadow-lg"
          >
            <span>←</span>
            <span>{language === 'tr' ? "Ana Sayfaya Dön" : "Back to Home"}</span>
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 -mt-24 relative z-20">
        
        {/* Header Card */}
        <div className="bg-[#101116]/90 backdrop-blur-xl border border-white/[0.1] rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">
                {event.organization}
              </span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
              <span>{event.date}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            {event.title[language]}
          </h1>

          <div className="text-sm text-content-secondary font-medium">
            {event.location[language]}
          </div>
        </div>

        {/* Narrative & Details */}
        <div className="bg-[#101116]/60 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 sm:p-10 mb-10 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-6">
            {language === 'tr' ? "Etkinlik Özeti & İzlenimler" : "Event Summary & Insights"}
          </h2>
          
          <div className="text-content-secondary leading-relaxed text-base sm:text-lg space-y-6 whitespace-pre-line font-normal">
            {(event.detailedDescription && event.detailedDescription[language]) || (event.description && event.description[language])}
          </div>
        </div>

        {/* Image Gallery */}
        {event.gallery && event.gallery.length > 0 && (
          <div className="bg-[#101116]/60 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold font-heading text-white mb-6">
              {language === 'tr' ? "Etkinlikten Kareler" : "Event Photos"}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {event.gallery.map((img, index) => (
                <div 
                  key={index} 
                  className="group relative h-48 overflow-hidden rounded-xl border border-white/[0.08] hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${event.title[language]} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-sm text-white border border-white/20">
                      {language === 'tr' ? "Büyüt" : "View"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            aria-label="Kapat"
            className="absolute top-4 right-4 text-white hover:text-purple-400 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center cursor-pointer text-base font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Etkinlik görseli"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default EventDetail;
