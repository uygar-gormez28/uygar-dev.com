import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from "./FadeIn";
import { useLanguage } from '../context/LanguageContext';

const events = [
  {
    id: "agentcon-istanbul",
    title: {
      tr: "AgentCon Istanbul",
      en: "AgentCon Istanbul"
    },
    organization: "Global AI Community",
    date: "7 February 2026",
    location: {
      tr: "Nişantaşı Üniversitesi NeoTech Kampüs",
      en: "Nişantaşı University NeoTech Campus"
    },
    description: {
      tr: "Yapay zeka ajanları ve otonom sistemler üzerine düzenlenen uluslararası konferans. Sektörün önde gelen isimleri ile networking fırsatı ve teknik oturumlar.",
      en: "An international conference on artificial intelligence agents and autonomous systems. Featuring networking opportunities with industry leaders and technical sessions."
    },
    image: "/img/etkinlik.png", 
    type: "event",
    gallery: [
      "/img/etkinlik.png",
      "/img/Ag-2.jpeg",
      "/img/Ag-4.jpeg",
    ],
    detailedDescription: {
      tr: `Bugün, yapay zeka dünyasında "üretmekten" öteye geçip, "harekete geçen" otonom sistemlerin konuşulduğu AgentCon İstanbul etkinliğindeydim!

Benim için sadece teknik bir konferans değil, aynı zamanda üniversite hayatımın bu son döneminde mezun olmaya giderken arkadaşlarımla beraber geleceğin teknolojilerine kafa yorduğum güzel bir deneyim oldu.

Microsoft ekibinden uzmanların ve sektörün öncü isimlerinin paylaştığı vizyoner bakış açılarını dinlemek fazlasıyla aydınlatıcıydı. Etkinlik boyunca özellikle şu teknik dikeyleri derinlemesine inceleme şansı buldum:

• Agentic RAG & Knowledge: Bilginin sadece statik bir şekilde getirilmediği, ajanlar aracılığıyla akıllıca işlendiği yeni nesil yapılar (Azure AI Search ve RAG entegrasyonları).

• Tool Calling Mekanizmaları: LLM'lerin dış dünya ile nasıl güvenli, tutarlı ve gerçek zamanlı iletişim kurabildiğinin pratik örnekleri.

• Güvenlik ve Protokoller: OWASP risklerinden Model Bağlam Protokolü (MCP) gibi yeni nesil standartlara kadar, otonom sistemlerin dayanıklılığı ve güvenliği.

Üniversite yıllarıma veda ederken, teorik bilgiyi gerçek dünya problemlerine dönüştüren profesyonellerle bir araya gelmek ve yeni bağlantılar kurmak paha biçilemez bir motivasyon kaynağı oldu.

Bu değerli organizasyon için Global AI Community ekibine ve ufkumuzu açan tüm konuşmacılara Stephen SIMON Dona Sarkar teşekkürler!`,
      en: `Today, I was at the AgentCon Istanbul event, where autonomous systems that "take action" rather than just "generate content" in the AI world were discussed!

For me, it was not only a technical conference, but also a great experience where I brainstormed about future technologies with my friends as I approach graduation in this final phase of my university life.

Listening to the visionary perspectives shared by experts from the Microsoft team and industry pioneers was highly enlightening. Throughout the event, I had the chance to examine the following technical verticals in depth:

• Agentic RAG & Knowledge: Next-generation architectures where information is not just statically retrieved, but processed intelligently via agents (Azure AI Search and RAG integrations).

• Tool Calling Mechanisms: Practical examples of how LLMs can communicate with the external world in a secure, consistent, and real-time manner.

• Security and Protocols: The resilience and safety of autonomous systems, ranging from OWASP risks to next-generation standards like the Model Context Protocol (MCP).

As I say goodbye to my university years, gathering and networking with professionals who translate theoretical knowledge into real-world solutions has been a priceless source of motivation.

Thank you to the Global AI Community team for this valuable organization, and to all the speakers who broadened our horizons, including Stephen SIMON and Dona Sarkar!`
    }
  },
  {
    id: "19 İstanbul Bilişim Kongresi",
    title: {
      tr: "19. İstanbul Bilişim Kongresi",
      en: "19th Istanbul Informatics Congress"
    },
    organization: "İstanbul Bilişim Derneği",
    date: "16 October 2025",
    location: {
      tr: "Nişantaşı Üniversitesi NeoTech Kampüs",
      en: "Nişantaşı University NeoTech Campus"
    },
    description: {
      tr: "Bu yıl 19. İstanbul Bilişim Kongresi'nde Logo Yazılım, ULAK gibi birçok yazılım firmasının katıldığı etkinlikte sektörden birçok bilgi kişi ile bir araya gelerek yeni teknolojilerden konuşmalarını dinledim.",
      en: "Attended the 19th Istanbul Informatics Congress, which brought together many software companies like Logo Software and ULAK. I listened to industry experts discuss emerging technologies."
    },
    image: "/img/Kongre-1.jpeg", 
    type: "event",
    gallery: [
      "/img/Kongre-4.jpeg",
      "/img/Kongre-2.jpeg",
      "/img/Kongre-3.jpeg",
    ],
    detailedDescription: {
      tr: `Nişantaşı Üniversitesi'nde düzenlenen 19. İstanbul Bilişim Kongresi’nde, hem sektörün öncüleriyle bir araya gelme hem de üzerinde çalıştığımız bitirme projemizi sergileme fırsatı bulduk! 

Etkinlik boyunca Logo Yazılım ve ULAK Haberleşme gibi değerli kurumların temsilcileriyle tanışarak gelecek teknolojileri üzerine sohbet etme ve network kurma şansı yakaladım. Benim için sadece bir kongre değil, üniversite hayatımın bu son döneminde teorik bilgilerimi sektör profesyonellerine aktarabildiğim harika bir deneyim oldu.

Ayrıca ekip arkadaşlarımla birlikte büyük bir emekle geliştirdiğimiz "Nika" projemizi standımızda sergilemek ve gelen geri bildirimleri dinlemek paha biçilemezdi. Projemize ilgi gösteren ve vizyonumuza ortak olan herkese teşekkürler!`,
      en: `At the 19th Istanbul Informatics Congress held at Nişantaşı University, we had the opportunity to meet industry pioneers and showcase our graduation project!

During the event, I had the chance to meet representatives from prestigious institutions like Logo Software and ULAK Communication, chat about future technologies, and build connections. For me, it was not just a congress, but a wonderful experience to present my theoretical knowledge to industry professionals in this final term of my university life.

Furthermore, presenting our project "Nika", which my teammates and I developed with great effort, at our booth and receiving direct feedback was invaluable. Thanks to everyone who showed interest in our project and shared our vision!`
    }
  }
];

const Certificates = () => {
  const { language } = useLanguage();

  return (
    <section id="certificates" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {language === 'tr' ? "Katıldığım Etkinlikler" : "Attended Events"}
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <FadeIn key={event.id} delay={index * 100} className="h-full">
              <Link to={`/event/${event.id}`} className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/50 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 block shadow-lg hover:shadow-purple-500/30 h-full">
                {/* Görsel Alanı - Full width */}
                <div className="w-full h-56 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title[language]} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50935339?q=80&w=1000&auto=format&fit=crop'; 
                    }}
                  />
                </div>
                
                <div className="p-5">
                  <h4 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 tracking-tight">
                    {event.title[language]}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                    <MapPin className="w-3 h-3" />
                    {event.location[language]}
                  </div>
                  <p className="text-gray-300 text-sm font-light leading-relaxed line-clamp-4 mb-6">
                    {event.description[language]}
                  </p>
                  
                  <div className="flex justify-between items-center mt-3 border-t border-white/10 pt-3">
                    <div className="text-purple-400 text-xs font-medium flex items-center gap-1">
                      {language === 'tr' ? "Detayları İncele →" : "View Details →"}
                    </div>
                    <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">
                      {event.date}
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { events }; 
export default Certificates;
