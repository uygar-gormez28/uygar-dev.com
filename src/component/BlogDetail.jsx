import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blogs";
import { useLanguage } from "../context/LanguageContext";

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id, 10));
  const { language } = useLanguage();

  if (!post) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-3xl font-bold font-heading mb-4">
          {language === 'tr' ? "Yazı Bulunamadı" : "Article Not Found"}
        </h1>
        <p className="text-content-secondary mb-6">
          {language === 'tr' ? "Aradığınız blog yazısı mevcut değil." : "The blog post you are looking for does not exist."}
        </p>
        <Link 
          to="/" 
          className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all"
        >
          {language === 'tr' ? "Ana Sayfaya Dön" : "Back to Home"}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-content-primary pb-24 antialiased">
      {/* Hero Banner */}
      <div className={`relative h-[48vh] sm:h-[55vh] w-full overflow-hidden border-b border-white/[0.08] flex items-center justify-center ${post.bgClass || 'bg-bg-surface'}`}>
        <img 
          src={post.image} 
          alt={post.title[language]} 
          className={`w-full h-full ${post.imageClass?.includes('contain') ? `${post.imageClass} max-h-[85%]` : (post.imageClass || 'object-cover object-center')}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent pointer-events-none" />
        
        {/* Back Link */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white bg-[#08090D]/80 backdrop-blur-md px-4 py-2 rounded-full transition-all border border-white/10 hover:border-white/25 shadow-lg"
          >
            <span>←</span>
            <span>{language === 'tr' ? "Ana Sayfaya Dön" : "Back to Home"}</span>
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-4 -mt-24 relative z-20">
        
        {/* Header Card */}
        <div className="bg-[#101116]/90 backdrop-blur-xl border border-white/[0.1] rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-semibold text-purple-300">
              {post.category[language]}
            </span>
            <span className="text-xs text-content-secondary font-medium">
              {post.date[language]}
            </span>
            <span className="text-content-secondary">•</span>
            <span className="text-xs text-content-secondary font-medium">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-6 leading-tight">
            {post.title[language]}
          </h1>

          <div className="flex items-center gap-3 pt-6 border-t border-white/[0.08]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-sm text-white">
              UG
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author}</p>
              <p className="text-xs text-content-secondary">
                {language === 'tr' ? "Yazılım Mühendisi & Yazar" : "Software Engineer & Author"}
              </p>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="bg-[#101116]/60 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 sm:p-10 mb-12 shadow-xl">
          <div className="prose prose-invert max-w-none text-content-secondary leading-relaxed text-base sm:text-lg space-y-6 whitespace-pre-line font-normal">
            {post.content[language]}
          </div>

          <div className="mt-12 pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <Link 
              to="/#blog" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>←</span>
              <span>{language === 'tr' ? "Tüm Yazılara Göz At" : "Browse All Articles"}</span>
            </Link>
          </div>
        </article>

      </main>
    </div>
  );
};

export default BlogDetail;
