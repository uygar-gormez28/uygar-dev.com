import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { posts } from "../data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import FadeIn from "./FadeIn";

const Blog = () => {
  const { language } = useLanguage();

  return (
    <section id="blog" className="py-20 px-4 bg-bg-primary relative border-t border-white/[0.04]">
      <div className="max-w-container mx-auto">
        
        {/* Section Heading - Clean without eyebrow label */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              <span className="text-gradient">
                Blog
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Carousel Header Controls */}
        <FadeIn delay={150}>
          <div className="flex items-center justify-between gap-4 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              {language === 'tr' ? "Son Yazılar" : "Latest Articles"}
            </h3>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                id="swiper-prev-blog"
                aria-label={language === 'tr' ? "Önceki Yazı" : "Previous Post"}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.08] hover:border-purple-500/40 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-base"
              >
                ←
              </button>
              <button
                id="swiper-next-blog"
                aria-label={language === 'tr' ? "Sonraki Yazı" : "Next Post"}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.08] hover:border-purple-500/40 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-base"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Blog Swiper Carousel */}
        <FadeIn delay={250}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: "#swiper-prev-blog",
              nextEl: "#swiper-next-blog",
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-4"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id} className="h-auto">
                <article className="group h-full flex flex-col rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden shadow-xl">
                  
                  {/* Article Thumbnail */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-bg-surface border-b border-white/[0.06]">
                    <img
                      src={post.image}
                      alt={post.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#08090D]/85 backdrop-blur-md text-purple-300 border border-purple-500/20">
                        {post.category[language]}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-content-secondary mb-3">
                      <span>{post.date[language]}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors line-clamp-2 mb-3">
                      {post.title[language]}
                    </h4>

                    <p className="text-content-secondary text-sm leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt[language]}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                          UG
                        </div>
                        <span className="text-xs text-content-secondary font-medium">{post.author}</span>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                      >
                        <span>{language === 'tr' ? "Yazıyı Oku" : "Read Article"}</span>
                        <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                      </Link>
                    </div>

                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeIn>

      </div>
    </section>
  );
};

export default Blog;
