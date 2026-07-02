import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const posts = [
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
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FadeIn from "./FadeIn";

const Blog = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {language === 'tr' ? "Blog" : "Blog"}
              </span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="blog-swiper pb-12"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id} className="h-auto">
                <Link
                  to={`/blog/${post.id}`}
                  className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/50 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 flex flex-col shadow-lg hover:shadow-purple-500/30 h-full"
                >
                  <div className="h-48 overflow-hidden relative shrink-0">
                    <img
                      src={post.image}
                      alt={post.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight line-clamp-2 min-h-[64px]">
                      {post.title[language]}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed text-base font-light line-clamp-3 min-h-[72px]">
                      {post.excerpt[language]}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                        <span className="text-sm text-gray-300">{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.date[language]}</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeIn>
      </div>
    </section>
  );
};

export { posts };
export default Blog;
