export const projects = [
  {
    id: "certifi",
    featured: true,
    category: {
      tr: "Öğrenme Yönetim Sistemi (LMS)",
      en: "Learning Management System (LMS)"
    },
    title: {
      tr: "Certifi",
      en: "Certifi"
    },
    description: {
      tr: "Max Potential'daki staj sürecimde, Eczacıbaşı Geleceğe Smaç Programı kapsamında geliştirdiğim, Next.js, Supabase ve PostgreSQL tabanlı full-stack öğrenme ve sertifikasyon platformu.",
      en: "A Next.js, Supabase, and PostgreSQL based full-stack learning and certification platform developed during my internship at Max Potential as part of the Eczacıbaşı Geleceğe Smaç Program."
    },
    detailedDescription: {
      tr: "Certifi, Max Potential bünyesinde geliştirdiğim ve Eczacıbaşı Geleceğe Smaç Programı kapsamında kullanılan modern bir Learning Management System (LMS) ve sertifikasyon platformudur. Proje; spor eğitmenleri ile farklı branşlardaki profesyonellerin eğitim içeriklerine dijital olarak erişmesini, gelişim süreçlerini takip etmesini ve programları başarıyla tamamladıktan sonra sertifika almalarını hedeflemektedir.\n\nYaklaşık 2 aylık staj sürecim boyunca projede Full Stack Developer olarak aktif görev aldım. Frontend tarafında Next.js, React, TypeScript, Tailwind CSS kullanarak kullanıcı arayüzlerini geliştirirken; backend tarafında Supabase Auth, PostgreSQL, Storage, API yapıları ve rol bazlı yetkilendirme (RLS) ile veri yönetimi ve iş mantığı geliştirmelerinde görev aldım.",
      en: "Certifi is a modern Learning Management System (LMS) and certification platform developed at Max Potential for the Eczacıbaşı Geleceğe Smaç Program. The project enables sports coaches and specialists across branches to digitally access instructional modules, track training progress, and receive accredited certification upon program completion.\n\nDuring my 2-month internship, I worked as an active Full Stack Developer on the sprint team, delivering responsive frontend interfaces with Next.js, React, TypeScript, and Tailwind CSS, while implementing backend data access, Supabase Auth, Storage, and PostgreSQL Row-Level Security (RLS) policies."
    },
    image: "/img/certifi.png",
    imageClass: "object-cover object-top",
    github: "https://github.com/uygar-gormez28",
    website: null,
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    documents: [],
    caseStudy: {
      clientOrContext: {
        tr: "Max Potential / Eczacıbaşı Geleceğe Smaç",
        en: "Max Potential / Eczacıbaşı Geleceğe Smaç"
      },
      timeline: {
        tr: "Mayıs 2026 - Haziran 2026 (2 Ay)",
        en: "May 2026 - June 2026 (2 Months)"
      },
      role: {
        tr: "Full Stack Developer (LMS Proje Sorumlusu)",
        en: "Full Stack Developer (LMS Project Lead)"
      },
      status: {
        tr: "Geliştirme & Entegrasyon Aşaması",
        en: "Development & Integration Phase"
      },
      overview: {
        tr: "Certifi, Eczacıbaşı Geleceğe Smaç Programı bünyesinde yer alan voleybol ve spor antrenörlerinin mesleki eğitimlerini, modüler video ve doküman içeriklerini dijital ortama taşıyan kurumsal bir Öğrenme Yönetim Sistemidir (LMS). Çoklu rol yapısı sayesinde eğitmenler, yöneticiler ve kursiyer antrenörler tek bir platform üzerinden etkileşim kurar.",
        en: "Certifi is an enterprise-grade Learning Management System (LMS) built for the Eczacıbaşı Geleceğe Smaç volleyball and athletic development program. It digitalizes curriculum delivery, progress monitoring, and certificate accreditation for coaches through a multi-tier role-based portal."
      },
      problem: {
        tr: "Farklı şehir ve spor kulüplerine dağılmış yüzlerce antrenörün eğitim içeriklerine erişimi fiziksel veya dağınık PDF/video dosyaları üzerinden yürütülüyordu. Antrenörlerin eğitimleri tamamlayıp tamamlamadığını denetlemek, modül sonu değerlendirme sınavlarını adil ve ölçülebilir şekilde gerçekleştirmek ve resmi geçerliliği olan sertifikaları hatasız oluşturmak ciddi bir operasyonel yük ve zaman kaybı oluşturuyordu.",
        en: "Distributing training modules to hundreds of coaches across various clubs and cities was handled manually through fragmented video links and PDFs. Program coordinators lacked automated progress auditing, standardized quiz evaluations, and reliable, accredited certificate generation, creating substantial operational overhead."
      },
      goals: {
        tr: [
          "Farklı kullanıcı rolleri (Öğrenci Antrenör, Eğitmen, Yönetici) için izole ve güvenli paneller oluşturmak.",
          "Video ve PDF formatındaki eğitim modüllerinin ilerleme durumunu gerçek zamanlı kaydetmek.",
          "Modül sonu değerlendirme testleri ve otomatik sertifikasyon iş akışını hayata geçirmek.",
          "Vercel ve Supabase altyapısıyla ölçeklenebilir, modern ve kesintisiz bir kullanıcı deneyimi sunmak."
        ],
        en: [
          "Build secure, isolated dashboards for distinct user tiers (Coach Trainees, Instructors, Platform Admins).",
          "Deliver realtime progress tracking across video and PDF training modules.",
          "Implement automated end-of-module assessment quizzes and certificate generation workflows.",
          "Deploy a scalable, highly reliable infrastructure using Next.js on Vercel and Supabase PostgreSQL."
        ]
      },
      solution: {
        tr: "Next.js App Router ve Supabase ekosistemi üzerine kurulu modern bir full-stack mimari tasarlandı. Antrenörler mobil ve masaüstü uyumlu arayüzden ders videolarını ve materyallerini takip ederken, her modülün tamamlanma durumu Supabase PostgreSQL veritabanında anlık olarak işlenir. Modül sonundaki değerlendirme sınavından geçer not alan kursiyerler için sistem otomatik doğrulanabilir sertifika kaydı üretir.",
        en: "We engineered a modern full-stack web application leveraging Next.js App Router and Supabase. Coaches access responsive course modules and video lessons on desktop and mobile, with completion milestones synced directly to PostgreSQL. Passing assessment thresholds triggers automated accredited certificate generation with unique verification hashes."
      },
      features: [
        {
          number: "01",
          title: {
            tr: "Çoklu Rol ve Yetkilendirme Paneli",
            en: "Multi-Tier Role-Based Dashboards"
          },
          description: {
            tr: "Yönetici, eğitmen ve öğrenci rolleri için ayrı paneller. Supabase Auth ve Row-Level Security (RLS) ile veri izolasyonu.",
            en: "Dedicated portals for Admins, Instructors, and Trainees with strict data isolation powered by Supabase Auth and RLS."
          }
        },
        {
          number: "02",
          title: {
            tr: "Modüler Eğitim ve Video Oynatıcı",
            en: "Modular Course & Media Player"
          },
          description: {
            tr: "Antrenörlük müfredatına özel video dersler, PDF dökümanları ve ders tamamlama yüzdesi takibi.",
            en: "Curriculum-specific video modules, downloadable technical PDFs, and granular lesson completion tracking."
          }
        },
        {
          number: "03",
          title: {
            tr: "Değerlendirme Testi & Sınav Motoru",
            en: "Assessment Quiz Engine"
          },
          description: {
            tr: "Her konu bitiminde dinamik soru setleri, anlık puanlama ve başarı kriteri denetimi.",
            en: "Dynamic question banks at the end of each module, instant scoring, and customizable passing criteria."
          }
        },
        {
          number: "04",
          title: {
            tr: "Otomatik Sertifikasyon Sistemi",
            en: "Automated Certification Workflow"
          },
          description: {
            tr: "Müfredatı ve testleri başarıyla tamamlayan antrenörlere özel doğrulanabilir dijital sertifika üretimi.",
            en: "Automated generation of verified digital certificates upon successful completion of curriculum and tests."
          }
        }
      ],
      contributions: [
        {
          category: {
            tr: "Frontend Geliştirme",
            en: "Frontend Engineering"
          },
          items: {
            tr: [
              "Next.js, React ve TypeScript kullanarak öğrenci ve eğitmen arayüzlerini sıfırdan geliştirdim.",
              "Tailwind CSS ile mobil öncelikli, responsive ve modern bileşen kütüphanesi inşa ettim.",
              "Video oynatıcı ilerleme takibi ve dinamik quiz arayüz bileşenlerini tasarlayıp kodladım."
            ],
            en: [
              "Engineered responsive Trainee and Instructor portals from scratch using Next.js, React, and TypeScript.",
              "Constructed a clean, mobile-first component architecture styled with Tailwind CSS.",
              "Designed and built the video lesson progress tracker and interactive assessment quiz UI."
            ]
          }
        },
        {
          category: {
            tr: "Backend & Veritabanı Mimarisi",
            en: "Backend & Database Architecture"
          },
          items: {
            tr: [
              "Supabase PostgreSQL üzerinde kurs, modül, kullanıcı profili ve sertifika tablolarının şemasını modelledim.",
              "Veri güvenliği için PostgreSQL Row Level Security (RLS) kurallarını kurgulayıp hayata geçirdim.",
              "Supabase Storage üzerinde video ve PDF dokümanlarının güvenli yükleme ve erişim yapılandırmasını yaptım."
            ],
            en: [
              "Designed relational PostgreSQL schemas for courses, modules, user progress, and certificates.",
              "Implemented granular PostgreSQL Row-Level Security (RLS) policies to safeguard tenant data.",
              "Configured secure Supabase Storage buckets with role-checked asset retrieval for course materials."
            ]
          }
        },
        {
          category: {
            tr: "Ekip İçi İş Birliği & Süreç",
            en: "Team Collaboration & Delivery"
          },
          items: {
            tr: [
              "Haftalık sprint ve planlama toplantılarına katılarak iş akışlarını takım arkadaşlarıyla koordine ettim.",
              "Git branching stratejisi ve PR inceleme süreçleriyle kod kalitesinin korunmasına katkı sağladım."
            ],
            en: [
              "Participated actively in weekly sprint planning and requirement grooming sessions with team leads.",
              "Followed Git branching workflows, peer PR reviews, and code standards for robust code delivery."
            ]
          }
        }
      ],
      techStackCategorized: {
        frontend: ["Next.js", "React 18", "TypeScript", "Tailwind CSS"],
        backend: ["Next.js Server Actions", "Supabase Auth", "Supabase Edge Storage"],
        database: ["PostgreSQL", "Supabase RLS", "Relational Schema"],
        tools: ["Vercel", "Git & GitHub", "Figma", "ESLint"]
      },
      architecture: {
        summary: {
          tr: "Next.js App Router frontend katmanı, Vercel üzerinde barındırılırken arka planda Supabase Managed PostgreSQL ve Auth servisleriyle doğrudan Server Actions ve REST API üzerinden güvenli bağlantı kurar. Veri izolasyonu veritabanı seviyesinde RLS politikalarıyla güvenceye alınır.",
          en: "Next.js App Router deployed on Vercel communicates directly with Supabase Managed PostgreSQL and Auth services via Server Actions and secure REST endpoints, backed by database-level Row-Level Security (RLS)."
        },
        flow: [
          { from: "Client Browser", to: "Next.js App Router (Vercel)", label: "HTTPS / User Action" },
          { from: "Next.js Server", to: "Supabase Auth", label: "Session & JWT Verification" },
          { from: "Next.js Server", to: "PostgreSQL (Supabase)", label: "RLS-Protected Queries" },
          { from: "Client Browser", to: "Supabase Storage", label: "Signed Video & PDF Streaming" }
        ]
      },
      developmentProcess: [
        {
          step: "01",
          title: {
            tr: "Gereksinim Analizi & Paydaş Görüşmeleri",
            en: "Requirement Analysis & Stakeholder Discovery"
          },
          description: {
            tr: "Eczacıbaşı Geleceğe Smaç programı eğitmenlerinin operasyonel ihtiyaçları ve antrenör müfredatı incelendi; kullanıcı rolleri netleştirildi.",
            en: "Audited training curricula and operational bottlenecks with program coordinators to outline core feature tiers."
          }
        },
        {
          step: "02",
          title: {
            tr: "Veritabanı Modelleme & Güvenlik Kurgusu",
            en: "Database Modeling & Security Design"
          },
          description: {
            tr: "PostgreSQL şeması hazırlandı; kurs-ders hiyerarşisi, quiz yapıları ve RLS yetki matrisi kurgulandı.",
            en: "Modelled relational schemas in PostgreSQL with foreign key relations, quiz state tables, and RLS matrices."
          }
        },
        {
          step: "03",
          title: {
            tr: "Arayüz Geliştirme & Bileşen İnşası",
            en: "UI Engineering & Component System"
          },
          description: {
            tr: "TypeScript ve Tailwind CSS ile yeniden kullanılabilir ders kartları, video oynatıcı arayüzü ve formlar kodlandı.",
            en: "Built modular course cards, media players, and assessment components using TypeScript and Tailwind CSS."
          }
        },
        {
          step: "04",
          title: {
            tr: "Entegrasyon & Test Süreçleri",
            en: "Integration & Validation"
          },
          description: {
            tr: "Supabase veri senkronizasyonu, rol geçişleri ve sınav puanlama motorunun uçtan uca testleri gerçekleştirildi.",
            en: "Conducted end-to-end testing of authentication, role switches, score calculations, and storage access."
          }
        }
      ],
      challenges: [
        {
          title: {
            tr: "Rol Bazlı İçerik Güvenliği (RLS)",
            en: "Granular Role-Based Data Isolation (RLS)"
          },
          problem: {
            tr: "Eğitmenlerin sadece kendi branşlarındaki öğrencileri görmesi, öğrencilerin ise sadece kayıtlı oldukları modüllere erişmesi gerekiyordu.",
            en: "Trainees needed access only to enrolled modules, while instructors required access restricted to their assigned cohorts."
          },
          solution: {
            tr: "Yalnızca frontend seviyesinde gizleme yapmak yerine, veritabanı seviyesinde PostgreSQL Row-Level Security (RLS) politikaları yazılarak yetkisiz veri sızıntısı tamamen engellendi.",
            en: "Enforced strict Row-Level Security (RLS) policies directly within PostgreSQL, preventing data leaks regardless of client queries."
          },
          outcome: {
            tr: "Güvenli, denetlenebilir ve kurumsal seviyede çok kullanıcılı veri izolasyonu sağlandı.",
            en: "Delivered audited, enterprise-compliant multi-tenant data isolation."
          }
        },
        {
          title: {
            tr: "Büyük Eğitim Dokümanları ve Video Akışı",
            en: "Media Streaming and Asset Protection"
          },
          problem: {
            tr: "Telif hakkı olan eğitim videolarının ve rehber PDF'lerin yetkisiz indirilmesinin ve doğrudan link paylaşımının önüne geçilmesi gerekiyordu.",
            en: "Proprietary training videos and PDF manuals needed protection against unauthorized direct link sharing."
          },
          solution: {
            tr: "Supabase Storage bucket'ları private yapılarak sadece oturum açmış aktif kullanıcılara kısa süreli imzalı URL'ler (Signed URLs) üzerinden erişim verildi.",
            en: "Configured private Supabase Storage buckets with short-lived Signed URLs generated dynamically upon authenticated sessions."
          },
          outcome: {
            tr: "İçerikler güvenle sunulurken mobil cihazlarda da akıcı bir izleme deneyimi elde edildi.",
            en: "Protected proprietary intellectual assets while maintaining fast streaming on mobile."
          }
        }
      ],
      lessonsLearned: {
        tr: [
          "Büyük ölçekli projelerde Supabase ve Next.js App Router mimarisinin sağladığı hız ve ölçeklenebilirlik avantajını deneyimledim.",
          "Veri güvenliğinin frontend kontrolleriyle yetinmeyip daima veritabanı seviyesinde RLS politikalarıyla garanti altına alınması gerektiğini pekiştirdim.",
          "Gerçek bir kurumsal spor kulübü ekibiyle haftalık sprintlerde iş birliği yapmanın ve sorumluluk almanın profesyonel vizyonuma katkısını gördüm."
        ],
        en: [
          "Gained deep hands-on mastery in building scalable web architectures using Next.js App Router and Supabase.",
          "Reinforced the principle that critical security must always be enforced at the database level through RLS.",
          "Developed strong agile collaboration skills by planning sprints and delivering features within a cross-functional team."
        ]
      },
      gallery: [
        {
          url: "/img/certifi.png",
          caption: {
            tr: "Certifi Öğrenme Yönetim Sistemi - Kurs Arayüzü",
            en: "Certifi Learning Management System - Course Dashboard"
          }
        }
      ]
    }
  },
  {
    id: "conlaysjcrown",
    featured: true,
    category: {
      tr: "E-Ticaret Platformu (Freelance)",
      en: "E-Commerce Platform (Freelance)"
    },
    title: {
      tr: "Conlays J Crown",
      en: "Conlays J Crown"
    },
    description: {
      tr: "Bir tekstil ve pantolon markası için freelance olarak geliştirdiğim, modern tasarım ve e-ticaret altyapısına sahip web sitesi.",
      en: "A modern design e-commerce website developed as a freelance project for a clothing and trousers brand."
    },
    detailedDescription: {
      tr: "Conlays J Crown, özel tasarım pantolon ve giyim ürünlerini sergileyen ve satışını kolaylaştıran modern bir e-ticaret web platformudur.\n\nKullanıcı dostu arayüzü, şık görsel sunumları ve hızlı gezinti imkanları ile müşterilere üst düzey bir alışveriş deneyimi sunar. Freelance olarak sıfırdan geliştirilmiştir.",
      en: "Conlays J Crown is a modern e-commerce web platform showcasing custom design trousers and apparel. It provides clients with a premium shopping experience through user-friendly interface, elegant visual presentations, and fast navigation. Developed from scratch as a freelance project."
    },
    image: "/img/conlays.png",
    imageClass: "object-cover object-top",
    website: "https://conlaysjcrown.com/",
    github: null,
    tags: ["React", "CSS", "E-Commerce", "Responsive Design", "Freelance"],
    documents: [],
    caseStudy: {
      clientOrContext: {
        tr: "Conlays J Crown (Tekstil Markası)",
        en: "Conlays J Crown (Apparel Brand)"
      },
      timeline: {
        tr: "Freelance Proje",
        en: "Freelance Project"
      },
      role: {
        tr: "Frontend Developer & UI Tasarımcısı",
        en: "Frontend Developer & UI Designer"
      },
      status: {
        tr: "Canlıda (Yayında)",
        en: "Live in Production"
      },
      overview: {
        tr: "Conlays J Crown, özel dikim pantolon ve hazır giyim koleksiyonlarını modern ve premium bir marka kimliğiyle sergileyen bir e-ticaret vitrinidir. Müşterilerin ürün detaylarını, kumaş kalitesini ve beden seçeneklerini akıcı bir şekilde incelemesini sağlar.",
        en: "Conlays J Crown is a boutique e-commerce storefront showcasing custom-tailored trousers and ready-to-wear apparel with a luxury brand aesthetic, enabling customers to inspect fabrics, fits, and styling details effortlessly."
      },
      problem: {
        tr: "Geleneksel toptan ve perakende satış yapan marka, dijital varlığında ürünlerinin kalitesini yansıtacak modern, mobil uyumlu ve yüksek çözünürlüklü bir vitrine ihtiyaç duyuyordu. Sosyal medya üzerinden gelen müşteriler için hızlı, şık ve güvenilir bir ürün katalog deneyimi yoktu.",
        en: "The brand lacked a modern, mobile-optimized digital showcase reflecting its tailoring quality. Customers arriving from marketing channels needed a fast, elegant, and frictionless catalog experience."
      },
      goals: {
        tr: [
          "Markanın özel tasarım giyim kimliğini yansıtan şık ve minimal bir vitrin tasarlamak.",
          "Mobil cihazlarda yüksek çözünürlüklü ürün görsellerinin akıcı ve hızlı yüklenmesini sağlamak.",
          "Kullanıcıların tek tıkla ürün detaylarına ve satın alma kanallarına ulaşabileceği sezgisel bir arayüz sunmak."
        ],
        en: [
          "Create a minimalist, high-end digital storefront reflecting the brand's tailored aesthetic.",
          "Ensure instantaneous image delivery and fluid performance on mobile devices.",
          "Provide seamless product discovery leading directly to purchasing channels."
        ]
      },
      solution: {
        tr: "React ve modern CSS ile geliştirilen arayüzde, ürün detayları büyük ve yüksek çözünürlüklü görsellerle ön plana çıkarıldı. Beden ve model filtreleme özellikleri eklenerek müşterilerin aradıkları pantolon modellerine saniyeler içinde erişmesi sağlandı.",
        en: "Engineered a responsive React single-page application focused on high-resolution product photography, intuitive garment categorization, and streamlined customer inquiries."
      },
      features: [
        {
          number: "01",
          title: {
            tr: "Dinamik Ürün Kataloğu",
            en: "Dynamic Product Catalog"
          },
          description: {
            tr: "Koleksiyon ve kategori bazlı filtreleme ile ürünlerin kumaş ve kesim detaylarını inceleme imkanı.",
            en: "Category and collection filtering allowing customers to explore fabric textures, cuts, and dimensions."
          }
        },
        {
          number: "02",
          title: {
            tr: "Mobil Öncelikli Alışveriş Deneyimi",
            en: "Mobile-First Shopping Experience"
          },
          description: {
            tr: "Mobil kullanıcılar için dokunmatik kaydırma, optimize edilmiş görsel galerisi ve hızlı gezinti.",
            en: "Touch-optimized image carousels, responsive sheets, and zero-delay navigation for mobile shoppers."
          }
        },
        {
          number: "03",
          title: {
            tr: "Doğrudan Sipariş & İletişim Entegrasyonu",
            en: "Direct Order & Contact Flow"
          },
          description: {
            tr: "Müşterilerin seçtikleri ürün kodu ile doğrudan marka ile iletişime geçebildiği pratik sipariş akışı.",
            en: "Streamlined order intent connecting shoppers directly with customer service carrying selected product IDs."
          }
        }
      ],
      contributions: [
        {
          category: {
            tr: "Tasarım & Frontend Geliştirme",
            en: "Design & Frontend Engineering"
          },
          items: {
            tr: [
              "Marka sahibiyle doğrudan görüşerek gereksinimleri analiz ettim ve arayüzü sıfırdan tasarladım.",
              "React bileşen yapısını modüler tutarak yeni ürün ekleme süreçlerini kolaylaştırdım.",
              "Yüksek çözünürlüklü görsellerin performans kaybı yaratmaması için görsel optimizasyonu uyguladım."
            ],
            en: [
              "Held discovery meetings with the client to translate brand requirements into interactive layouts.",
              "Architected modular React components for easily extensible product portfolios.",
              "Implemented client-side responsive image strategies to ensure fast page loads."
            ]
          }
        }
      ],
      techStackCategorized: {
        frontend: ["React", "JavaScript (ES6+)", "Modern CSS / Flexbox & Grid", "Responsive Design"],
        backend: ["Static Web Hosting / Client Routing"],
        database: ["JSON Product Data Store"],
        tools: ["Vercel", "Git", "Figma", "Photoshop (Görsel Optimizasyonu)"]
      },
      architecture: {
        summary: {
          tr: "İstemci tarafında çalışan React mimarisi, optimize edilmiş ürün veri yapıları ve CDN üzerinden sunulan sıkıştırılmış görsellerle düşük gecikmeli bir katalog deneyimi sunar.",
          en: "Client-side React SPA consuming structured product datasets, served via edge CDN with responsive compressed imagery."
        },
        flow: [
          { from: "User Browser", to: "CDN / Vercel Edge", label: "Page Request & Assets" },
          { from: "React Application", to: "Local Product Catalog", label: "State & Filters" },
          { from: "Product Card", to: "Contact / Order Channel", label: "Customer Inquiry" }
        ]
      },
      developmentProcess: [
        {
          step: "01",
          title: {
            tr: "Müşteri İhtiyaç Analizi & Wireframe",
            en: "Client Discovery & Wireframing"
          },
          description: {
            tr: "Markanın hedef kitlesi ve ürün çeşitliliği değerlendirilerek temel sayfa planı hazırlandı.",
            en: "Analyzed product catalogue and target demographic to structure visual wireframes."
          }
        },
        {
          step: "02",
          title: {
            tr: "Arayüz Tasarımı & Görsel Hazırlık",
            en: "Visual Design & Asset Prep"
          },
          description: {
            tr: "Ürün fotoğrafları web için optimize edildi; tipografi ve renk paleti belirlendi.",
            en: "Optimized product photos for web delivery and defined brand color typography rules."
          }
        },
        {
          step: "03",
          title: {
            tr: "React ile Geliştirme & Canlıya Alma",
            en: "React Development & Deployment"
          },
          description: {
            tr: "Bileşenler kodlandı, çapraz tarayıcı testleri yapıldı ve özel alan adına bağlandı.",
            en: "Built interactive catalog components, ran cross-browser tests, and deployed to custom domain."
          }
        }
      ],
      challenges: [
        {
          title: {
            tr: "Yüksek Çözünürlüklü Moda Fotoğraflarının Performansı",
            en: "High-Resolution Fashion Imagery Performance"
          },
          problem: {
            tr: "Kumaş detaylarını gösteren kaliteli fotoğrafların mobil veri bağlantılarında sayfa açılışını yavaşlatma riski vardı.",
            en: "High-resolution fabric closeups risked causing layout shifts and slow initial mobile render times."
          },
          solution: {
            tr: "Modern WebP formatı ve lazy loading stratejisi uygulanarak görseller ekran boyutuna göre dinamik ölçeklendirildi.",
            en: "Applied WebP compression, lazy loading, and dimension reservations to eliminate cumulative layout shifts."
          },
          outcome: {
            tr: "Görsel kaliteden ödün vermeden akıcı ve hızlı bir mobil katalog deneyimi sağlandı.",
            en: "Maintained crisp fabric detailing with instant image loading on all viewports."
          }
        }
      ],
      lessonsLearned: {
        tr: [
          "Freelance bir projede müşteri beklentilerini teknik çözümlerle buluşturma ve proje takvimini yönetme tecrübesi edindim.",
          "Görsel odaklı e-ticaret platformlarında asset optimizasyonunun doğrudan kullanıcı deneyimine etkisini pekiştirdim."
        ],
        en: [
          "Gained valuable freelance experience aligning commercial client requests with clean technical solutions.",
          "Reinforced the direct impact of asset compression and responsive images on user retention."
        ]
      },
      gallery: [
        {
          url: "/img/conlays.png",
          caption: {
            tr: "Conlays J Crown - E-Ticaret Vitrini",
            en: "Conlays J Crown - E-Commerce Storefront"
          }
        }
      ]
    }
  },
  {
    id: "nisankare",
    featured: false,
    category: {
      tr: "Etkinlik & Bulut Fotoğraf Uygulaması",
      en: "Event & Cloud Photo Web App"
    },
    title: {
      tr: "NişanKare",
      en: "NişanKare"
    },
    description: {
      tr: "Misafirlerin davette çektikleri fotoğrafları QR kod okutarak üyelik gerekmeden Google Drive'da toplayan pratik web uygulaması.",
      en: "A practical web application that collects photos taken by guests during an event into Google Drive via QR code scanning without registration."
    },
    detailedDescription: {
      tr: "Bir arkadaşımın nişan organizasyonu öncesinde yaşadığı basit ama can sıkıcı bir problem bu projenin çıkış noktası oldu. Organizasyon sonrasında misafirlerin telefonlarında kalan yüzlerce fotoğrafı tek tek istemek, WhatsApp üzerinden kalite kaybıyla toplamak ve dosyaları düzenlemek oldukça zahmetliydi.\n\nBu sorunu çözmek için NişanKare'yi geliştirdim. Davetliler, kendilerine verilen QR kodu okutarak herhangi bir üyelik oluşturmadan veya uygulama indirmeden doğrudan fotoğraflarını yükleyebiliyor. Yüklenen tüm görseller otomatik olarak belirlenen Google Drive klasöründe toplanıyor ve organizasyon sahibi tüm fotoğraflara tek noktadan erişebiliyor.",
      en: "A simple yet recurring problem before a friend's engagement ceremony sparked this project: collecting photos taken by dozens of guests after the event. Asking guests individually, dealing with heavy WhatsApp compression, and sorting files manually was frustrating and chaotic.\n\nTo solve this, I developed NişanKare. Guests simply scan a QR code at their table and upload candid moments instantly from their phone camera roll without registration or app installation. All uploads stream directly to a designated Google Drive folder for the hosts."
    },
    image: "/img/nisankare.png",
    github: "https://github.com/uygar-gormez28/NisanKare",
    website: "https://nisan-kare-5u4taofbf-uygar-gormez.vercel.app/",
    tags: ["Next.js", "Google Drive API", "Tailwind CSS", "TypeScript"],
    documents: [],
    caseStudy: {
      clientOrContext: {
        tr: "Özel Etkinlik & Nişan Organizasyonu",
        en: "Event & Engagement Organization"
      },
      timeline: {
        tr: "1 Hafta (Hızlı Üretim & Canlı Kullanım)",
        en: "1 Week (Rapid Build & Live Event Use)"
      },
      role: {
        tr: "Bağımsız Geliştirici (Full Stack)",
        en: "Solo Full Stack Developer"
      },
      status: {
        tr: "Canlıda Kullanıldı & Açık Kaynak",
        en: "Used in Production & Open Source"
      },
      overview: {
        tr: "NişanKare, düğün ve nişan gibi kalabalık organizasyonlarda misafirlerin anlık çektikleri hatıra fotoğraflarını zahmetsizce tek bir Google Drive havuzunda toplayan mikro-SaaS web uygulamasıdır. Masalara yerleştirilen QR kodlar aracılığıyla kullanılır.",
        en: "NişanKare is a micro-web app designed to collect candid event photography from wedding and engagement guests into a centralized Google Drive repository via table QR codes, with zero friction."
      },
      problem: {
        tr: "Özel günlerde davetliler telefonlarıyla çok sayıda samimi fotoğraf çeker; ancak etkinlik bittiğinde bu fotoğraflar katılımcıların telefonlarında kalır. WhatsApp gruplarında paylaşılan fotoğraflar kalite kaybına uğrar ve yüzlerce dosyayı toplamak organizasyon sahipleri için günler süren bir eziyete dönüşür.",
        en: "Guests capture authentic moments on their smartphones, but organizers rarely receive them. Messaging apps compress photos severely, and chasing attendees for uploads days after the celebration is disorganized and time-consuming."
      },
      goals: {
        tr: [
          "Misafirlerin hiçbir uygulama indirmeden veya üye olmadan saniyeler içinde fotoğraf yüklemesini sağlamak.",
          "Fotoğrafları kalite kaybı olmadan orijinal çözünürlükleriyle Google Drive klasörüne aktarmak.",
          "Yükleme sırasında hata oluşması durumunda kullanıcıya anlık durum bildirimi sunmak."
        ],
        en: [
          "Enable instant mobile uploads in seconds without app installs or login walls.",
          "Stream photos at original resolution directly into a designated Google Drive folder without compression.",
          "Provide realtime progress feedback and upload verification for guests."
        ]
      },
      solution: {
        tr: "Next.js ile mobil odaklı, tek ekranlık minimalist bir yükleme arayüzü inşa edildi. Sunucu tarafında Google Cloud Service Account kimlik doğrulama mekanizması kullanılarak, misafirlerin Google hesabı olmasa bile güvenli token ile doğrudan hedef Google Drive klasörüne dosya yüklemesi sağlandı.",
        en: "Constructed an ultra-minimal, mobile-first Next.js upload interface. On the server side, an authenticated Google Cloud Service Account handles direct batch uploads to the host's Drive folder via Google Drive API v3, bypassing the need for guest authentication."
      },
      features: [
        {
          number: "01",
          title: {
            tr: "QR Kod ile Sıfır Kayıt Erişim",
            en: "Zero-Friction QR Access"
          },
          description: {
            tr: "Kullanıcı adı veya şifre gerekmez; masa üzerindeki QR kodu kamerayla taratıp yüklemeye başlamak yeterlidir.",
            en: "No credentials or registration required; scanning the physical QR code opens the upload interface directly."
          }
        },
        {
          number: "02",
          title: {
            tr: "Orijinal Kalitede Google Drive Senkronu",
            en: "Full-Res Google Drive Ingestion"
          },
          description: {
            tr: "Görseller sıkıştırma olmadan doğrudan organizasyon sahibinin Google Drive hesabındaki klasöre depolanır.",
            en: "Uploaded photos stream losslessly directly into the organizer's connected Google Drive folder."
          }
        },
        {
          number: "03",
          title: {
            tr: "Toplu ve Hızlı Dosya Seçimi",
            en: "Multi-File Batch Selection"
          },
          description: {
            tr: "Misafirler galerilerinden tek seferde birden fazla fotoğraf seçerek progress çubuğu ile yükleyebilir.",
            en: "Guests select multiple gallery photos at once, tracked with progress indicators and success confirmation."
          }
        }
      ],
      contributions: [
        {
          category: {
            tr: "Uçtan Uca Geliştirme",
            en: "End-to-End Implementation"
          },
          items: {
            tr: [
              "Fikirden canlı kullanıma kadar tüm mimariyi tek başıma 1 haftalık süreçte kurguladım.",
              "Google Cloud Console üzerinde Service Account oluşturarak Drive API yetkilerini yapılandırdım.",
              "Next.js API route'larında FormData dosya ayrıştırma ve asenkron yükleme pipeline'ını kodladım."
            ],
            en: [
              "Engineered the entire product from concept to live deployment in one week.",
              "Configured Google Cloud Console Service Account credentials and Drive API v3 permissions.",
              "Built server-side streaming pipelines in Next.js API routes for multi-part file parsing."
            ]
          }
        }
      ],
      techStackCategorized: {
        frontend: ["Next.js (React)", "TypeScript", "Tailwind CSS"],
        backend: ["Next.js API Routes", "Google Drive API v3", "Google Cloud Service Account"],
        database: ["Google Drive Cloud Storage"],
        tools: ["Vercel", "Git & GitHub", "Google Cloud Console"]
      },
      architecture: {
        summary: {
          tr: "Mobil misafir tarayıcısı QR kod ile Next.js uygulamasını açar. Seçilen dosyalar Next.js API rotasına iletilir. Sunucu, Google Service Account yetki anahtarıyla Google Drive API'ye güvenli stream açarak dosyaları doğrudan hedef klasöre yazar.",
          en: "The guest scans a physical QR code on mobile. Selected images are dispatched to a Next.js API route which streams bytes directly to Google Drive API v3 using Service Account JWT authentication."
        },
        flow: [
          { from: "Guest Smartphone (QR Scan)", to: "Next.js Web Client", label: "Opens Upload Page" },
          { from: "Web Client", to: "Next.js API Route (/api/upload)", label: "Multipart FormData" },
          { from: "Next.js API", to: "Google Cloud Auth", label: "Service Account JWT" },
          { from: "Next.js API", to: "Google Drive Folder", label: "Lossless Stream Write" }
        ]
      },
      developmentProcess: [
        {
          step: "01",
          title: {
            tr: "Problem Tanımı & Çözüm Mimarisi",
            en: "Problem Scope & Tech Validation"
          },
          description: {
            tr: "Nişan organizasyonu öncesinde misafirlerin giriş bariyeri olmadan nasıl yükleme yapacağı planlandı.",
            en: "Designed zero-login architecture to ensure non-technical event attendees could upload in seconds."
          }
        },
        {
          step: "02",
          title: {
            tr: "Google Cloud & API Entegrasyonu",
            en: "Google Cloud & Drive API Setup"
          },
          description: {
            tr: "Service account anahtarlarıyla API izinleri sınırlandırıldı ve sunucu tarafı yükleme test edildi.",
            en: "Created scoped service account credentials and tested stream payloads against Drive API v3."
          }
        },
        {
          step: "03",
          title: {
            tr: "Mobil UI & Canlı Etkinlik Dağıtımı",
            en: "Mobile UI & Live Event Rollout"
          },
          description: {
            tr: "Vercel üzerinde yayına alındı, masa kartları için QR kodlar basıldı ve etkinlikte yüzlerce fotoğrafla test edildi.",
            en: "Deployed to Vercel, printed QR table cards, and successfully processed event photos in real time."
          }
        }
      ],
      challenges: [
        {
          title: {
            tr: "Google Hesabı Olmayan Misafirler İçin Güvenli Yükleme",
            en: "Anonymous Guest Uploads Without Drive Credentials"
          },
          problem: {
            tr: "Normal Google Drive entegrasyonları her kullanıcının oturum açmasını ister; ancak davetteki misafirlere giriş yaptırmak katılımı sıfıra indirirdi.",
            en: "Standard OAuth flows require every guest to sign into Google, creating unacceptable friction for attendees."
          },
          solution: {
            tr: "OAuth kullanıcı izni yerine Google Cloud Service Account mimarisi kullanıldı; sunucu anahtarıyla tüm yüklemeler yetkilendirilerek misafire şeffaf hale getirildi.",
            en: "Leveraged server-side Google Service Account JWT tokens so uploads execute under organizer permissions anonymously."
          },
          outcome: {
            tr: "Her yaştan misafir, Google hesabı dahi olmadan tek tıkla fotoğraf gönderebildi.",
            en: "Achieved 100% upload accessibility for non-technical guests of all ages."
          }
        }
      ],
      lessonsLearned: {
        tr: [
          "Gerçek bir ihtiyacı hızlı prototipleme ve doğru API seçimiyle birkaç günde çalışan bir çözüme dönüştürmenin gücünü gördüm.",
          "Kullanıcı deneyiminde her gereksiz kayıt adımını kaldırmanın ürün benimsenmesini nasıl katladığını deneyimledim."
        ],
        en: [
          "Demonstrated how rapid prototyping and well-scoped cloud APIs solve real-world problems in days.",
          "Learned the immense UX value of eliminating authentication barriers for public-facing event tools."
        ]
      },
      gallery: [
        {
          url: "/img/nisankare.png",
          caption: {
            tr: "NişanKare - QR Tabanlı Fotoğraf Yükleme Arayüzü",
            en: "NişanKare - QR-Based Mobile Photo Uploader"
          }
        }
      ]
    }
  },
  {
    id: "notlarsende",
    featured: false,
    category: {
      tr: "Akademik Paylaşım Platformu",
      en: "Academic Sharing Platform"
    },
    title: {
      tr: "NotlarSende",
      en: "NotlarSende"
    },
    description: {
      tr: "Üniversite öğrencilerinin ders notlarını dijital ortamda saklamasını ve paylaşmasını sağlayan kapsamlı bir not paylaşım platformudur.",
      en: "A comprehensive note-sharing platform that enables university students to store and share their course notes digitally."
    },
    detailedDescription: {
      tr: "NotlarSende, üniversite öğrencilerinin ders notlarını dijital ortamda saklamasını ve paylaşmasını sağlayan kapsamlı bir not paylaşım platformudur.\n\nGelişmiş arama ve filtreleme özellikleri ile öğrenciler ihtiyaç duydukları ders notlarına kolayca erişebilirler. Kullanıcılar kendi notlarını yükleyebilir, başkalarının notlarını inceleyebilir ve yorum yapabilirler. Django framework'ü ile güvenli ve hızlı bir altyapı sunulur.",
      en: "NotlarSende is a comprehensive academic collaboration platform enabling university students to digitally store, categorize, and discover lecture notes.\n\nFeaturing multi-tier search and filtering, students easily find notes tailored to their university, department, and course codes. Built with the Django framework, it provides secure user authentication and structured document archiving."
    },
    image: "/img/Not.png",
    github: "https://github.com/uygar-gormez28/NotlarSende",
    tags: ["Django", "Python", "HTML5", "CSS3", "JavaScript"],
    documents: [],
    caseStudy: {
      clientOrContext: {
        tr: "Üniversite Öğrencileri & Akademik Topluluk",
        en: "University Students & Academic Community"
      },
      timeline: {
        tr: "Akademik Proje / Bağımsız Geliştirme",
        en: "Academic Project / Independent Build"
      },
      role: {
        tr: "Full Stack Developer (Backend Ağırlıklı)",
        en: "Full Stack Developer (Backend Focused)"
      },
      status: {
        tr: "Tamamlandı & Açık Kaynak",
        en: "Completed & Open Source"
      },
      overview: {
        tr: "NotlarSende, üniversite öğrencilerinin dönem boyunca tuttuğu ders notlarını, vize/final hazırlık özetlerini ve dokümanlarını üniversite, bölüm ve ders kodu hiyerarşisi altında organize edip paylaştığı bir web platformudur.",
        en: "NotlarSende is a structured academic sharing hub where college students organize and share lecture notes, exam prep sheets, and study materials categorized by university, department, and course codes."
      },
      problem: {
        tr: "Öğrencilerin sınav dönemlerinde kaliteli ders notlarına ulaşması çoğunlukla WhatsApp grupları ve kaybolan linkler yüzünden oldukça güçtür. Aranan geçmiş dönem notları bulunamaz ve bilgi paylaşımı düzensizdir.",
        en: "Students struggle to locate reliable lecture notes during exam weeks due to scattered chat threads and broken cloud links. Historical course materials disappear without a searchable catalog."
      },
      goals: {
        tr: [
          "Üniversite, fakülte, bölüm ve ders kodu bazlı hiyerarşik bir dosya indeksleme sistemi kurmak.",
          "Öğrencilerin güvenli profil açıp not yükleyebileceği ve diğer notları oylayabileceği bir yapı oluşturmak.",
          "Python ve Django altyapısıyla güvenli dosya doğrulama ve kullanıcı yetkilendirmesi sağlamak."
        ],
        en: [
          "Build a hierarchical database index linking University → Department → Course → Document.",
          "Provide secure student authentication, file uploading, and peer commentary features.",
          "Utilize Python and Django to validate documents and enforce server-side security."
        ]
      },
      solution: {
        tr: "Django'nun Model-View-Template (MVT) mimarisi kullanılarak ilişkisel bir veri tabanı şeması modellendi. Kullanıcılar yüklemek istedikleri notun ders kodunu ve dönemini seçerek PDF/resim formatında dosya yükleyebilir; gelişmiş arama çubuğu ile tüm içerikler saniyeler içinde taranabilir.",
        en: "Implemented a relational Django MVT architecture with custom models for universities, courses, and materials. Students tag uploads with academic metadata, enabling fast multi-level keyword filtering."
      },
      features: [
        {
          number: "01",
          title: {
            tr: "Hiyerarşik Arama & Filtreleme",
            en: "Hierarchical Search & Filtering"
          },
          description: {
            tr: "Üniversite, bölüm ve ders adına göre dinamik filtreleme motoru ile anında not bulma.",
            en: "Instant note discovery filtered dynamically by university, department, and course titles."
          }
        },
        {
          number: "02",
          title: {
            tr: "Güvenli Öğrenci Oturumu & Profil",
            en: "Secure Student Authentication"
          },
          description: {
            tr: "Django Auth sistemi ile güvenli parola saklama, profil yönetimi ve yüklenen notların takibi.",
            en: "Built on Django Auth for encrypted credentials, profile management, and upload tracking."
          }
        },
        {
          number: "03",
          title: {
            tr: "Doküman Yükleme & Doğrulama",
            en: "Document Upload Validation"
          },
          description: {
            tr: "Sunucu tarafında dosya uzantısı, boyutu ve güvenliği denetlenen dosya yükleme mekanizması.",
            en: "Server-side MIME type and size checks safeguarding against malicious file uploads."
          }
        }
      ],
      contributions: [
        {
          category: {
            tr: "Full Stack Geliştirme",
            en: "Full Stack Implementation"
          },
          items: {
            tr: [
              "Django modellerini (University, Department, Course, Note) ve ilişkisel veritabanı şemasını tasarladım.",
              "Kullanıcı giriş, kayıt ve oturum yönetimi akışlarını Django Auth ile uyguladım.",
              "Ders notları için filtreleme ve arama sorgularını optimize ettim."
            ],
            en: [
              "Architected relational Django models (University, Department, Course, Note) and database schemas.",
              "Implemented student authentication, session lifecycles, and access guards with Django Auth.",
              "Optimized database queries for multi-parameter academic filtering."
            ]
          }
        }
      ],
      techStackCategorized: {
        frontend: ["HTML5", "CSS3 / Bootstrap", "JavaScript (Vanilla)"],
        backend: ["Python", "Django Framework (MVT Architecture)"],
        database: ["SQLite / PostgreSQL", "Django ORM"],
        tools: ["Git & GitHub", "Virtualenv", "VS Code"]
      },
      architecture: {
        summary: {
          tr: "Klasik ve sağlam Django Model-View-Template mimarisi. Kullanıcı istekleri Django URL yönlendiricisi üzerinden filtrelenir; ORM üzerinden veritabanı sorguları yapılarak şablonlara güvenle render edilir.",
          en: "Standard Django Model-View-Template pattern: requests route through Django views, queried via Django ORM, and rendered with server-side templates."
        },
        flow: [
          { from: "Student Browser", to: "Django URL Router", label: "Search & View Requests" },
          { from: "Django Views", to: "Django ORM", label: "Relational Queries" },
          { from: "Django ORM", to: "Database (SQLite/PostgreSQL)", label: "Course & Document Data" },
          { from: "Django Views", to: "Static & Media Storage", label: "PDF / Note Retrieval" }
        ]
      },
      developmentProcess: [
        {
          step: "01",
          title: {
            tr: "İlişkisel Veritabanı Tasarımı",
            en: "Relational Schema Modeling"
          },
          description: {
            tr: "Akademik hiyerarşiyi temsil eden modeller kurgulandı ve migration'lar hazırlandı.",
            en: "Designed relational models reflecting academic hierarchies with foreign key constraints."
          }
        },
        {
          step: "02",
          title: {
            tr: "Yetkilendirme & CRUD İşlemleri",
            en: "Auth & Core CRUD Workflows"
          },
          description: {
            tr: "Not yükleme, listeleme, silme ve kullanıcı profili yetki kontrolleri kodlandı.",
            en: "Programmed file uploading, listing, deletion, and authorization checks in Django."
          }
        },
        {
          step: "03",
          title: {
            tr: "Arama Arayüzü & Testler",
            en: "Search Interface & Testing"
          },
          description: {
            tr: "Arama ve filtreleme formları test edildi; dosya boyutu limitleri doğrulandı.",
            en: "Conducted testing on search queries, file validation rules, and template responsiveness."
          }
        }
      ],
      challenges: [
        {
          title: {
            tr: "Çok Seviyeli Akademik Filtreleme",
            en: "Multi-Level Academic Category Filtering"
          },
          problem: {
            tr: "Bir üniversite seçildiğinde sadece o üniversiteye ait bölümlerin ve ders kodlarının dinamik listelenmesi gerekiyordu.",
            en: "Filtering courses required dynamic dependency so selecting a university only displayed related departments."
          },
          solution: {
            tr: "Django view seviyesinde optimize edilmiş query parametreleri ve ilişkisel `select_related` sorguları kullanılarak gereksiz veritabanı yükü önlendi.",
            en: "Utilized indexed query params and optimized `select_related` ORM calls to ensure sub-millisecond lookups."
          },
          outcome: {
            tr: "Büyük not arşivlerinde bile hızlı ve hatasız arama performansı elde edildi.",
            en: "Achieved instantaneous query response times across nested course catalogs."
          }
        }
      ],
      lessonsLearned: {
        tr: [
          "Python ve Django ekosisteminde MVC/MVT mimarisinin ve Django ORM yeteneklerinin derinlemesine kavranması.",
          "Sunucu taraflı dosya yükleme güvenliği ve kullanıcı girdisi doğrulama prensiplerinin pekiştirilmesi."
        ],
        en: [
          "Gained solid proficiency in Django's MVT pattern, ORM query optimizations, and form validations.",
          "Reinforced principles of server-side file sanitation and defensive security checks."
        ]
      },
      gallery: [
        {
          url: "/img/Not.png",
          caption: {
            tr: "NotlarSende - Akademik Not Paylaşım Ana Sayfası",
            en: "NotlarSende - Academic Note Sharing Homepage"
          }
        }
      ]
    }
  },
  {
    id: "lotus-ai-internship",
    featured: false,
    category: {
      tr: "Veri Bilimi & Makine Öğrenmesi",
      en: "Data Science & Machine Learning"
    },
    title: {
      tr: "LotusAI Staj Portföyü",
      en: "LotusAI Internship Portfolio"
    },
    description: {
      tr: "LotusAI'de 3 aylık KNIME & Data Science & Machine Learning stajı sürecinde geliştirdiğim projeler ve öğrendiklerim.",
      en: "Projects and learnings developed during my 3-month KNIME, Data Science, and Machine Learning internship at LotusAI."
    },
    detailedDescription: {
      tr: "LotusAI'da geçirdiğim 3 aylık staj sürecinde KNIME, veri bilimi ve makine öğrenmesi alanlarında yoğun bir deneyim yaşadım.\n\nStaj boyunca Python, machine learning, SQLite, Plotly ve Seaborn gibi teknolojileri kullanarak 5 farklı makine öğrenmesi projesi tamamladım. Veri görselleştirme, model eğitimi ve gerçek dünya problemlerine çözüm üretme deneyimi kazandım. Ayrıca fitoterapi ve yapay zeka kesişiminde akademik bir araştırma ödevi gerçekleştirdim.",
      en: "During my 3-month internship at LotusAI, I gained intense experience across KNIME ETL workflows, data science pipelines, and machine learning models.\n\nI completed 5 distinct machine learning tasks leveraging Python, SQLite, Plotly, and Seaborn. I worked on feature engineering, model training, and analytical reporting, alongside an academic research study on AI-assisted phytotherapy."
    },
    image: "/img/Lotus.png",
    github: "https://github.com/uygar-gormez28/LotusAI-Internship-Portfolio",
    tags: ["Python", "Machine Learning", "SQLite", "Plotly", "Seaborn", "KNIME"],
    documents: [],
    caseStudy: {
      clientOrContext: {
        tr: "Lotus-AI Yapay Zeka ve Bilişim Çözümleri A.Ş.",
        en: "Lotus-AI Artificial Intelligence and IT Solutions Inc."
      },
      timeline: {
        tr: "Kasım 2025 - Ocak 2026 (3 Ay)",
        en: "November 2025 - January 2026 (3 Months)"
      },
      role: {
        tr: "Veri Bilimi & Yapay Zekâ Stajyeri",
        en: "Data Science & AI Intern"
      },
      status: {
        tr: "Başarıyla Tamamlandı",
        en: "Successfully Completed"
      },
      overview: {
        tr: "Lotus-AI stajım kapsamında; kurumsal veri analitiği, KNIME ile iş akışları geliştirme ve Python kütüphaneleriyle 5 farklı makine öğrenmesi problemini modelleyip görselleştirme süreçlerinde görev aldım.",
        en: "During my Lotus-AI internship, I designed enterprise data pipelines, built automated KNIME data workflows, and engineered machine learning solutions across 5 distinct problem domains with Python."
      },
      problem: {
        tr: "Ham iş verileri; eksik değerler, aykırı gözlemler ve tutarsız formatlar nedeniyle doğrudan makine öğrenmesi modellerine verilemiyordu. Verinin temizlenmesi, normalize edilmesi ve görsel raporlarla karar vericilere aktarılması gerekiyordu.",
        en: "Raw enterprise datasets suffered from missing attributes, outliers, and schema inconsistencies that prevented direct model training. Robust data cleaning, normalization, and visual insight reporting were essential."
      },
      goals: {
        tr: [
          "KNIME platformu üzerinde tekrarlanabilir veri temizleme ve ETL akışları inşa etmek.",
          "Python (Pandas, Scikit-learn, SQLite) ile 5 farklı ML problemini çözmek ve model metriklerini değerlendirmek.",
          "Plotly ve Seaborn ile veri odaklı teknik görselleştirmeler hazırlamak.",
          "Yapay zekâ ve fitoterapi alanındaki akademik araştırmaya veri analitiğiyle katkı sunmak."
        ],
        en: [
          "Construct reusable data transformation and ETL workflows inside KNIME.",
          "Train and evaluate 5 distinct ML models using Python, Pandas, and Scikit-learn.",
          "Generate informative data visualizations with Plotly and Seaborn.",
          "Contribute analytical research at the intersection of AI and phytotherapy."
        ]
      },
      solution: {
        tr: "Veri hazırlama adımı KNIME görsel veri akışları ve Python Pandas betikleriyle otomatikleştirildi. Temizlenen veriler SQLite veritabanına aktarılarak sınıflandırma ve regresyon modelleri eğitildi; sonuçlar Plotly ve Matplotlib grafikleriyle raporlandı.",
        en: "Engineered automated data preprocessing pipelines combining KNIME visual workflows with Pandas. Validated tabular data into SQLite, trained supervised learning algorithms, and reported findings with interactive Plotly dashboards."
      },
      features: [
        {
          number: "01",
          title: {
            tr: "5 Farklı Makine Öğrenmesi Modeli",
            en: "5 Distinct Machine Learning Models"
          },
          description: {
            tr: "Sınıflandırma ve regresyon modelleri; doğruluk, karmaşıklık matrisi ve F1 skoru ile test edildi.",
            en: "Classification and regression models evaluated rigorously with accuracy, confusion matrices, and F1 scores."
          }
        },
        {
          number: "02",
          title: {
            tr: "KNIME ile Görsel ETL Akışları",
            en: "KNIME Automated Visual Workflows"
          },
          description: {
            tr: "Büyük veri setlerini temizleyen, filtreleyen ve dönüştüren kurumsal KNIME pipeline'ları.",
            en: "Enterprise KNIME pipelines that clean, filter, and normalize raw tabular data automatically."
          }
        },
        {
          number: "03",
          title: {
            tr: "İnteraktif Veri Görselleştirme",
            en: "Interactive Data Visualization"
          },
          description: {
            tr: "Plotly, Seaborn ve Matplotlib kullanarak model metrikleri ve korelasyon ısı haritaları oluşturuldu.",
            en: "Built correlation heatmaps and metric charts with Plotly, Seaborn, and Matplotlib."
          }
        }
      ],
      contributions: [
        {
          category: {
            tr: "Veri Analitiği & Modelleme",
            en: "Data Science & Modeling"
          },
          items: {
            tr: [
              "5 farklı ML projesinde veri ön işleme, öznitelik mühendisliği ve model eğitim süreçlerini yönettim.",
              "KNIME üzerinde veri akış şemalarını tasarlayarak tekrarlayan veri temizleme adımlarını kısalttım.",
              "Günlük faaliyet raporları ve haftalık teknik sunumlarla proje ilerleyişini ekibe aktardım."
            ],
            en: [
              "Led data preprocessing, feature engineering, and model training for 5 distinct ML projects.",
              "Constructed KNIME data workflows that reduced redundant data cleaning steps.",
              "Documented progress through daily activity reports and weekly technical presentations."
            ]
          }
        }
      ],
      techStackCategorized: {
        frontend: ["Plotly (Interactive Dashboards)", "Jupyter Notebook"],
        backend: ["Python (Pandas, NumPy, Scikit-learn)", "KNIME Analytics Platform"],
        database: ["SQLite", "Relational Data Frames"],
        tools: ["Git & GitHub", "Matplotlib", "Seaborn"]
      },
      architecture: {
        summary: {
          tr: "Ham veri setleri KNIME ve Pandas üzerinde temizlenip normalize edilir. SQLite veritabanında saklanan öznitelikler Scikit-learn modellerine beslenir; sonuç metrikleri Plotly görselleştirmeleriyle çıktıya dönüştürülür.",
          en: "Raw tabular data is cleansed and transformed via KNIME and Pandas, stored in SQLite, passed into Scikit-learn pipelines, and rendered into Plotly visualizations."
        },
        flow: [
          { from: "Raw Datasets", to: "KNIME / Pandas Preprocessing", label: "Cleaning & Imputation" },
          { from: "Clean Features", to: "SQLite Database", label: "Structured Storage" },
          { from: "SQLite Data", to: "Scikit-Learn ML Models", label: "Training & Hyperparameter Tuning" },
          { from: "Trained Models", to: "Plotly / Seaborn Reports", label: "Metrics & Heatmaps" }
        ]
      },
      developmentProcess: [
        {
          step: "01",
          title: {
            tr: "Veri Keşfi & Eksik Veri Analizi",
            en: "Data Discovery & EDA"
          },
          description: {
            tr: "Veri setlerindeki korelasyonlar, eksik değerler ve veri dağılımları incelendi.",
            en: "Audited dataset distributions, missingness patterns, and cross-feature correlations."
          }
        },
        {
          step: "02",
          title: {
            tr: "KNIME Pipeline & Model Eğitimi",
            en: "KNIME Pipelines & Training"
          },
          description: {
            tr: "Veri akışları kuruldu, Scikit-learn modelleri eğitildi ve parametre optimizasyonu yapıldı.",
            en: "Constructed workflow nodes, trained classifiers/regressors, and tuned hyperparameters."
          }
        },
        {
          step: "03",
          title: {
            tr: "Görselleştirme & Sunum",
            en: "Visualization & Technical Reporting"
          },
          description: {
            tr: "Grafikler hazırlandı, staj değerlendirme sunumu yapıldı ve GitHub üzerinde dokümante edildi.",
            en: "Generated publication-ready charts and presented technical deliverables to mentors."
          }
        }
      ],
      challenges: [
        {
          title: {
            tr: "Dengesiz Veri Dağılımlarında Model Doğruluğu",
            en: "Imbalanced Class Distributions in Classification"
          },
          problem: {
            tr: "Sınıflandırma problemlerinde sınıflar arası dengesizlik, modellerin baskın sınıfa aşırı uyum sağlamasına neden oluyordu.",
            en: "Class imbalance in real-world tabular data skewed classifiers toward majority classes."
          },
          solution: {
            tr: "Yalnızca doğruluk (accuracy) metriğiyle yetinmeyip F1-Score ve Confusion Matrix analizleri uygulandı; örnekleme yöntemleriyle model dengesi korundu.",
            en: "Evaluated models with Precision-Recall and F1 metrics instead of raw accuracy, applying resampling techniques."
          },
          outcome: {
            tr: "Her iki sınıfı da güvenle tahmin edebilen dengeli modeller elde edildi.",
            en: "Achieved balanced predictive accuracy across both majority and minority targets."
          }
        }
      ],
      lessonsLearned: {
        tr: [
          "Veri bilimi projelerinde başarının %80'inin veri temizleme ve doğru öznitelik mühendisliğinden geçtiğini kavradım.",
          "KNIME gibi endüstriyel veri madenciliği araçlarının kurumsal iş akışlarına hız kazandırdığını deneyimledim."
        ],
        en: [
          "Learned that in machine learning, 80% of project success lies in robust data cleansing and feature selection.",
          "Gained firsthand experience with industrial ETL tools like KNIME in enterprise contexts."
        ]
      },
      gallery: [
        {
          url: "/img/Lotus.png",
          caption: {
            tr: "LotusAI Staj Portföyü - Veri Analizi ve Model Çıktıları",
            en: "LotusAI Internship Portfolio - ML Metrics & Analytics"
          }
        }
      ]
    }
  },
  {
    id: "akgun",
    featured: false,
    category: {
      tr: "E-Ticaret Web Uygulaması",
      en: "E-Commerce Web Application"
    },
    title: {
      tr: "AKGÜN A.Ş",
      en: "AKGÜN A.Ş"
    },
    description: {
      tr: "Frontend ve web geliştirme becerilerimi pekiştirmek amacıyla geliştirdiğim sepet ve ürün akışına sahip modern e-ticaret uygulaması.",
      en: "Modern e-commerce application featuring shopping cart and product flow developed to practice and consolidate frontend skills."
    },
    detailedDescription: {
      tr: "Frontend ve web geliştirme becerilerimi pekiştirmek amacıyla geliştirdiğim Akgün Ticaret e-ticaret uygulaması. Proje kapsamında React, TypeScript ve modern web teknolojilerini kullanarak dinamik ürün listeleme, sepet yönetimi ve responsive arayüz tasarımları üzerinde pratik yapma şansı edindim.",
      en: "Akgün Ticaret e-commerce application built to consolidate modern frontend and TypeScript engineering skills. The project features dynamic product categorization, persistent shopping cart state, and responsive layouts."
    },
    image: "/img/akgun.png",
    github: "https://github.com/uygar-gormez28/AKGUN-TICARET",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    documents: [],
    caseStudy: {
      clientOrContext: {
        tr: "Kişisel Mühendislik Projesi / Pratik",
        en: "Personal Engineering Project / Practice"
      },
      timeline: {
        tr: "2 Hafta",
        en: "2 Weeks"
      },
      role: {
        tr: "Frontend Developer",
        en: "Frontend Developer"
      },
      status: {
        tr: "Tamamlandı & Açık Kaynak",
        en: "Completed & Open Source"
      },
      overview: {
        tr: "AKGÜN A.Ş, modern bir e-ticaret platformunun temel işlevlerini (ürün arama, kategori filtreleme, dinamik sepet yönetimi ve sipariş özeti) React ve TypeScript mimarisiyle hayata geçiren bir frontend projesidir.",
        en: "AKGÜN A.Ş is a frontend e-commerce web application implementing core digital retail workflows (product discovery, category filtering, persistent cart state, and order summary) using React and TypeScript."
      },
      problem: {
        tr: "E-ticaret arayüzlerinde sepet durumunun sayfa yenilendiğinde kaybolmaması, dinamik fiyat ve miktar hesaplamalarının tip güvenliğiyle hatasız yapılması ve mobil cihazlarda akıcı kalması kritik bir mühendislik gereksinimidir.",
        en: "E-commerce UIs require reliable state persistence across reloads, strict type-safety for price and quantity calculations, and jank-free mobile responsiveness."
      },
      goals: {
        tr: [
          "TypeScript ile tip güvenli bir sepet ve ürün veri modeli inşa etmek.",
          "LocalStorage senkronizasyonu ile sepet durumunu tarayıcı hafızasında kalıcı tutmak.",
          "Tailwind CSS ile modern, temiz ve modüler bileşenler geliştirmek."
        ],
        en: [
          "Construct strict TypeScript interfaces for cart and product data structures.",
          "Persist cart items across browser sessions with LocalStorage synchronization.",
          "Deliver a modular, responsive UI component system with Tailwind CSS."
        ]
      },
      solution: {
        tr: "React custom hook yapıları (useCart) kullanılarak sepet iş mantığı arayüz bileşenlerinden ayrıştırıldı. TypeScript arayüzleri ile ürün ekleme, çıkarma ve miktar güncelleme işlemleri hatasız hale getirildi; Tailwind CSS ile modern kartlar tasarlandı.",
        en: "Decoupled shopping cart business logic into reusable custom React hooks (`useCart`), enforced strict TypeScript interfaces across state transitions, and built modular product grids with Tailwind CSS."
      },
      features: [
        {
          number: "01",
          title: {
            tr: "Dinamik Sepet Yönetimi",
            en: "Dynamic Shopping Cart Management"
          },
          description: {
            tr: "Ürün ekleme, adet artırma/azaltma, sepetten çıkarma ve anlık toplam fiyat hesaplama.",
            en: "Add-to-cart, quantity adjustments, item removal, and instant price total calculations."
          }
        },
        {
          number: "02",
          title: {
            tr: "Kalıcı Durum (LocalStorage Sync)",
            en: "Persistent Cart State"
          },
          description: {
            tr: "Sayfa yenilendiğinde veya tarayıcı kapatıldığında sepet verilerinin korunması.",
            en: "Preserves cart items across page reloads and browser sessions via LocalStorage."
          }
        },
        {
          number: "03",
          title: {
            tr: "Tip Güvenli TypeScript Mimarisi",
            en: "Type-Safe Architecture"
          },
          description: {
            tr: "Ürün katalogları ve sepet aksiyonları için katı TypeScript tip tanımları.",
            en: "Strict interface contracts for product payloads, discounts, and dispatch actions."
          }
        }
      ],
      contributions: [
        {
          category: {
            tr: "Frontend & Durum Yönetimi",
            en: "Frontend & State Architecture"
          },
          items: {
            tr: [
              "Tüm e-ticaret bileşenlerini React 18 ve TypeScript ile sıfırdan geliştirdim.",
              "Custom hook mimarisiyle sepet hesaplamalarını ve veri kalıcılığını yönettim.",
              "Tailwind CSS ile responsive ürün listeleme ve sepet çekmecesi tasarladım."
            ],
            en: [
              "Built all retail components from scratch using React 18 and TypeScript.",
              "Engineered custom state management hooks for cart arithmetic and storage sync.",
              "Designed responsive product grids and cart slide-overs with Tailwind CSS."
            ]
          }
        }
      ],
      techStackCategorized: {
        frontend: ["React 18", "TypeScript", "Tailwind CSS"],
        backend: ["Client-Side State Engine"],
        database: ["Browser LocalStorage"],
        tools: ["Vite", "Git & GitHub", "ESLint"]
      },
      architecture: {
        summary: {
          tr: "Vite tabanlı React tek sayfa uygulaması. Ürün verileri tipleştirilmiş modelden okunur; sepet operasyonları useCart hook'u üzerinden hem React state'ine hem de LocalStorage'a senkronize edilir.",
          en: "Vite-powered React SPA: typed product data flows through presentation components, while cart interactions sync reactively between React state and LocalStorage via custom hooks."
        },
        flow: [
          { from: "Product Catalog", to: "Product Card Components", label: "Typed Props" },
          { from: "User Action (Add/Remove)", to: "useCart Custom Hook", label: "State Dispatch" },
          { from: "useCart Hook", to: "Browser LocalStorage", label: "Persistent Sync" },
          { from: "useCart Hook", to: "Cart Drawer / Header", label: "Reactive Counter & Total" }
        ]
      },
      developmentProcess: [
        {
          step: "01",
          title: {
            tr: "TypeScript Tipleri & Modelleme",
            en: "Type Definitions & Modeling"
          },
          description: {
            tr: "Product ve CartItem arayüzleri, sepet aksiyon tipleri tanımlandı.",
            en: "Defined strict Product, CartItem, and Action interfaces in TypeScript."
          }
        },
        {
          step: "02",
          title: {
            tr: "useCart Hook & Sepet Mantığı",
            en: "useCart Hook & Logic"
          },
          description: {
            tr: "Sepet hesaplamaları, LocalStorage okuma/yazma ve durum güncellemeleri kodlandı.",
            en: "Programmed cart arithmetic, LocalStorage syncing, and error boundaries."
          }
        },
        {
          step: "03",
          title: {
            tr: "Arayüz Tasarımı & Testler",
            en: "UI Styling & Testing"
          },
          description: {
            tr: "Tailwind ile modern kartlar kodlandı; mobil uyumluluk ve uç durumlar test edildi.",
            en: "Styled responsive cards with Tailwind and verified edge cases like empty carts."
          }
        }
      ],
      challenges: [
        {
          title: {
            tr: "Sepet Durumunun Senkronizasyonu & Sayısal Hesaplama",
            en: "Cart State Synchronization and Float Precision"
          },
          problem: {
            tr: "Adet güncellemelerinde toplam tutarın ve miktar sınırlarının tutarlı kalması gerekiyordu.",
            en: "Ensuring item counters and price summaries remained mathematically consistent across rapid user clicks."
          },
          solution: {
            tr: "Immutable state yaklaşımları ve TypeScript korumaları ile sepet hesaplamaları izole bir reducer mantığıyla yönetildi.",
            en: "Applied immutable state updates and explicit numeric rounding within an isolated custom hook."
          },
          outcome: {
            tr: "Hızlı tıklamalarda dahi hatasız, akıcı bir sepet deneyimi elde edildi.",
            en: "Guaranteed robust, zero-glitch cart arithmetic across all interaction speeds."
          }
        }
      ],
      lessonsLearned: {
        tr: [
          "TypeScript'in büyük UI projelerinde olası runtime hatalarını henüz geliştirme aşamasında nasıl önlediğini pekiştirdim.",
          "Custom hook'lar ile arayüz katmanı ile iş mantığını birbirinden temiz şekilde ayırmanın mimari faydasını gördüm."
        ],
        en: [
          "Solidified how TypeScript interfaces eliminate runtime exceptions during complex state mutations.",
          "Appreciated the architectural clean-code benefits of decoupling business state into custom hooks."
        ]
      },
      gallery: [
        {
          url: "/img/akgun.png",
          caption: {
            tr: "AKGÜN A.Ş - E-Ticaret Ürün Listeleme Arayüzü",
            en: "AKGÜN A.Ş - E-Commerce Product Listing UI"
          }
        }
      ]
    }
  }
];
