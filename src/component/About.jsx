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
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      title: "Backend",
      skills: ["C#", "Supabase", "PostgreSQL", "Python", "REST APIs"],
    },
    {
      title: "Mobile",
      skills: ["React Native", "Expo"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git & GitHub", "Vercel", "Linux", "KNIME"],
    },
  ];

  const certificates = [
    {
      name: "Claude 101",
      issuer: "Anthropic",
      image: "/sertifika/claude-101.png"
    },
    {
      name: "Model Context Protocol: Advanced Topics",
      issuer: "Anthropic",
      image: "/sertifika/mcp-advanced.png"
    },
    {
      name: "Introduction to Agent Skills",
      issuer: "DeepLearning.AI",
      image: "/sertifika/agent-skills.png"
    },
    {
      name: "AI Fluency for Educators",
      issuer: "Anthropic",
      image: "/sertifika/ai-fluency.png"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-bg-primary relative border-t border-white/[0.04]">
      <div className="max-w-container mx-auto">
        
        {/* Section Heading */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              <span className="text-gradient">
                {language === 'tr' ? "Hakkımda" : "About Me"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Section 1: Bio & Portrait Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16 max-w-5xl mx-auto">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={100}>
              <div className="space-y-4 text-content-secondary text-base sm:text-lg leading-relaxed font-normal">
                {language === 'tr' ? (
                  <>
                    <p>
                      Bilgisayar Mühendisliği mezunuyum. Eğitim sürecimi sadece akademik teorilerle sınırlı tutmayıp, üç farklı staj deneyimiyle zenginleştirdim ve gerçek şirket projelerinde aktif geliştirici olarak rol aldım.
                    </p>
                    <p>
                      Son olarak <span className="text-white font-medium">Max Potential</span> bünyesinde çalıştım. Eczacıbaşı Geleceğe Smaç Programı kapsamında hayata geçirilen <span className="text-white font-medium">Certifi LMS</span> projesinin hem frontend hem de backend süreçlerinde görev alarak Next.js, React, TypeScript ve Supabase ekosisteminde üretim yaptım.
                    </p>
                    <p>
                      Kendimi sürekli geliştirmeyi ve yeni teknolojiler öğrenmeyi bir alışkanlık olarak görüyorum. Kariyerime, kullanıcı deneyimini sağlam mühendislik mimarileriyle buluşturduğum <span className="text-purple-300 font-medium">Full Stack Developer</span> pozisyonunda devam etmeyi hedefliyorum.
                    </p>
                    <p className="text-content-secondary/90 italic pt-1">
                      Yazılım geliştirmenin dışında kitap okumayı ve okuduklarım üzerine incelemeler yazmayı seviyorum.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      I am a Computer Engineering graduate. Rather than limiting my education to academic theories, I enriched it with three distinct internship experiences, actively participating as a developer on production-grade systems.
                    </p>
                    <p>
                      Most recently, I worked at <span className="text-white font-medium">Max Potential</span>, taking part in both frontend and backend development of the <span className="text-white font-medium">Certifi LMS</span> platform built for the Eczacıbaşı Geleceğe Smaç Program using Next.js, React, TypeScript, and Supabase.
                    </p>
                    <p>
                      I view continuous self-improvement and learning emerging technologies as a core discipline. I aim to continue my career as a <span className="text-purple-300 font-medium">Full Stack Developer</span>, bridging delightful user interfaces with dependable software architectures.
                    </p>
                    <p className="text-content-secondary/90 italic pt-1">
                      Outside of software development, I enjoy reading books and writing reviews on what I read.
                    </p>
                  </>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <FadeIn delay={200}>
              <div className="flex flex-col items-center">
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative cursor-pointer"
                  title={language === 'tr' ? "Fotoğrafı büyüt" : "Expand photo"}
                >
                  {/* Subtle backlight aura */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  <div className="h-52 w-52 sm:h-60 sm:w-60 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-purple-400/60 shadow-2xl transition-all duration-300 relative">
                    <img
                      src="/img/PP.jpeg"
                      alt="Uygar Görmez"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-2xl font-bold font-heading text-white">Uygar Görmez</h3>
                  <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mt-1.5">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Section 2: Technical Skills Grid */}
        <div className="pt-8 border-t border-white/[0.06] max-w-5xl mx-auto">
          <FadeIn delay={250}>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {language === 'tr' ? "Teknik Yetkinlikler" : "Technical Skills"}
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {techCategories.map((category) => (
                <div 
                  key={category.title} 
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-200 flex flex-col h-full hover:bg-white/[0.04]"
                >
                  <div className="mb-3 pb-2.5 border-b border-white/[0.06]">
                    <h4 className="text-xs font-bold tracking-wider uppercase text-white">
                      {category.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-content-primary border border-white/[0.06] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Section 3: Professional Certificates Grid */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] max-w-5xl mx-auto">
          <FadeIn delay={300}>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {language === 'tr' ? "Sertifikalar" : "Certificates"}
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certificates.map((cert) => (
                <button
                  key={cert.name}
                  onClick={() => setSelectedCert(cert)}
                  className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/60 transition-all duration-300 text-left group w-full cursor-pointer relative overflow-hidden min-h-[140px] shadow-sm hover:shadow-xl hover:shadow-purple-500/15"
                >
                  {/* Hover Certificate Image Background Preview */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0E1017]">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Foreground Content - Fades out smoothly on hover */}
                  <div className="relative z-10 flex flex-col justify-between h-full w-full transition-opacity duration-300 group-hover:opacity-0">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-purple-400 mb-1.5 block">
                        {cert.issuer}
                      </span>
                      <span className="text-content-primary font-semibold text-sm leading-snug block drop-shadow-sm">
                        {cert.name}
                      </span>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[11px] text-content-secondary font-medium">
                        {language === 'tr' ? "Görüntüle →" : "View Certificate →"}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>

      {/* Lightbox Modal: Profile Photo */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md cursor-zoom-out p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 overflow-hidden rounded-full border-4 border-purple-500/40 shadow-2xl animate-in zoom-in-95 duration-200">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#12131A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              aria-label="Kapat"
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors border border-white/15 cursor-pointer text-sm font-bold"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            <div className="overflow-auto flex items-center justify-center p-2">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name} 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center text-content-primary py-3 px-4 font-semibold text-sm border-t border-white/[0.08] bg-black/40">
              {selectedCert.name} — <span className="text-purple-400">{selectedCert.issuer}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
