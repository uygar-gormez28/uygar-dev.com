import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";

const Resume = () => {
  const { language } = useLanguage();

  const timelineList = language === 'tr' ? [
    {
      badge: "DENEYİM",
      dotColor: "bg-purple-500",
      badgeColor: "bg-purple-500/20 text-purple-400",
      bulletColor: "text-purple-400",
      title: "Max Potential Sporcu Kuluçka Merkezi",
      subtitle: "Yazılım Stajyeri (LMS Proje Sorumlusu)",
      period: "Mayıs 2026 - Haziran 2026",
      duration: "2 ay",
      location: "İstanbul, Türkiye",
      items: [
        <>Sporcu gelişimine odaklanan <strong className="font-semibold text-white">Certifi Learning Management System (LMS)</strong> platformunun geliştirme sürecinde aktif yazılım geliştiricisi olarak görev aldım.</>,
        <><strong className="font-semibold text-white">Next.js, React, TypeScript, Tailwind CSS ve Supabase</strong> teknolojilerini kullanarak öğrenci, eğitmen ve yönetici panellerinin geliştirilmesine katkı sağladım.</>,
        <>Eğitim programları, içerik yönetimi, sertifikalar, kullanıcı deneyimi ve modern arayüz bileşenleri gibi birçok modülün geliştirilmesinde aktif rol aldım.</>,
        <>Ekip arkadaşları ve proje yöneticileri ile gerçekleştirilen haftalık sprint ve değerlendirme toplantılarına katılarak geliştirme süreçlerini planladım, geri bildirimler doğrultusunda sistemi sürekli iyileştirdim.</>,
        <>Git tabanlı geliştirme süreçlerinde görev alarak versiyon kontrolü, kod düzeni ve ekip içi iş akışlarına uygun şekilde geliştirmeler gerçekleştirdim.</>,
      ],
    },
    {
      badge: "DENEYİM",
      dotColor: "bg-purple-500",
      badgeColor: "bg-purple-500/20 text-purple-400",
      bulletColor: "text-purple-400",
      title: "Gaziosmanpaşa Belediyesi | Bilgi İşlem Müdürlüğü",
      subtitle: "IT Stajyeri",
      period: "Şub 2026 - Mayıs 2026",
      duration: "3 ay",
      location: "İstanbul, Türkiye",
      items: [
        <>Belediye birimlerinden gelen donanım, ağ ve yazılım kaynaklı teknik sorunlara yerinde müdahale ederek sistemlerin kesintisiz çalışmasına katkı sağladım.</>,
        <>Kurumsal ölçekte <strong className="font-semibold text-white">Windows ve Linux</strong> tabanlı sistemlerin kurulumu, yapılandırılması ve temel yönetim süreçlerinde aktif görev aldım.</>,
        <>Bilgisayarlar, sunucular ve ağ bileşenlerinin kurulumu, bakım ve arıza giderme süreçlerine destek vererek kurumsal BT altyapısının sürdürülebilirliğine katkı sağladım.</>,
      ],
    },
    {
      badge: "DENEYİM",
      dotColor: "bg-purple-500",
      badgeColor: "bg-purple-500/20 text-purple-400",
      bulletColor: "text-purple-400",
      title: "Lotus-AI Yapay Zeka ve Bilişim Çözümleri A.Ş.",
      subtitle: "Yazılım Stajyeri",
      period: "Kas 2025 - Oca 2026",
      duration: "3 ay",
      location: "Remote, Türkiye",
      items: [
        <>KNIME üzerinde veri işleme ve workflow geliştirme süreçlerinde görev alarak veri hazırlama ve analiz çalışmalarına katkı sağladım.</>,
        <><strong className="font-semibold text-white">Python, SQLite, Plotly ve Pandas</strong> kullanarak veri analizi, ETL süreçleri ve temel makine öğrenmesi uygulamaları geliştirdim.</>,
        <><strong className="font-semibold text-white">Matplotlib</strong> ile veri görselleştirme çalışmaları gerçekleştirerek analiz sonuçlarının raporlanmasına katkıda bulundum.</>,
        <>Yapay zekâ destekli fitoterapi (bitkisel tedavi) araştırması kapsamında literatür incelemeleri ve akademik araştırma süreçlerinde görev aldım.</>,
        <>Geliştirdiğim çalışmaların ilerleyişini günlük faaliyet raporları ve haftalık teknik sunumlarla düzenli olarak dokümante ederek proje süreçlerine katkı sağladım.</>,
      ],
    },
    {
      badge: "EĞİTİM",
      dotColor: "bg-blue-500",
      badgeColor: "bg-blue-500/20 text-blue-400",
      bulletColor: "text-blue-400",
      title: "Anadolu Üniversitesi",
      subtitle: "Yapay Zekâ Destekli Kodlama (Ön Lisans)",
      period: "Ekim 2026 - Devam Ediyor",
      location: "Açıköğretim, Türkiye",
      items: [
        "Yapay Zekâ Destekli Kodlama ön lisans programında eğitimime devam ediyorum.",
      ],
    },
    {
      badge: "EĞİTİM",
      dotColor: "bg-blue-500",
      badgeColor: "bg-blue-500/20 text-blue-400",
      bulletColor: "text-blue-400",
      title: "Nişantaşı Üniversitesi",
      subtitle: "Bilgisayar Mühendisliği (Lisans)",
      period: "2021 - 2026",
      location: "İstanbul, Türkiye",
      items: [
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
    },
  ] : [
    {
      badge: "EXPERIENCE",
      dotColor: "bg-purple-500",
      badgeColor: "bg-purple-500/20 text-purple-400",
      bulletColor: "text-purple-400",
      title: "Max Potential Athlete Incubator Center",
      subtitle: "Software Intern (LMS Project Lead)",
      period: "May 2026 - Jun 2026",
      duration: "2 months",
      location: "Istanbul, Turkey",
      items: [
        <>Worked as an active software developer in the development of the <strong className="font-semibold text-white">Certifi Learning Management System (LMS)</strong> platform focused on athlete development.</>,
        <>Contributed to the development of student, instructor, and admin panels using <strong className="font-semibold text-white">Next.js, React, TypeScript, Tailwind CSS, and Supabase</strong>.</>,
        <>Took an active role in developing modules such as training programs, content management, certificates, user experience, and modern UI components.</>,
        <>Participated in weekly sprint and evaluation meetings with team members and project managers to plan development and continuously improve the system based on feedback.</>,
        <>Worked in Git-based development processes, performing updates in accordance with version control, code structure, and team workflows.</>,
      ],
    },
    {
      badge: "EXPERIENCE",
      dotColor: "bg-purple-500",
      badgeColor: "bg-purple-500/20 text-purple-400",
      bulletColor: "text-purple-400",
      title: "Gaziosmanpaşa Municipality | IT Department",
      subtitle: "IT Intern",
      period: "Feb 2026 - May 2026",
      duration: "3 months",
      location: "Istanbul, Turkey",
      items: [
        <>Responded on-site to technical problems originating from hardware, network, and software received from municipal units, contributing to uninterrupted system operations.</>,
        <>Actively participated in the installation, configuration, and basic administration of <strong className="font-semibold text-white">Windows and Linux</strong>-based systems on an enterprise scale.</>,
        <>Supported the installation, maintenance, and troubleshooting processes of computers, servers, and network components, contributing to the sustainability of the corporate IT infrastructure.</>,
      ],
    },
    {
      badge: "EXPERIENCE",
      dotColor: "bg-purple-500",
      badgeColor: "bg-purple-500/20 text-purple-400",
      bulletColor: "text-purple-400",
      title: "Lotus-AI Artificial Intelligence and IT Solutions Inc.",
      subtitle: "Software Intern",
      period: "Nov 2025 - Jan 2026",
      duration: "3 months",
      location: "Remote, Turkey",
      items: [
        <>Participated in data processing and workflow development on KNIME, contributing to data preparation and analysis tasks.</>,
        <>Developed data analysis, ETL processes, and basic machine learning applications using <strong className="font-semibold text-white">Python, SQLite, Plotly, and Pandas</strong>.</>,
        <>Performed data visualization tasks with <strong className="font-semibold text-white">Matplotlib</strong>, contributing to the reporting of analysis results.</>,
        <>Conducted literature reviews and academic research within the scope of AI-assisted phytotherapy (herbal treatment) research.</>,
        <>Regularly documented the progress of my work with daily activity reports and weekly technical presentations, contributing to project management.</>,
      ],
    },
    {
      badge: "EDUCATION",
      dotColor: "bg-blue-500",
      badgeColor: "bg-blue-500/20 text-blue-400",
      bulletColor: "text-blue-400",
      title: "Anadolu University",
      subtitle: "AI-Assisted Coding (Associate Degree)",
      period: "Oct 2026 - Present",
      location: "Open Education, Turkey",
      items: [
        "Continuing my education in the AI-Assisted Coding associate degree program.",
      ],
    },
    {
      badge: "EDUCATION",
      dotColor: "bg-blue-500",
      badgeColor: "bg-blue-500/20 text-blue-400",
      bulletColor: "text-blue-400",
      title: "Nişantaşı University",
      subtitle: "Computer Engineering (Bachelor's Degree)",
      period: "2021 - 2026",
      location: "Istanbul, Turkey",
      items: [
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
    },
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-bg-primary relative border-t border-white/[0.04]">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Heading - Clean without eyebrow label */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              <span className="text-gradient">
                {language === 'tr' ? "Özgeçmiş & Deneyim" : "Resume & Experience"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {timelineList.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100}>
              <div className="mb-10 relative">
                <div className={`absolute left-4 sm:left-8 -translate-x-1/2 top-6 sm:top-7 w-4 h-4 ${item.dotColor} rounded-full border-4 border-[#08090D] z-10 shadow-sm`} />
                <div className="ml-10 sm:ml-20">
                  <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`${item.badgeColor} px-3 py-1 rounded-full text-xs font-semibold`}>
                        {item.badge}
                      </span>
                      <span className="text-gray-400 text-sm font-medium">
                        {item.period} {item.duration ? `• ${item.duration}` : ""}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-purple-400 font-semibold mb-3">{item.subtitle}</p>
                    <ul className="space-y-2">
                      {item.items.map((detail, idx) => (
                        <li key={idx} className="text-gray-300 text-sm sm:text-base leading-relaxed flex items-start">
                          <span className={`${item.bulletColor} mr-2 shrink-0`}>•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Compact, Visually Polished CV Download Button */}
        <FadeIn delay={400}>
          <div className="text-center mt-12">
            <a
              href="/cv/Uygar_Gormez_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-7 py-3 rounded-full text-sm sm:text-base font-semibold hover:opacity-95 hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>{language === 'tr' ? "CV İndir" : "Download CV"}</span>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Resume;
