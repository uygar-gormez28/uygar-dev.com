import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const UpcomingCompetition = () => {
  const { language } = useLanguage();

  return (
    <section className="pt-0 pb-4 sm:pb-6 px-4 bg-bg-primary relative -mt-3 sm:-mt-5">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={150}>
          {/* Card with 1.5px gradient border */}
          <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-r from-blue-500/25 via-purple-500/35 to-pink-500/30 hover:from-blue-500/40 hover:via-purple-500/50 hover:to-pink-500/40 transition-all duration-300 shadow-xl shadow-purple-950/20 group">
            <div className="rounded-[15px] bg-gradient-to-br from-[#0F101A] via-[#0B0C14] to-[#08090D] p-5 sm:p-6 lg:p-7 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 lg:gap-8 backdrop-blur-xl">
              
              {/* Left Column: Competition Information */}
              <div className="flex-1 space-y-3 w-full">
                
                {/* Top Badges Row - Clean Typography without Icons */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/25 text-purple-300 backdrop-blur-md shadow-sm tracking-wide">
                    {language === 'tr' ? "Yaklaşan Yarışma" : "Upcoming Competition"}
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/25 text-amber-300 backdrop-blur-md shadow-sm tracking-wide">
                    {language === 'tr' ? "Son 25 Takım" : "Top 25 Teams"}
                  </span>
                </div>

                {/* Title (Optimized Size) */}
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold font-heading text-white tracking-tight">
                    SaaS Future Bridge Buildathon '26
                  </h3>
                </div>

                {/* Description */}
                <p className="text-content-secondary text-xs sm:text-sm leading-relaxed max-w-2xl">
                  {language === 'tr' ? (
                    <>
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">NovAI</span> ekibimizle SaaS Future Bridge Buildathon '26 yarışmasına hazırlanıyoruz. Ön elemeyi başarıyla geçerek son 25 takım arasına seçildik.
                    </>
                  ) : (
                    <>
                      Preparing for the SaaS Future Bridge Buildathon '26 with our{" "}
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">NovAI</span>{" "}
                      team. Having successfully passed the pre-selection, we have been chosen among the final 25 teams.
                    </>
                  )}
                </p>

                {/* Date & Location Footer - Clean Typography without Icons */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 text-xs text-gray-300 font-medium">
                  <span>{language === 'tr' ? "2 Aralık 2026" : "December 2, 2026"}</span>
                  <span className="text-white/20">•</span>
                  <span>BTM İstanbul</span>
                </div>

              </div>

              {/* Right Column: Official Acceptance Image */}
              <div className="w-full lg:w-auto lg:shrink-0 flex justify-center lg:justify-end">
                <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#14152A]/70 max-w-sm sm:max-w-md lg:max-w-[320px] xl:max-w-[350px] p-1.5 group-hover:border-purple-500/30 transition-colors">
                  <img
                    src="/img/saas-summit-acceptance.png"
                    alt="SaaS Summit Acceptance - NovAI"
                    className="w-full h-auto object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default UpcomingCompetition;
