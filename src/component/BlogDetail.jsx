import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { posts } from './Blog';

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Blog yazısı bulunamadı
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-outfit pb-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-4 md:left-8 z-20">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-colors border border-white/10 hover:bg-black/60">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 shadow-2xl">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-300 font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
              <div>
                <p className="text-white font-semibold">{post.author}</p>
                <p className="text-gray-400 text-sm">Yazar</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>

            {/* Divider */}
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
