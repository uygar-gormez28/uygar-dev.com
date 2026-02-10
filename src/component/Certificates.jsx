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
    gallery: [
      "/img/etkinlik.png",
      "/img/Ag-2.jpeg",
      "/img/Ag-4.jpeg",
      

     
    ],
    detailedDescription: `Bugün, yapay zeka dünyasında "üretmekten" öteye geçip, "harekete geçen" otonom sistemlerin konuşulduğu AgentCon İstanbul etkinliğindeydim!

Benim için sadece teknik bir konferans değil, aynı zamanda üniversite hayatımın bu son döneminde mezun olmaya giderken arkadaşlarımla beraber geleceğin teknolojilerine kafa yorduğum güzel bir deneyim oldu.

Microsoft ekibinden uzmanların ve sektörün öncü isimlerinin paylaştığı vizyoner bakış açılarını dinlemek fazlasıyla aydınlatıcıydı. Etkinlik boyunca özellikle şu teknik dikeyleri derinlemesine inceleme şansı buldum:

• Agentic RAG & Knowledge: Bilginin sadece statik bir şekilde getirilmediği, ajanlar aracılığıyla akıllıca işlendiği yeni nesil yapılar (Azure AI Search ve RAG entegrasyonları).

• Tool Calling Mekanizmaları: LLM'lerin dış dünya ile nasıl güvenli, tutarlı ve gerçek zamanlı iletişim kurabildiğinin pratik örnekleri.

• Güvenlik ve Protokoller: OWASP risklerinden Model Bağlam Protokolü (MCP) gibi yeni nesil standartlara kadar, otonom sistemlerin dayanıklılığı ve güvenliği.

Üniversite yıllarıma veda ederken, teorik bilgiyi gerçek dünya problemlerine dönüştüren profesyonellerle bir araya gelmek ve yeni bağlantılar kurmak paha biçilemez bir motivasyon kaynağı oldu.

Bu değerli organizasyon için Global AI Community ekibine ve ufkumuzu açan tüm konuşmacılara Stephen SIMON Dona Sarkar teşekkürler!`
  },
  {
    id: "19 İstanbul Bilişim Kongresi",
    title: "19 İstanbul Bilişim Kongresi",
    organization: "İstanbul Bilişim Derneği",
    date: "16 October 2025",
    location: "Nişantaşı Üniversitesi NeoTech Kampüs",
    description: "Bu yıl 19. İstanbul Bilişim Kongresi'nde Logo Yazılım ,ULAK gibi bir çok yazılım firmasının katıldığı etkinlikte  Sektörden bir çok bilgi kişi ile bir araya gelerek yeni teknolojilerden konuşmalarını dinledim",
    image: "/img/Kongre-1.jpeg", 
    type: "event",
    gallery: [
     "/img/Kongre-4.jpeg",
      "/img/Kongre-2.jpeg",
      "/img/Kongre-3.jpeg",


     
    ],
    detailedDescription: `Nişantaşı Üniversitesi'nde düzenlenen 19. İstanbul Bilişim Kongresi’nde, hem sektörün öncüleriyle bir araya gelme hem de üzerinde çalıştığımız bitirme projemizi sergileme fırsatı bulduk! 

Etkinlik boyunca Logo Yazılım ve ULAK Haberleşme gibi değerli kurumların temsilcileriyle tanışarak gelecek teknolojileri üzerine sohbet etme ve network kurma şansı yakaladım. Benim için sadece bir kongre değil, üniversite hayatımın bu son döneminde teorik bilgilerimi sektör profesyonellerine aktarabildiğim harika bir deneyim oldu.

Ayrıca ekip arkadaşlarımla birlikte büyük bir emekle geliştirdiğimiz "Nika" projemizi standımızda sergilemek ve gelen geri bildirimleri dinlemek paha biçilemezdi. Projemize ilgi gösteren ve vizyonumuza ortak olan herkese teşekkürler!`
  }


];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Katıldığım Etkinlikler
            </span>
          </h2>
          <p className="text-gray-400">Teknoloji etkinlikleri ve konferanslar</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event) => (
            <Link to={`/event/${event.id}`} key={event.id} className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/50 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 block shadow-lg hover:shadow-purple-500/30">
              {/* Görsel Alanı - Full width, belirgin */}
              <div className="w-full h-56 overflow-hidden relative">
                 <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50935339?q=80&w=1000&auto=format&fit=crop'; 
                  }}
                />
              </div>
              
              <div className="p-5">
                <h4 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 tracking-tight">{event.title}</h4>
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                  <MapPin className="w-3 h-3" />
                  {event.location}
                </div>
                <p className="text-gray-300 text-sm font-light leading-relaxed line-clamp-4 mb-6">{event.description}</p>
                
                <div className="flex justify-between items-center mt-3 border-t border-white/10 pt-3">
                   <div className="text-purple-400 text-xs font-medium flex items-center gap-1">
                    Detayları İncele &rarr;
                   </div>
                   <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">
                    {event.date}
                  </span>
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
