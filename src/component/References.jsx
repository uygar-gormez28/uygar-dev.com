import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const References = () => {
  const { language } = useLanguage();

  const references = [
    {
      name: "Can Ortak",
      position: {
        tr: "Software Development lead",
        en: "Software Development lead"
      },
      company: {
        tr: "Max Potential",
        en: "Max Potential"
      },
      email: "canortak@maxpotential.pro"
    },
    {
      name: "Ulaş Vural",
      position: {
        tr: "Öğretim Üyesi (Faculty Member)",
        en: "Faculty Member"
      },
      company: {
        tr: "Nişantaşı Üniversitesi",
        en: "Nişantaşı University"
      },
      email: "uvural@gmail.com"
    }
  ];

  return (
    <section id="references" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {language === 'tr' ? "Referanslar" : "References"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Reference Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {references.map((ref, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-purple-500/50 rounded-2xl hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex flex-col gap-6">
                {/* Header: Name and Position */}
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{ref.name}</h3>
                  <p className="text-purple-400 font-medium text-sm">
                    {ref.position[language]}
                  </p>
                </div>

                {/* Company and Email */}
                <div className="flex flex-col gap-4 text-gray-300 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                      {language === 'tr' ? "Şirket / Kurum" : "Company"}
                    </span>
                    <span className="font-semibold text-white">
                      {ref.company[language]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                      Email
                    </span>
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors font-medium"
                    >
                      {ref.email}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
