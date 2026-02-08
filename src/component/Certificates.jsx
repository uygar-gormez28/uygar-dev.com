import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const events = [
  {
    id: "agentcon-istanbul",
    title: "AgentCon Istanbul",
    organization: "Global AI Community",
    date: "7 February 2026",
    location: "Nişantaşı Üniversitesi NeoTech Kampüs",
    description: "Yapay zeka ajanları ve otonom sistemler üzerine düzenlenen uluslararası konferans. Sektörün önde gelen isimleri ile networking fırsatı ve teknik oturumlar.",
    image: "/img/etkinlik.png", 
    type: "event",
    detailedDescription: "AgentCon Istanbul, yapay zeka ve otonom sistemler dünyasındaki son gelişmeleri ele alan, Türkiye'nin en kapsamlı AI etkinliklerinden biridir. Konferansta, sektör liderleri ve uzman yazılımcılar bir araya gelerek geleceğin teknolojilerini tartıştık. Etkinlik boyunca çeşitli atölye çalışmaları ve sunumlara katılarak edge computing, AI agents ve LLM uygulamaları hakkında derinlemesine bilgi edindim."
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Etkinlikler
            </span>
          </h2>
          <p className="text-gray-400">Katıldığım teknoloji etkinlikleri ve konferanslar</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {events.map((event) => (
            <Link to={`/event/${event.id}`} key={event.id} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 block">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50935339?q=80&w=1000&auto=format&fit=crop'; 
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300 backdrop-blur-md">
                    {event.date}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{event.title}</h4>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <p className="text-gray-400 text-sm line-clamp-3">{event.description}</p>
                <div className="mt-4 text-purple-400 text-sm font-medium flex items-center gap-1">
                  Detayları İncele &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { events }; 
export default Certificates;
