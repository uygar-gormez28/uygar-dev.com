import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const Resume = () => {
  const { language } = useLanguage();

  const education = language === 'tr' ? {
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
  } : {
    school: "Nişantaşı University",
    degree: "Computer Engineering",
    period: "2021 - 2026",
    location: "Istanbul, Turkey",
    details: [
      <>
        Successfully completed the{" "}
        <a
          href="/sertifika/B2%20Level.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/50 hover:decoration-blue-400 transition-all font-medium"
        >
          B2 Level English Preparatory
        </a>{" "}
        education at Istanbul Nişantaşı University.
      </>,
      "Graduated from the Computer Engineering undergraduate program.",
    ],
  };

  const experience = language === 'tr' ? [
    {
      company: "Lotus-AI Yapay Zeka ve Bilişim Çözümleri A.Ş.",
      position: "Yazılım Stajyeri",
      period: "Kas 2025 - Oca 2026",
      location: "Remote, Türkiye",
      duration: "3 ay",
      responsibilities: [
        <>KNIME üzerinde veri işleme ve workflow geliştirme süreçlerinde görev alarak veri hazırlama ve analiz çalışmalarına katkı sağladım.</>,
        <><strong className="font-semibold text-white">Python, SQLite, Plotly ve Pandas</strong> kullanarak veri analizi, ETL süreçleri ve temel makine öğrenmesi uygulamaları geliştirdim.</>,
        <><strong className="font-semibold text-white">Matplotlib</strong> ile veri görselleştirme çalışmaları gerçekleştirerek analiz sonuçlarının raporlanmasına katkıda bulundum.</>,
        <>Yapay zekâ destekli fitoterapi (bitkisel tedavi) araştırması kapsamında literatür incelemeleri ve akademik araştırma süreçlerinde görev aldım.</>,
        <>Geliştirdiğim çalışmaların ilerleyişini günlük faaliyet raporları ve haftalık teknik sunumlarla düzenli olarak dokümante ederek proje süreçlerine katkı sağladım.</>,
      ],
    },
    {
      company: "Gaziosmanpaşa Belediyesi | Bilgi İşlem Müdürlüğü",
      position: "IT Stajyeri",
      period: "Şub 2026 - Mayıs 2026",
      location: "İstanbul, Türkiye",
      duration: "3 ay",
      responsibilities: [
        <>Belediye birimlerinden gelen donanım, ağ ve yazılım kaynaklı teknik sorunlara yerinde müdahale ederek sistemlerin kesintisiz çalışmasına katkı sağladım.</>,
        <>Kurumsal ölçekte <strong className="font-semibold text-white">Windows ve Linux</strong> tabanlı sistemlerin kurulumu, yapılandırılması ve temel yönetim süreçlerinde aktif görev aldım.</>,
        <>Bilgisayarlar, sunucular ve ağ bileşenlerinin kurulumu, bakım ve arıza giderme süreçlerine destek vererek kurumsal BT altyapısının sürdürülebilirliğine katkı sağladım.</>,
      ],
    },
    {
      company: "Max Potential Sporcu Kuluçka Merkezi",
      position: "Yazılım Stajyeri (LMS Proje Sorumlusu)",
      period: "Mayıs 2026 - Haziran 2026",
      location: "İstanbul, Türkiye",
      duration: "2 ay",
      responsibilities: [
        <>Sporcu gelişimine odaklanan <strong className="font-semibold text-white">Certifi Learning Management System (LMS)</strong> {" "}platformunun geliştirme sürecinde aktif yazılım geliştiricisi olarak görev aldım.</>,
        <><strong className="font-semibold text-white">Next.js, React, TypeScript, Tailwind CSS ve Supabase</strong>{" "}teknolojilerini kullanarak öğrenci, eğitmen ve yönetici panellerinin geliştirilmesine katkı sağladım.</>,
        <>
          Eğitim programları, içerik yönetimi, sertifikalar, kullanıcı deneyimi ve modern arayüz bileşenleri gibi birçok modülün geliştirilmesinde aktif rol aldım.
        </>,
        <>
          Ekip arkadaşlarım ve proje yöneticilerim ile gerçekleştirilen haftalık sprint ve değerlendirme toplantılarına katılarak geliştirme süreçlerini planladım, geri bildirimler doğrultusunda sistemi sürekli iyileştirdim.
        </>,
        <>
          Git tabanlı geliştirme süreçlerinde görev alarak versiyon kontrolü, kod düzeni ve ekip içi iş akışlarına uygun şekilde geliştirmeler gerçekleştirdim.
        </>,
      ],
    },
  ] : [
    {
      company: "Lotus-AI Artificial Intelligence and IT Solutions Inc.",
      position: "Software Intern",
      period: "Nov 2025 - Jan 2026",
      location: "Remote, Turkey",
      duration: "3 months",
      responsibilities: [
        <>Participated in data processing and workflow development on KNIME, contributing to data preparation and analysis tasks.</>,
        <>Developed data analysis, ETL processes, and basic machine learning applications using <strong className="font-semibold text-white">Python, SQLite, Plotly, and Pandas</strong>.</>,
        <>Performed data visualization tasks with <strong className="font-semibold text-white">Matplotlib</strong>, contributing to the reporting of analysis results.</>,
        <>Conducted literature reviews and academic research within the scope of AI-assisted phytotherapy (herbal treatment) research.</>,
        <>Regularly documented the progress of my work with daily activity reports and weekly technical presentations, contributing to project management.</>,
      ],
    },
    {
      company: "Gaziosmanpaşa Municipality | IT Department",
      position: "IT Intern",
      period: "Feb 2026 - May 2026",
      location: "Istanbul, Turkey",
      duration: "",
      responsibilities: [
        <>Responded on-site to technical problems originating from hardware, network, and software received from municipal units, contributing to uninterrupted system operations.</>,
        <>Actively participated in the installation, configuration, and basic administration of <strong className="font-semibold text-white">Windows and Linux</strong>-based systems on an enterprise scale.</>,
        <>Supported the installation, maintenance, and troubleshooting processes of computers, servers, and network components, contributing to the sustainability of the corporate IT infrastructure.</>,
      ],
    },
    {
      company: "Max Potential Athlete Incubator Center",
      position: "Software Intern (LMS Project Lead)",
      period: "May 2026 - Present",
      location: "Istanbul, Turkey",
      duration: "",
      responsibilities: [
        <>Worked as an active software developer in the development of the <strong className="font-semibold text-white">Certifi Learning Management System (LMS)</strong> platform focused on athlete development.</>,
        <>Contributed to the development of student, instructor, and admin panels using <strong className="font-semibold text-white">Next.js, React, TypeScript, Tailwind CSS, and Supabase</strong>.</>,
        <>Took an active role in developing modules such as training programs, content management, certificates, user experience, and modern UI components.</>,
        <>Participated in weekly sprint and evaluation meetings with team members and project managers to plan development and continuously improve the system based on feedback.</>,
        <>Worked in Git-based development processes, performing updates in accordance with version control, code structure, and team workflows.</>,
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
                {language === 'tr' ? "Özgeçmiş" : "Resume"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Timeline */}
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
                      {language === 'tr' ? "EĞİTİM" : "EDUCATION"}
                    </span>
                    <span className="text-gray-400 text-sm">{education.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{education.school}</h3>
                  <p className="text-purple-400 font-semibold mb-3">{education.degree}</p>
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
                        {language === 'tr' ? "DENEYİM" : "EXPERIENCE"}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {exp.period} {exp.duration ? `• ${exp.duration}` : ""}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                    <p className="text-purple-400 font-semibold mb-4">{exp.position}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 shrink-0">•</span>
                          <span>{resp}</span>
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
              href="/cv/Uygar_G%C3%B6rmez_CV.pdf"
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
              {language === 'tr' ? "CV İNDİR (PDF)" : "DOWNLOAD CV (PDF)"}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Resume;
