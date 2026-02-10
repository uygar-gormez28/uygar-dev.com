import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "LotusAI Staj Deneyimim: Veri Bilimi ve Makine Öğrenmesi",
    excerpt: "3 aylık KNI/ME, Data Science ve Machine Learning stajı sürecinde öğrendiklerim ve deneyimlerim.",
    date: "Jan 17, 2025",
    readTime: "8 min read",
    author: "Uygar Görmez",
    category: "Kariyer",
    image: "/img/Lotus.png",
    content: `Blog detay kısmında kendin yazacaksın...

## Staj Süreci

3 aylık LotusAI stajım boyunca KNI/ME, veri bilimi ve makine öğrenmesi alanlarında yoğun bir deneyim yaşadım.

## Öğrendiklerim

Python, Machine Learning, SQLite, Plotly ve Seaborn gibi teknolojileri kullanarak 5 farklı makine öğrenmesi projesi tamamladım.

## Sonuç

Bu staj deneyimi, teorik bilgilerimi pratiğe dönüştürmem için harika bir fırsat oldu.`
  },
  {
    id: 2,
    title: "Yazılıma Yolculuğum: Meraktan Mühendisliğe",
    excerpt: "2021 YKS'den bugüne, teknoloji merakının kariyer hedefine dönüşme hikayesi ve öğrenme sürecim.",
    date: "Jan 2, 2025",
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

Yazılımın hem görsel (Frontend) hem de analitik (Veri & ML) tarafında kendimi geliştirerek, çok yönlü bir mühendis olma yolunda ilerliyorum.`
  }
];

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

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 cursor-pointer block"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-base font-light line-clamp-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                    <span className="text-sm text-gray-300">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { posts };
export default Blog;
