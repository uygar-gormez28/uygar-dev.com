import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Share2 } from 'lucide-react';
import { events } from './Certificates'; 

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Etkinlik bulunamadı
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-outfit">
      {/* Hero Image Background */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-4 md:left-8 z-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-20 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {event.title}
                </h1>
                <p className="text-xl text-gray-300 font-medium">{event.organization}</p>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-xl text-purple-300 font-bold">
                {event.date}
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <MapPin className="w-5 h-5 text-purple-500" />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  Etkinlik Hakkında
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {event.detailedDescription || event.description}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4">Paylaş</h3>
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all cursor-pointer">
                  <Share2 className="w-5 h-5" />
                  <span>Etkinliği Paylaş</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
