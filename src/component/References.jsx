import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { references } from "../data/references";

const References = () => {
  const { language } = useLanguage();

  return (
    <section id="references" className="py-20 px-4 bg-bg-primary relative border-t border-white/[0.04]">
      <div className="max-w-container mx-auto">
        
        {/* Section Heading - Clean without eyebrow label */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              <span className="text-gradient">
                {language === 'tr' ? "Referanslar" : "References"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* References Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {references.map((ref, index) => (
            <FadeIn key={ref.name} delay={index * 150} className="h-full">
              <article className="p-7 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300 shadow-xl flex flex-col justify-between h-full group">
                
                <div>
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                      {ref.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-purple-400 mt-1">
                      {ref.position[language]}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-xs uppercase tracking-wider font-semibold text-content-secondary">
                      {language === 'tr' ? "Kurum:" : "Institution:"}
                    </span>
                    <span className="text-sm font-medium text-white">
                      {ref.company[language]}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-content-secondary font-medium">
                    {language === 'tr' ? "İletişim E-Postası" : "Contact Email"}
                  </span>
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-400 transition-colors"
                  >
                    {ref.email}
                  </a>
                </div>

              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default References;
