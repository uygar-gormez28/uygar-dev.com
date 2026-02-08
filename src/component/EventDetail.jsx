import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, X } from 'lucide-react';
import { events } from './Certificates'; 

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Etkinlik bulunamadı
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-outfit pb-20">
      {/* Hero Image Background */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-4 md:left-8 z-20">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-colors border border-white/10 hover:bg-black/60">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 shadow-2xl">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {event.title}
                </h1>
                <p className="text-xl text-gray-300 font-medium">{event.organization}</p>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 px-5 py-2 rounded-xl text-purple-300 font-bold whitespace-nowrap">
                {event.date}
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5 text-purple-500" />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-300 leading-loose text-lg whitespace-pre-line text-left md:text-center">
                {event.detailedDescription || event.description}
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          {event.gallery && event.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Etkinlik Görselleri
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {event.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${event.title} - ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Büyütülmüş görsel"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default EventDetail;
