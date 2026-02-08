import React from 'react';
import { Clock, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Yazılım Dünyasında İlk Adımlar",
      excerpt: "Yazılıma nasıl başladım ve bu süreçte neler öğrendim? Yeni başlayanlar için tavsiyeler.",
      date: "Feb 8, 2026",
      readTime: "5 min read",
      author: "Uygar Görmez",
      category: "Kariyer"
    },
    {
      id: 2,
      title: "React vs Vue: Hangisini Seçmeli?",
      excerpt: "Modern frontend geliştirmede en popüler iki framework'ün karşılaştırması ve kullanım senaryoları.",
      date: "Jan 15, 2026",
      readTime: "8 min read",
      author: "Uygar Görmez",
      category: "Teknoloji"
    }
  ];

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Blog
          </h2>
          <p className="text-gray-400 text-lg">Düşüncelerim ve deneyimlerim</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
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
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-2">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
