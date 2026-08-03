import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const posts = [
  {
    id: 5,
    title: {
      tr: "Mezuniyet 5 Yıl ne çabuk bitti?",
      en: "The 5-Year Path to Computer Engineering"
    },
    excerpt: {
      tr: "Hazırlık sınıfından mezuniyete, Nişantaşı Üniversitesi Bilgisayar Mühendisliği bölümünde geçen 5 yıllık yolculuğum ve biriktirdiğim anılar.",
      en: "My 5-year journey in Computer Engineering at Nişantaşı University, from preparatory school to graduation, and the memories I accumulated."
    },
    date: {
      tr: "17 Temmuz 2026",
      en: "July 17, 2026"
    },
    readTime: "6 min read",
    author: "Uygar Görmez",
    category: {
      tr: "Kariyer",
      en: "Career"
    },
    image: "/img/mezuniyet.png",
    content: {
      tr: `Üniversite tercih döneminde açıkçası ne Nişantaşı Üniversitesinde okuyacağımı ne de hazırlık sınıfına kalacağımı düşünüyordum.

Hayat bazen planladığımız gibi ilerlemiyor.

Bir anda kendimi burada buldum ve geriye dönüp baktığımda bunun iyi ki böyle olduğunu düşünüyorum.

İlk yılımı, ileride iş hayatında bana mutlaka faydası olacağını düşündüğüm İngilizce hazırlık okuyarak geçirdim. O yıl sadece İngilizce öğrenmedim; bugün hâlâ görüştüğüm, hayatım boyunca unutmayacağım dostluklar da edindim.

Sonra bölüm başladı.

Vizeler, finaller, bitmeyen ödevler, laboratuvarlar...

Şafak, Ataberk ve Orkun ile defalarca aynı cümleyi kurduk:

"Ulan bu dersi nasıl geçeceğiz?"

Ama üniversite benim için sadece derslerden ibaret değildi.

Bir yandan kendimi geliştirmeye çalıştım.

Stajlar aradım.

Projeler geliştirdim.

Gerçek ürünlerde görev aldım.

Kod yazdım.

Hata yaptım.

Tekrar öğrendim.

Bazen okuldan çıkıp doğrudan staja gittim, bazen geceleri proje yetiştirdim.

Her deneyim bana yeni bir şey kattı.

Üniversitede de unutamayacağım birçok anı biriktirdim.

Ali Hocayla fikir ayrılığı yaşadığım dersler oldu.

Zafer Hocanın dersinden hayatımdaki tek bütünleme sınavına girdim.

Ulaş Hocanın anlattığı dersleri ise gerçekten büyük bir ilgiyle dinledim.

Nişantaşı Üniversitesinin neredeyse her koridorunda vakit geçirdim. Kütüphanesinde saatlerce çalıştım, arkadaşlarımla sayısız anı biriktirdim.

Ve zaman sandığımdan çok daha hızlı geçti.

Bir bakmışım, hazırlık dahil tam 5 yıl geride kalmış.

17 Temmuz'da kepimi havaya attığımda büyük bir mutluluk vardı.

Ama dürüst olmak gerekirse, biraz da hüzün...

Çünkü insan, yıllarca neredeyse her gün gittiği bir yere, kurduğu dostluklara ve yaşadığı anılara kolay kolay veda edemiyor.

Bugün artık Bilgisayar Mühendisliği mezunuyum.

Üniversite bana yalnızca bir diploma vermedi.

Dostluklar kazandırdı.

Deneyimler kazandırdı.

Bazen başarısız olmayı, bazen yeniden başlamayı öğretti.

Ve en önemlisi, bugün olduğum kişiye dönüşmemde büyük bir pay sahibi oldu.

Her şey için teşekkürler, Nişantaşı Üniversitesi.

Yeni bir sayfa başlıyor.`,
      en: `During the university application period, I honestly didn't think I would study at Nişantaşı University or spend a year in the English preparatory class.

Sometimes life doesn't go as planned.

Suddenly, I found myself here, and looking back, I'm glad it happened this way.

I spent my first year in English prep class, which I thought would definitely benefit me in my future career. That year, I didn't just learn English; I also made friendships that I still maintain today and will never forget.

Then the department classes started.

Midterms, finals, endless homework assignments, labs...

Şafak, Ataberk, and Orkun and I said the same sentence multiple times:

"Man, how are we going to pass this class?"

But university was not just about classes for me.

At the same time, I tried to improve myself.

I searched for internships.

I developed projects.

I worked on real products.

I coded.

I made mistakes.

I relearned.

Sometimes I went directly to an internship after school, sometimes I worked through the nights to finish projects.

Every experience added something new to my life.

I accumulated many unforgettable memories at the university as well.

There were classes where I had differences of opinion with Mr. Ali.

I took my only make-up exam in my life in Mr. Zafer's class.

And I listened to the lectures by Mr. Ulaş with great interest.

I spent time in almost every corridor of Nişantaşı University. I studied in its library for hours, making countless memories with my friends.

And time passed much faster than I thought.

Suddenly, 5 full years had passed, including the prep year.

When I threw my graduation cap into the air on July 17, there was great happiness.

But to be honest, also a bit of sadness...

Because it is not easy to say goodbye to a place you went to almost every day for years, to the friendships you built, and the memories you lived.

Today, I am a graduate of Computer Engineering.

University didn't just give me a diploma.

It brought me friendships.

It gave me experience.

It taught me sometimes to fail, and sometimes to start over.

And most importantly, it played a big part in who I am today.

Thank you for everything, Nişantaşı University.

A new chapter begins.`
    }
  },
  {
    id: 4,
    title: {
      tr: "Max Potential Stajım: Bir Telefonla Başlayan Yolculuk",
      en: "My Max Potential Internship: A Journey That Started with a Phone Call"
    },
    excerpt: {
      tr: "Belediyedeki zorunlu stajım devam ederken okuldan gelen beklenmedik telefonla başlayan ve Max Potential'da Certifi projesiyle devam eden staj deneyimim.",
      en: "My internship experience at Max Potential starting with an unexpected phone call while interning at the municipality, and continuing with the Certifi project."
    },
    date: {
      tr: "1 Temmuz 2026",
      en: "July 1, 2026"
    },
    readTime: "5 min read",
    author: "Uygar Görmez",
    category: {
      tr: "Kariyer",
      en: "Career"
    },
    image: "/img/max-potential.png",
    imageClass: "object-contain bg-[#1b1b1b]",
    content: {
      tr: `Belediyedeki zorunlu stajım devam ederken okuldan beklemediğim bir telefon aldım.

Bir yazılım şirketiyle yürütülecek yeni bir proje için öğrenci aranıyordu ve mülakata katılmam istendi. Görüşmeleri tamamladıktan sonra adaylar arasından seçildim.

Aslında önümde bir karar vardı.

Zorunlu stajımın bitmesine yaklaşık bir ay kalmıştı. Mevcut düzenime devam edebilirdim ya da özel sektörde gerçek bir ürün geliştirme sürecinin parçası olabilmek için yeni bir risk alabilirdim.

İkinci yolu seçtim.

Belediyedeki çalışma arkadaşlarımla vedalaştıktan sonra uzaktan çalışarak Max Potential ekibine katıldım. Bu süreçte takım liderim Can Ortak ile birlikte, şirketin yeni nesil LMS platformu olan Certifi üzerinde çalışmaya başladım.

Yaklaşık iki ay boyunca yalnızca kod yazmadım; gerçek bir yazılım ürününün nasıl tasarlandığını, geliştirildiğini ve olgunlaştırıldığını deneyimledim.

Projede ağırlıklı olarak Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Vercel ve Git/GitHub teknolojileriyle çalıştım. Eğitim yönetim sistemi mimarisi, rol bazlı yetkilendirme, içerik yönetimi, beyaz etiket (white-label) yapı, dosya yönetimi ve modern frontend geliştirme süreçleri üzerine yoğunlaştım.

Süreç boyunca Hamdi Bey ve Gökhan Bey ile düzenli haftalık toplantılara katıldım, projenin teknik yönü kadar iş tarafını da yakından gözlemleme fırsatı buldum. Veritabanı tarafında ise Berk ile birlikte çalışarak birçok geliştirmeyi ortak şekilde ilerlettik.

Kolay bir süreç değildi.

Bazı geceler saatlerce tek bir problemi çözmeye çalıştım. Defalarca tasarım değiştirdim, kod refactor ettim, yeni teknolojiler öğrendim ve bazen sabaha kadar çalıştığım günler oldu.

Ama dönüp baktığımda bunun karşılığını fazlasıyla aldığımı düşünüyorum.

Bu staj bana sadece teknik bilgi kazandırmadı; sorumluluk almayı, ekip içinde üretmeyi, profesyonel yazılım geliştirme kültürünü ve bir ürünün gerçekten nasıl ortaya çıktığını öğretti.

Bugün geriye baktığımda, kariyerimdeki en değerli deneyimlerden biri olarak görüyorum.`,
      en: `While my mandatory internship at the municipality was continuing, I received an unexpected phone call from my university.

They were looking for a student for a new project to be carried out with a software company, and I was asked to attend an interview. After completing the interviews, I was selected among the candidates.

Actually, I had a decision to make.

There was about a month left until the end of my mandatory internship. I could continue with my current routine, or I could take a new risk to be part of a real product development process in the private sector.

I chose the second path.

After saying goodbye to my colleagues at the municipality, I joined the Max Potential team, working remotely. In this process, together with my team lead Can Ortak, I started working on Certifi, the company's next-generation LMS platform.

For about two months, I didn't just write code; I experienced how a real software product is designed, developed, and matured.

In the project, I mainly worked with Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Vercel, and Git/GitHub technologies. I focused on learning management system architecture, role-based access control (RBAC), content management, white-label structure, file management, and modern frontend development processes.

Throughout the process, I attended regular weekly meetings with Mr. Hamdi and Mr. Gökhan, finding the opportunity to closely observe the business side of the project as much as its technical side. On the database side, I worked with Berk, developing many features in collaboration.

It wasn't an easy process.

Some nights, I spent hours trying to solve a single problem. I changed designs multiple times, refactored code, learned new technologies, and there were days when I worked until morning.

But looking back, I think I got more than my share in return.

This internship didn't just give me technical knowledge; it taught me how to take responsibility, produce within a team, professional software development culture, and how a product actually comes to life.

Looking back today, I see it as one of the most valuable experiences of my career.`
    }
  },
  {
    id: 3,
    title: {
      tr: "G.O.P Belediyesi | Bilgi İşlem Müdürlüğü Yeni IT stajım",
      en: "My New IT Internship at G.O.P Municipality | IT Department"
    },
    excerpt: {
      tr: "Sektörde deneyim kazanıp kendimi daha fazla geliştirmek için bu kez işin mutfağındayım.",
      en: "Getting hands-on in the computer hardware side this time, to gain experience and grow further in the industry."
    },
    date: {
      tr: "9 Mart 2026",
      en: "March 9, 2026"
    },
    readTime: "4 min read",
    author: "Uygar Görmez",
    category: {
      tr: "Kariyer",
      en: "Career"
    },
    image: "/img/Kasa2.jpeg",
    content: {
      tr: `Zorunlu stajıma başladım. 

Herkes farkındadır ki staj bulma süreci aşırı iğrenç bir şey. Ben son iki yılımı bunu yaparak geçirdiğim için tonla yere başvur reddedil veya hiç cevap almama durumlarına alışkınım yinede daha önce güzel bir tanesini tutturup LotusAİ da staj yapmıştım. Şuan ki olduğum yerden memlun olsamda belki bir aylık falan başka bir yerede geçebilirim bu konuda arayışıma devam edeceğim.

Güncel olarak yaptığım staja gelmem gerekirse

Şuan Gaziosman Paşa Belediyesinin Bilgi işlem müdürliğümün İT kısmında staj yapıyorum.Kesinlikle istediğim bu değildi hatta ilk bir kaç gün baya baya mutsuzdum istemediğim bir şeyi yapmaktan sonuç da ben işin yazılım kısmında olan birisiydim. Bazı tanıdıklarık yüksek yerlerde onlara verilen maslarda bilgisayarları ile kod yazarken bana burada olmak doğru gelmiyordu. 

Eh yanılmışım. İşin en temelinin tozunu yutmak ayağanın yere sağlam basması iyi oluyor. Kasa içinde ki işlemci , ekran kartı ve ram gibi şeyler ile uğraşırken artık kullandığım teknolojilerle olan (React, Typescript ,SQL , Python) gibi aralarında ki ilişki kafamda oturmaya başladı.

Üstüne zaten ünivetsite hayatında da kendimi daima kendi geliştiren birisi olduğum için burada da bunu yapmaya devam ediyorum. Boş zamanlarımda ki genelde oluyor. Yazılım çalışıyorum.
Sürecim sabah gel gün içinde ki işlerş yap boş vakitte yazılım çalış ( Güncel olarak Typescript-React-native) eve geçince dd proje ile uğraş şeklinde gidiyor.

Ama işin en güzel kısmı orada tanıştığım insanlar. Bana bir şeyler katıyorlar. Hem insan olarak hemde sektör ile alakalı mesela Mustafa bey ile Docker, sanal makineler veya ortak belediye sistemi hakkında konuşmalarım yada benim gibi Bilgisayar Mühendisi olan Murat bey ile olan sohbetlerim (bir oyu. geliştirme bunun işlemci yükü , vue mi yoksa react mı gibi) bana bilgi olarak çok şey katıyor

Kısaca başta ben buraya ait değilim desemde bana baya bir şeyler kattığı/katacağı bir gerçek. `,
      en: `I started my mandatory internship.

Everyone knows that the internship hunting process is extremely exhausting. Since I spent my last two years doing this, I am used to applying to tons of places, getting rejected, or receiving no replies at all. Nevertheless, I managed to get a good one before at LotusAI. Although I am happy with my current place, I might move to another place for a month or so, and I will continue my search in this regard.

Coming to my current internship:

I am currently interning in the IT department of the Gaziosmanpaşa Municipality. This was definitely not what I wanted, and for the first few days, I was quite unhappy about doing something I didn't want. Some of my acquaintances are coding on laptops at desks in high positions, so being here didn't feel right to me.

Well, I was wrong. Getting hands-on with the very basics and getting some dust on my hands is good for keeping my feet firmly on the ground. Dealing with hardware like processors, graphics cards, and RAM inside computer cases has helped me understand the relationship between them and the software technologies I use (React, TypeScript, SQL, Python).

Furthermore, since I am someone who always self-develops during university life, I continue to do so here. During my free time, which happens often, I study software engineering. My routine is: arrive in the morning, do the tasks given during the day, study software in free time (currently TypeScript-React-Native), and work on projects when I get home.

But the best part is the people I meet there. They add value to my life. Both as individuals and in relation to the industry—for example, my discussions with Mr. Mustafa about Docker, virtual machines, or the shared municipality system, or my conversations with Mr. Murat, who is a Computer Engineer like me (about game development, CPU load, Vue vs React), teach me a lot.

In short, even though I initially said "I don't belong here," it is a fact that it has taught and will continue to teach me a lot.`
    }
  },
  {
    id: 1,
    title: {
      tr: "LotusAI Gönüllü Staj Deneyimim: Veri Bilimi ve Makine Öğrenmesi",
      en: "My Volunteer Internship Experience at LotusAI: Data Science and Machine Learning"
    },
    excerpt: {
      tr: "LotusAI'de 3 aylık KNIME, Data Science ve Machine Learning stajı sürecinde öğrendiklerim ve deneyimlerim.",
      en: "My learnings and experiences during my 3-month KNIME, Data Science, and Machine Learning internship at LotusAI."
    },
    date: {
      tr: "17 Ocak 2025",
      en: "January 17, 2025"
    },
    readTime: "8 min read",
    author: "Uygar Görmez",
    category: {
      tr: "Kariyer",
      en: "Career"
    },
    image: "/img/Lotus.png",
    content: {
      tr: `## Staj Bulma Sürecim  

Bir arkadaşım Linkedin üzerinden firmayı bulup orada yaz stajı yapmıştı bende onun tavsiyesi üzerine mail attım firmaya. 2 ay sonra staj yapabileceğimi söylediler. 

Staj zamanı gelince bana kimse ulaşmadı bende firmaya 10'dan fazla mail attım en sonda Linkedin üzerinden Firmanın CEO'suna yazdım. Sağolsun o bana dönüş yaptıktan sonra bana sorumlu mühendisim ulaştı ve staja başladım.

Bazenleri öyle olanı kabullenmemek lazım bazenleri ellerinle tırmalaya tırmalaya hedefe ulaşmalısındır.

## Staj Süreci

LotusAI'de ki staj sürecim tasklar üzerinden ilerledi.

Tasklarım sırayla; KNIME , Makine öğrenmesi, 100SQL sorgusu, Veri görselleştirme ve 5 makine öğrenmesi proejesi yapmak oldu sonrasonda ekstra olarak bir akademik ödevde alıp yaptım.

staj aslında react ve dijango eğitimi de kapsıyordu ama yaşanılan aksilikler ve bazı taskların süresi ve benim geç başlamam derken o iki kısmını yapmadım ama zaten bildiğim alanlar olduğu için sorun yaşamadım.

## Öğrendiklerim

Python,KNIME, Machine Learning, SQLite, Plotly ve Seaborn gibi teknolojileri kullanarak 5 farklı makine öğrenmesi projesi tamamladım.

## Sonuç

Bu staj deneyimi, Bir özel firmada süreç nasıl işler? neler yapılır üst alt ilişkisi ve bir  yazılımcı olmak nasıldır bunları öğrendim. Üstüne  teorik bilgilerimi pratiğe dönüştürmem için harika bir fırsat oldu. `,
      en: `## My Internship Search Process

A friend of mine found the company on LinkedIn and did a summer internship there, and I emailed the company based on their recommendation. Two months later, they told me I could intern there.

When the internship time came, no one contacted me, so I sent more than 10 emails to the company, and finally wrote to the CEO of the company on LinkedIn. Fortunately, after he got back to me, my supervising engineer reached out, and I started my internship.

Sometimes you shouldn't just accept what is happening; sometimes you have to scratch and claw your way to the goal.

## The Internship Process

My internship at LotusAI progressed through tasks.

My tasks in order were: KNIME, Machine Learning, 100 SQL queries, Data Visualization, and completing 5 machine learning projects. Afterwards, I also took on and completed an academic research assignment.

The internship was actually supposed to cover React and Django training as well, but due to some hiccups, task durations, and my late start, I didn't do those two parts. However, since they are areas I already know, I didn't have any issues.

## What I Learned

I completed 5 different machine learning projects using technologies like Python, KNIME, Machine Learning, SQLite, Plotly, and Seaborn.

## Conclusion

With this internship, I learned how processes work in a private firm, what is done, upper-lower relationships, and what it's like to be a software developer. It was also a great opportunity to put my theoretical knowledge into practice.`
    }
  },
  {
    id: 2,
    title: {
      tr: "Yazılıma Yolculuğum: Meraktan Mühendisliğe",
      en: "My Journey into Software: From Curiosity to Engineering"
    },
    excerpt: {
      tr: "2021 YKS'den bugüne, teknoloji merakının kariyer hedefine dönüşme hikayesi ve öğrenme sürecim.",
      en: "From the 2021 YKS exam to today, the story of how my curiosity in technology turned into a career goal and my learning path."
    },
    date: {
      tr: "2 Ocak 2025",
      en: "January 2, 2025"
    },
    readTime: "6 min read",
    author: "Uygar Görmez",
    category: {
      tr: "Kariyer",
      en: "Career"
    },
    image: "/img/B-1.jpeg",
    content: {
      tr: `Her şey 2021 YKS maratonunun ardından, içimdeki teknoloji merakının bir kariyer hedefine dönüşmesiyle başladı. Bu tutku beni Nişantaşı Üniversitesi Bilgisayar Mühendisliği bölümüne yönlendirdi. Teknik dünyaya sağlam bir adımla başlamak için öncelikle hazırlık sınıfında yabancı dil eğitimi alarak küresel literatürü takip edebilecek bir temel oluşturdum.

## Web Dünyasına İlk Adım

Bölümdeki temel mühendislik derslerinin ardından, "neler üretebilirim?" sorusunun peşinden giderek web dünyasına adım attım. Bu süreçte HTML, CSS, Tailwind CSS ve modern web mimarilerinin kalbi olan React teknolojilerinde derinleştim. 

Kullanıcı deneyimini ön plana çıkaran projeler geliştirdikten sonra, sistemlerin mutfağını merak ederek Python ile Backend tarafına yoğunlaştım. Öğrenme sürecimi sadece okul dersleriyle sınırlı tutmayıp, Udemy ve diğer platformlar üzerinden sektörün güncel ihtiyaçlarını takip ettim.

## Bugün ve Gelecek

Bugün ise teorik bilgilerimi profesyonel sahaya taşıyorum. Lotus AI bünyesinde Makine Öğrenmesi ve Veri Bilimi üzerine yaptığım staj ile verinin gücünü keşfediyor, Python ve modern veri kütüphanelerini kullanarak gerçek dünya problemlerine çözümler üretiyorum. 

Yazılımın hem görsel (Frontend) hem de analitik (Veri & ML) tarafında kendimi geliştirerek, çok yönlü bir mühendis olma yolunda ilerliyorum.`,
      en: `It all started after the 2021 YKS marathon, when my curiosity for technology turned into a career goal. This passion led me to the Computer Engineering department at Nişantaşı University. To make a solid entry into the technical world, I first took English preparatory classes to build a foundation for following global literature.

## First Step into the Web World

Following the fundamental engineering courses in my department, I stepped into the web world by chasing the question: "what can I build?". During this period, I deepened my knowledge in HTML, CSS, Tailwind CSS, and React, which is at the heart of modern web architectures.

After developing projects focused on user experience, I wanted to understand the backend of systems and focused on Python for Backend development. I did not limit my learning process to university courses alone, but followed the current needs of the industry through Udemy and other platforms.

## Present and Future

Today, I bring my theoretical knowledge to the professional arena. With my internship on Machine Learning and Data Science at Lotus AI, I explore the power of data and create solutions to real-world problems using Python and modern data libraries.

By developing myself in both the visual (Frontend) and analytical (Data & ML) aspects of software, I am progressing towards becoming a well-rounded engineer.`
    }
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import FadeIn from "./FadeIn";

const Blog = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Başlık Ortalandı */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {language === 'tr' ? "Blog" : "Blog"}
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Swiper Slider + Sağ/Sol Yönlendirme İkonları Yan Yana */}
        <FadeIn delay={200}>
          <div className="relative max-w-5xl mx-auto px-4 md:px-0">
            {/* Sol Buton */}
            <button className="blog-prev absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-purple-500/50 bg-black/60 backdrop-blur-sm text-purple-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/20 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="px-8 md:px-0">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".blog-prev",
                  nextEl: ".blog-next",
                }}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2, // Tablet ve masaüstünde yan yana maksimum 2 kart
                  },
                }}
                className="blog-swiper pb-4"
              >
                {posts.map((post) => (
                  <SwiperSlide key={post.id} className="h-auto">
                    <Link
                      to={`/blog/${post.id}`}
                      className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/50 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 flex flex-col shadow-lg hover:shadow-purple-500/30 h-full"
                    >
                      {/* Görsel Yüksekliği Artırıldı */}
                      <div className="h-48 overflow-hidden relative shrink-0">
                        <img
                          src={post.image}
                          alt={post.title[language]}
                          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${post.imageClass || 'object-cover'}`}
                        />
                      </div>
                      {/* İçerik Boşlukları ve Yazı Boyutları Küçültüldü */}
                      <div className="p-5 flex flex-col grow">
                        <h3 className="text-lg font-bold text-white mb-3 tracking-tight line-clamp-2 min-h-[56px] group-hover:text-purple-400 transition-colors">
                          {post.title[language]}
                        </h3>

                        <p className="text-gray-400 mb-4 leading-relaxed text-xs font-light line-clamp-3 min-h-[54px]">
                          {post.excerpt[language]}
                        </p>

                        {/* Yazar kaldırıldı, tarih üstündeki çizgi kaldırıldı ve yukarı alındı */}
                        <div className="flex justify-end mt-auto">
                          <span className="text-xs text-gray-500">{post.date[language]}</span>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Sağ Buton */}
            <button className="blog-next absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-purple-500/50 bg-black/60 backdrop-blur-sm text-purple-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/20 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { posts };
export default Blog;
