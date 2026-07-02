import React, { useState } from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const { language } = useLanguage();

  const techCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Supabase", "PostgreSQL"],
    },
    {
      title: "Mobile",
      skills: ["React Native", "Expo"],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Vercel"],
    },
  ];

  const certificates = [
    {
      name: "Claude 101",
      image: "/sertifika/claude-101.png"
    },
    {
      name: "Model Context Protocol: Advanced Topics",
      image: "/sertifika/mcp-advanced.png"
    },
    {
      name: "Introduction to Agent Skills",
      image: "/sertifika/agent-skills.png"
    },
    {
      name: "AI Fluency for Educators",
      image: "/sertifika/ai-fluency.png"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-black px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Başlık */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {language === 'tr' ? "Hakkımda" : "About Me"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Section 1: Hakkımda Akışı */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12 md:grid-cols-5 items-center">
            {/* Sol Kolon (%60 -> 3/5 cols) */}
            <div className="md:col-span-3">
              <FadeIn delay={100}>
                <div className="space-y-6 leading-relaxed text-gray-300 text-base md:text-lg font-light">
                  {language === 'tr' ? (
                    <>
                      <p>
                        Bilgisayar Mühendisliği mezunuyum. Eğitim sürecimi akademik teorilerle sınırlı tutmayıp, üç farklı staj deneyimiyle zenginleştirdim ve gerçek şirket projelerinde aktif geliştirici olarak rol aldım.
                      </p>
                      <p>
                        Son olarak Max Potential bünyesinde çalıştım. Eczacıbaşı Geleceğe Smaç Programı kapsamında hayata geçirilen Certifi LMS projesinin hem frontend hem de backend süreçlerinde görev alarak Next.js, React, TypeScript ve Supabase ekosisteminde üretim yaptım.
                      </p>
                      <p>
                        Kendimi sürekli geliştirmeyi ve yeni teknolojiler öğrenmeyi bir alışkanlık olarak görüyorum. Kariyerime, uçtan uca çözümler üretmekten keyif aldığım Full Stack Developer pozisyonunda devam etmeyi hedefliyorum.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        I am a Computer Engineering graduate. Rather than limiting my education to academic theories, I enriched it with three distinct internship experiences and worked as an active developer on real company projects.
                      </p>
                      <p>
                        Most recently, I worked at Max Potential. I took part in both frontend and backend development of the Certifi LMS project built for the Eczacıbaşı Geleceğe Smaç Program, producing within the Next.js, React, TypeScript, and Supabase ecosystem.
                      </p>
                      <p>
                        I consider continuous self-improvement and learning new technologies a habit. I aim to continue my career as a Full Stack Developer, where I thoroughly enjoy building end-to-end solutions.
                      </p>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Sağ Kolon (%40 -> 2/5 cols) */}
            <div className="md:col-span-2 flex flex-col items-center justify-center">
              <FadeIn delay={200}>
                <div className="flex flex-col items-center">
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="group relative cursor-zoom-in"
                  >
                    <div className="h-56 w-56 overflow-hidden rounded-full border-2 border-purple-500/20 shadow-xl shadow-blue-500/5 transition-all duration-500 hover:scale-105 hover:border-blue-500/30">
                      <img
                        src="/img/PP.jpeg"
                        alt="Uygar Görmez"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Very subtle glow */}
                    <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-lg"></div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Uygar Görmez</h3>
                    <p className="text-sm bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold mt-1 uppercase tracking-widest">Full Stack Developer</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Alt Kısım: Teknik Yetkinlikler */}
          <div className="mt-8 pt-8">
            <FadeIn delay={300}>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
                {language === 'tr' ? "Teknik Yetkinlikler" : "Technical Skills"}
              </h3>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {techCategories.map((category) => (
                  <div 
                    key={category.title} 
                    className="flex flex-col p-[18px] bg-white/5 border border-purple-500/10 hover:border-purple-500/30 rounded-2xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(168,85,247,0.08)] h-full"
                  >
                    <h4 className="text-sm font-bold tracking-[0.08em] uppercase bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2.5">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-x-3.5 gap-y-2">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="flex items-center gap-1.5 text-xs text-white/95 font-medium"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0"></span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sertifikalar */}
              <div className="mt-12 pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
                  {language === 'tr' ? "Sertifikalar" : "Certificates"}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {certificates.map((cert) => (
                    <button
                      key={cert.name}
                      onClick={() => setSelectedCert(cert)}
                      className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)] text-left group w-full"
                    >
                      <div className="h-2 w-2 rounded-full bg-purple-500 group-hover:scale-125 group-hover:bg-purple-400 transition-all duration-300 shrink-0"></div>
                      <span className="text-white/80 group-hover:text-purple-300 transition-colors font-medium text-sm leading-snug">
                        {cert.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-zoom-out transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-[85vw] h-[85vw] max-w-[480px] max-h-[480px] overflow-hidden rounded-full border-4 border-purple-500/30 shadow-2xl shadow-blue-500/20">
            <img 
              src="/img/PP.jpeg" 
              alt="Uygar Görmez" 
              className="w-full h-full object-cover select-none"
            />
          </div>
        </div>
      )}

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out p-4 transition-all"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[85vh] bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 transition-colors border border-white/10"
              onClick={() => setSelectedCert(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedCert.image} 
              alt={selectedCert.name} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-xl"
            />
            <div className="text-center text-gray-300 py-3 font-medium text-sm border-t border-white/5 bg-black/30">
              {selectedCert.name}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
