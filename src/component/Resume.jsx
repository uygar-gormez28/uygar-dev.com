import React from "react";
import FadeIn from "./FadeIn";

const Resume = () => {
  const education = {
    school: "Nişantaşı Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    period: "2021 - 2026",
    location: "İstanbul, Türkiye",
    details: [
      <>
        İstanbul Nişantaşı Üniversitesi bünyesinde,{" "}
        <a
          href="/sertifika/B2%20Level.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/50 hover:decoration-blue-400 transition-all font-medium"
        >
          B2 Seviye İngilizce Hazırlık
        </a>{" "}
        eğitimini başarıyla tamamladım.
      </>,
      "Bilgisayar Mühendisliği lisans programından mezun oldum.",
    ],
  };

  const experience = [
    {
      company: "Lotus-AI Yapay Zeka ve Bilişim Çözümleri A.Ş.",
      position: "Software Stajyer",
      period: "Kas 2025 - Oca 2026",
      location: "Remote, Türkiye",
      duration: "3 ay",
      responsibilities: [
        "KNIME üzerinde veri işleme ve veri akışı (workflow) çalışmaları gerçekleştirdim.",
        "Python ile temel veri bilimi ve makine öğrenmesi uygulamaları geliştirdim.",
        "PostgreSQL ve DataFrame yapıları ile ETL süreçlerini deneyimledim.",
        "Matplotlib ile temel veri görselleştirme çalışmaları yaptım.",
        "5ML problemini farklı modeller ile çözüp görselleştirdim.",
        "Fitoterapi (bitkisel tedavi) ve yapay zekâ (yz) kesişiminde akademik bir araştırma ödevi yaptım.",
        "Günlük faaliyet raporları ile çalışma disiplini, şeffaf iş akışı ve görev takibi süreçlerini yürüttüm.",
      ],
    },
    {
      company: "Gaziosmanpaşa Belediyesi | Bilgi İşlem Müdürlüğü",
      position: "IT Stajyer",
      period: "Şub 2026 - Devam Ediyor",
      location: "İstanbul, Türkiye",
      duration: "",
      responsibilities: [
        "Belediye birimlerinden gelen teknik sorunlara yerinde müdahale ederek sistem sürekliliğini sağladım.",
        "Kurumsal ölçekte Windows ve Linux tabanlı sistemlerin kurulum ve konfigürasyon işlemlerini gerçekleştirdim.",
        "Kurumsal donanım sistemlerinin (PC, sunucu, ağ bileşenleri) kurulumu, bakımı ve arıza giderme süreçlerinde aktif rol aldım.",
        "Sektör profesyonelleriyle Docker, React, Yapay zeka ve Linux mimarileri üzerine teknik istişarelerde bulunarak kurumsal yazılım süreçlerini gözlemledim.",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Başlık */}
        <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Özgeçmiş
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Eğitim, deneyim ve projelerim</p>
        </div>
        </FadeIn>

        {/* Timeline (Eğitim ve Deneyim bölümleri aynı kalıyor) */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* EĞİTİM */}
          <FadeIn delay={100}>
          <div className="mb-12 relative">
            <div className="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
            <div className="ml-20">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    EĞİTİM
                  </span>
                  <span className="text-gray-400 text-sm">{education.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{education.school}</h3>
                <p className="text-purple-400 font-semibold mb-1">{education.degree}</p>
                <p className="text-gray-400 text-sm mb-3">📍 {education.location}</p>
                <ul className="space-y-2 mb-4">
                  {education.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </FadeIn>

          {/* DENEYİM */}
          {experience.map((exp, index) => (
            <FadeIn key={index} delay={(index + 2) * 100}>
            <div className="mb-12 relative">
              <div className="absolute left-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
              <div className="ml-20">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold">
                      DENEYİM
                    </span>
                    <span className="text-gray-400 text-sm">
                      {exp.period} • {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                  <p className="text-purple-400 font-semibold mb-1">{exp.position}</p>
                  <p className="text-gray-400 text-sm mb-4">📍 {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>

        {/* CV İNDİRME BUTONU - GÜNCELLENMİŞ KISIM */}
        <FadeIn delay={400}>
        <div className="text-center mt-12">
          <a
            href="/cv/Uygar_G%C3%B6rmez_CV%20-%20Kopya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            CV İNDİR (PDF)
          </a>
        </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Resume;
