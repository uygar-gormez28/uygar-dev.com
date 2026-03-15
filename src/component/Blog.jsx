import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 3,
    title: "G.O.P Belediyesi | Bilgi İşlem Müdürlüğü Yeni IT stajım",
    excerpt: "Sektörde deneyim kazanıp kendimi daha fazla için bu kez işin mutfağındayım. ",
    date: "9 Mart 2026",
    readTime: "4 min read",
    author: "Uygar Görmez",
    category: "Kariyer",
    image: "/img/Kasa2.jpeg",
    content: `Zorunlu stajıma başladım. 

Herkes farkındadır ki staj bulma süreci aşırı iğrenç bir şey. Ben son iki yılımı bunu yaparak geçirdiğim için tonla yere başvur reddedil veya hiç cevap almama durumlarına alışkınım yinede daha önce güzel bir tanesini tutturup LotusAİ da staj yapmıştım. Şuan ki olduğum yerden memlun olsamda belki bir aylık falan başka bir yerede geçebilirim bu konuda arayışıma devam edeceğim.

Güncel olarak yaptığım staja gelmem gerekirse

Şuan Gaziosman Paşa Belediyesinin Bilgi işlem müdürliğümün İT kısmında staj yapıyorum.Kesinlikle istediğim bu değildi hatta ilk bir kaç gün baya baya mutsuzdum istemediğim bir şeyi yapmaktan sonuç da ben işin yazılım kısmında olan birisiydim. Bazı tanıdıklarık yüksek yerlerde onlara verilen maslarda bilgisayarları ile kod yazarken bana burada olmak doğru gelmiyordu. 

Eh yanılmışım. İşin en temelinin tozunu yutmak ayağanın yere sağlam basması iyi oluyor. Kasa içinde ki işlemci , ekran kartı ve ram gibi şeyler ile uğraşırken artık kullandığım teknolojilerle olan (React, Typescript ,SQL , Python) gibi aralarında ki ilişki kafamda oturmaya başladı.

Üstüne zaten ünivetsite hayatında da kendimi daima kendi geliştiren birisi olduğum için burada da bunu yapmaya devam ediyorum. Boş zamanlarımda ki genelde oluyor. Yazılım çalışıyorum.
Sürecim sabah gel gün içinde ki işlerş yap boş vakitte yazılım çalış ( Güncel olarak Typescript-React-native) eve geçince dd proje ile uğraş şeklinde gidiyor.

Ama işin en güzel kısmı orada tanıştığım insanlar. Bana bir şeyler katıyorlar. Hem insan olarak hemde sektör ile alakalı mesela Mustafa bey ile Docker, sanal makineler veya ortak belediye sistemi hakkında konuşmalarım yada benim gibi Bilgisayar Mühendisi olan Murat bey ile olan sohbetlerim (bir oyu. geliştirme bunun işlemci yükü , vue mi yoksa react mı gibi) bana bilgi olarak çok şey katıyor

Kısaca başta ben buraya ait değilim desemde bana baya bir şeyler kattığı/katacağı bir gerçek. `,
  },
  {
    id: 1,
    title: "LotusAI Gönüllü Staj Deneyimim: Veri Bilimi ve Makine Öğrenmesi",
    excerpt:
      "LotusAI'de 3 aylık KNINME, Data Science ve Machine Learning stajı sürecinde öğrendiklerim ve deneyimlerim.",
    date: "17 Ocak 2025",
    readTime: "8 min read",
    author: "Uygar Görmez",
    category: "Kariyer",
    image: "/img/Lotus.png",
    content: `Blog detay kısmında kendin yazacaksın...

## Staj Bulma Sürecim  

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
  },
  {
    id: 2,
    title: "Yazılıma Yolculuğum: Meraktan Mühendisliğe",
    excerpt: "2021 YKS'den bugüne, teknoloji merakının kariyer hedefine dönüşme hikayesi ve öğrenme sürecim.",
    date: "2 Ocak 2025",
    readTime: "6 min read",
    author: "Uygar Görmez",
    category: "Kariyer",
    image: "/img/B-1.jpeg",
    content: `Her şey 2021 YKS maratonunun ardından, içimdeki teknoloji merakının bir kariyer hedefine dönüşmesiyle başladı. Bu tutku beni Nişantaşı Üniversitesi Bilgisayar Mühendisliği bölümüne yönlendirdi. Teknik dünyaya sağlam bir adımla başlamak için öncelikle hazırlık sınıfında yabancı dil eğitimi alarak küresel literatürü takip edebilecek bir temel oluşturdum.

## Web Dünyasına İlk Adım

Bölümdeki temel mühendislik derslerinin ardından, "neler üretebilirim?" sorusunun peşinden giderek web dünyasına adım attım. Bu süreçte HTML, CSS, Tailwind CSS ve modern web mimarilerinin kalbi olan React teknolojilerinde derinleştim. 

Kullanıcı deneyimini ön plana çıkaran projeler geliştirdikten sonra, sistemlerin mutfağını merak ederek Python ile Backend tarafına yoğunlaştım. Öğrenme sürecimi sadece okul dersleriyle sınırlı tutmayıp, Udemy ve diğer platformlar üzerinden sektörün güncel ihtiyaçlarını takip ettim.

## Bugün ve Gelecek

Bugün ise teorik bilgilerimi profesyonel sahaya taşıyorum. Lotus AI bünyesinde Makine Öğrenmesi ve Veri Bilimi üzerine yaptığım staj ile verinin gücünü keşfediyor, Python ve modern veri kütüphanelerini kullanarak gerçek dünya problemlerine çözümler üretiyorum. 

Yazılımın hem görsel (Frontend) hem de analitik (Veri & ML) tarafında kendimi geliştirerek, çok yönlü bir mühendis olma yolunda ilerliyorum.`,
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Blog = () => {
  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Düşüncelerim ve deneyimlerim</p>
        </div>

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
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight line-clamp-2 min-h-[64px]">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-base font-light line-clamp-3 min-h-[72px]">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                      <span className="text-sm text-gray-300">{post.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { posts };
export default Blog;
