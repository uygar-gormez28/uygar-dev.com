import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Target, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Database, 
  Wrench, 
  BookOpen, 
  AlertCircle, 
  Sparkles, 
  Briefcase, 
  Calendar, 
  Code, 
  Activity, 
  X,
  Maximize2
} from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const { language, toggleLanguage } = useLanguage();
  const [activeModalImage, setActiveModalImage] = useState(null);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  const prevProject = currentIndex >= 0 
    ? projects[(currentIndex - 1 + projects.length) % projects.length] 
    : null;
  const nextProject = currentIndex >= 0 
    ? projects[(currentIndex + 1) % projects.length] 
    : null;

  // Keyboard navigation for image lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#08090D] flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-3xl font-bold font-heading mb-4">
          {language === 'tr' ? "Proje Bulunamadı" : "Project Not Found"}
        </h1>
        <p className="text-content-secondary mb-6">
          {language === 'tr' 
            ? "Aradığınız proje mevcut değil veya kaldırılmış olabilir." 
            : "The project you are looking for does not exist."}
        </p>
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'tr' ? "Projeler Sayfasına Dön" : "Back to Projects"}</span>
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy || {};
  const isTr = language === 'tr';

  return (
    <div className="min-h-screen bg-[#08090D] text-content-primary antialiased selection:bg-purple-500/30">
      
      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION BAR (STICKY)
      ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#08090D]/85 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            to="/#projects" 
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{isTr ? "Projeler" : "All Projects"}</span>
          </Link>

          <div className="hidden sm:block text-xs font-mono text-neutral-500 truncate max-w-xs">
            {project.title[language]} <span className="text-neutral-600">/</span> {isTr ? "Vaka Analizi" : "Case Study"}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              aria-label={isTr ? "Switch to English" : "Türkçe diline geç"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white border border-white/10 transition-all cursor-pointer"
            >
              <span className={language === 'tr' ? 'text-blue-400 font-bold' : 'text-neutral-500'}>TR</span>
              <span className="text-neutral-600">|</span>
              <span className={language === 'en' ? 'text-purple-400 font-bold' : 'text-neutral-500'}>EN</span>
            </button>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-12 sm:pb-20 border-b border-white/[0.06]">
        {/* Ambient subtle glow background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Pill */}
          {project.category && (
            <div className="mb-4">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-purple-500/10 text-purple-300 border border-purple-500/20">
                {project.category[language]}
              </span>
            </div>
          )}

          {/* Project Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight mb-5">
            {project.title[language]}
          </h1>

          {/* Short Project Description */}
          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed max-w-4xl mb-8">
            {project.description[language]}
          </p>

          {/* Metadata Specifications Bar */}
          {cs.clientOrContext && (
            <div className="bg-[#101116]/90 border border-white/[0.08] rounded-2xl p-5 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 shadow-xl">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                  <span>{isTr ? "Kurum / Bağlam" : "Client / Context"}</span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {cs.clientOrContext[language]}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{isTr ? "Zaman Çizelgesi" : "Timeline"}</span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {cs.timeline[language]}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                  <Code className="w-3.5 h-3.5 text-pink-400" />
                  <span>{isTr ? "Üstlendiğim Rol" : "My Role"}</span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {cs.role[language]}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isTr ? "Mevcut Durum" : "Project Status"}</span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {cs.status[language]}
                </div>
              </div>
            </div>
          )}

          {/* Tags & Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] text-neutral-200 border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              {project.website && (
                <a 
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-purple-600/25 transition-all"
                >
                  <span>{isTr ? "Canlı Web Sitesi" : "Live Demo"}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>{isTr ? "Kaynak Kodu" : "GitHub Repo"}</span>
                </a>
              )}
            </div>
          </div>

          {/* Large Project Hero Screenshot Showcase */}
          <div 
            onClick={() => setActiveModalImage({ url: project.image, caption: project.title[language] })}
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.12] bg-[#101116] shadow-2xl cursor-pointer transition-all duration-300 hover:border-purple-500/40"
          >
            {/* Mock browser top bar */}
            <div className="h-10 bg-[#0d0e13] px-4 flex items-center justify-between border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/70 inline-block" />
              </div>
              <div className="text-[11px] font-mono text-neutral-400 truncate max-w-xs px-3 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                {project.website || `https://${project.id}.uygar-dev.com`}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 group-hover:text-purple-300 transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline font-mono text-[11px]">{isTr ? "Büyüt" : "Expand"}</span>
              </div>
            </div>

            {/* Image container */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black/40">
              <img 
                src={project.image} 
                alt={project.title[language]} 
                className={`w-full h-full ${project.imageClass || 'object-cover object-top'} group-hover:scale-[1.015] transition-transform duration-500`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-30" />
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CASE STUDY 12 NUMBERED SECTIONS
      ───────────────────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* 01 — PROJECT OVERVIEW */}
        {cs.overview && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                01 — {isTr ? "Proje Genel Bakışı" : "Project Overview"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-5">
              {isTr ? "Projenin Kapsamı ve Amacı" : "Scope & Mission"}
            </h2>
            <div className="text-neutral-300 leading-relaxed text-base sm:text-lg">
              <p>{cs.overview[language]}</p>
            </div>
          </section>
        )}

        {/* 02 — THE PROBLEM */}
        {cs.problem && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                02 — {isTr ? "Problem ve İhtiyaç" : "The Problem"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-5">
              {isTr ? "Çözülmesi Gereken Gerçek Dünya Problemi" : "The Real-World Engineering Friction"}
            </h2>
            <div className="border-l-2 border-pink-500/60 pl-5 sm:pl-6 py-2 bg-pink-500/[0.02] rounded-r-xl">
              <p className="text-neutral-300 leading-relaxed text-base sm:text-lg">
                {cs.problem[language]}
              </p>
            </div>
          </section>
        )}

        {/* 03 — PROJECT GOALS */}
        {cs.goals && cs.goals[language] && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                03 — {isTr ? "Proje Hedefleri" : "Project Goals"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-6">
              {isTr ? "Temel Mühendislik Hedefleri" : "Key Engineering Objectives"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cs.goals[language].map((goal, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all"
                >
                  <Target className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-neutral-300 leading-snug">{goal}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 04 — THE SOLUTION */}
        {cs.solution && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                04 — {isTr ? "Çözüm Yaklaşımı" : "The Solution"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-5">
              {isTr ? "Geliştirilen Mimari ve Teknik Yaklaşım" : "Architectural & Technical Approach"}
            </h2>
            <div className="text-neutral-300 leading-relaxed text-base sm:text-lg">
              <p>{cs.solution[language]}</p>
            </div>
          </section>
        )}

        {/* 05 — KEY FEATURES */}
        {cs.features && cs.features.length > 0 && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                05 — {isTr ? "Temel Özellikler" : "Key Features"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-6">
              {isTr ? "Platformun Öne Çıkan Yetkinlikleri" : "Core Capabilities & User Features"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {cs.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {feature.number || `0${idx + 1}`}
                    </span>
                    <Sparkles className="w-4 h-4 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {feature.title[language]}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {feature.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 06 — MY ROLE & CONTRIBUTIONS */}
        {cs.contributions && cs.contributions.length > 0 && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                06 — {isTr ? "Rolüm & Katkılarım" : "My Role & Contributions"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-2">
              {isTr ? "Bireysel Sorumluluklarım & Uyguladığım Modüller" : "Direct Responsibilities & Implementation Breakdown"}
            </h2>
            <p className="text-sm text-neutral-400 mb-6">
              {isTr 
                ? "Projede bireysel olarak hayata geçirdiğim mimari ve yazılımsal katkılarım ile ekip içi koordinasyon:" 
                : "Personal engineering execution, module delivery, and agile responsibilities across the stack:"}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cs.contributions.map((contrib, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <h3 className="text-base font-bold text-white">
                      {contrib.category[language]}
                    </h3>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {contrib.items[language].map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 07 — TECHNOLOGY STACK */}
        {cs.techStackCategorized && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                07 — {isTr ? "Teknoloji Yığını" : "Technology Stack"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-6">
              {isTr ? "Kullanılan Teknolojiler ve Araçlar" : "Production Stack & Infrastructure"}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Frontend */}
              {cs.techStackCategorized.frontend && (
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3 text-purple-400">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">Frontend</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStackCategorized.frontend.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-neutral-200 border border-white/[0.08]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Backend */}
              {cs.techStackCategorized.backend && (
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3 text-blue-400">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">Backend & API</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStackCategorized.backend.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-neutral-200 border border-white/[0.08]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Database */}
              {cs.techStackCategorized.database && (
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3 text-pink-400">
                    <Database className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">Database & ORM</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStackCategorized.database.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-neutral-200 border border-white/[0.08]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Deployment */}
              {cs.techStackCategorized.tools && (
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3 text-emerald-400">
                    <Wrench className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">{isTr ? "Araçlar & Dağıtım" : "Tools & DevOps"}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStackCategorized.tools.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-neutral-200 border border-white/[0.08]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 08 — SYSTEM ARCHITECTURE */}
        {cs.architecture && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                08 — {isTr ? "Sistem Mimarisi" : "System Architecture"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-4">
              {isTr ? "Bileşenler ve Veri Akış Modeli" : "Component Interaction & Data Flow Pipeline"}
            </h2>

            {/* Architecture Explanation */}
            <p className="text-neutral-300 leading-relaxed text-base sm:text-lg mb-8">
              {cs.architecture.summary[language]}
            </p>

            {/* Responsive Visual Diagram */}
            {cs.architecture.flow && cs.architecture.flow.length > 0 && (
              <div className="rounded-2xl bg-[#0b0c10] border border-white/[0.08] p-5 sm:p-8">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-5 flex items-center justify-between">
                  <span>{isTr ? "Doğrulanmış Veri & İstek Akışı" : "Verified Request & Data Flow"}</span>
                  <span className="text-purple-400 font-mono text-[11px]">{cs.architecture.flow.length} {isTr ? "Entegrasyon Noktası" : "Pipelines"}</span>
                </div>

                <div className="grid gap-3 sm:gap-4">
                  {cs.architecture.flow.map((flowItem, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-colors"
                    >
                      {/* From Node */}
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                        <span className="text-sm font-semibold font-mono text-white">
                          {flowItem.from}
                        </span>
                      </div>

                      {/* Flow Connector & Label */}
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 px-3 py-1 rounded bg-white/[0.03] border border-white/[0.05] self-start sm:self-center">
                        <span className="text-purple-300 font-medium">{flowItem.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-500 hidden sm:inline" />
                      </div>

                      {/* To Node */}
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-400 shrink-0" />
                        <span className="text-sm font-semibold font-mono text-neutral-200">
                          {flowItem.to}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 09 — DEVELOPMENT PROCESS */}
        {cs.developmentProcess && cs.developmentProcess.length > 0 && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                09 — {isTr ? "Geliştirme Süreci" : "Development Process"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-6">
              {isTr ? "Mühendislik ve İlerleme Aşamaları" : "Engineering Phases & Milestones"}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {cs.developmentProcess.map((step, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all"
                >
                  <div className="text-2xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-3">
                    {step.step || `0${idx + 1}`}
                  </div>
                  <h3 className="text-base font-bold font-heading text-white mb-2">
                    {step.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed flex-1">
                    {step.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10 — TECHNICAL CHALLENGES & SOLUTIONS */}
        {cs.challenges && cs.challenges.length > 0 && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                10 — {isTr ? "Teknik Zorluklar & Çözümler" : "Technical Challenges & Solutions"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-6">
              {isTr ? "Karşılaşılan Problemler ve Uygulanan Çözümler" : "Engineering Bottlenecks & Resolved Trade-offs"}
            </h2>

            <div className="space-y-6">
              {cs.challenges.map((challenge, idx) => (
                <div 
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                      {challenge.title[language]}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 pt-2">
                    {/* Problem */}
                    <div className="p-4 rounded-xl bg-red-500/[0.04] border border-red-500/15">
                      <div className="text-xs font-mono font-bold text-red-300 uppercase tracking-wider mb-2">
                        {isTr ? "Problem / Zorluk" : "The Friction"}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {challenge.problem[language]}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-4 rounded-xl bg-purple-500/[0.04] border border-purple-500/15">
                      <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider mb-2">
                        {isTr ? "Mühendislik Çözümü" : "Engineering Solution"}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {challenge.solution[language]}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/15">
                      <div className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-2">
                        {isTr ? "Elde Edilen Sonuç" : "Impact & Outcome"}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {challenge.outcome[language]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 11 — LESSONS LEARNED */}
        {cs.lessonsLearned && cs.lessonsLearned[language] && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                11 — {isTr ? "Edinilen Kazanımlar" : "Lessons Learned"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-6">
              {isTr ? "Teknik ve Mesleki Çıkarımlar" : "Engineering Growth & Architectural Takeaways"}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {cs.lessonsLearned[language].map((lesson, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all"
                >
                  <BookOpen className="w-5 h-5 text-blue-400 mb-3" />
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 12 — SCREENSHOTS & GALLERY */}
        {cs.gallery && cs.gallery.length > 0 && (
          <section className="bg-[#101116]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gradient uppercase">
                12 — {isTr ? "Görseller & Galeri" : "Screenshots & Gallery"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-2">
              {isTr ? "Arayüz ve Sistem Ekran Görüntüleri" : "Application Interface Gallery"}
            </h2>
            <p className="text-sm text-neutral-400 mb-6">
              {isTr 
                ? "Geliştirilen uygulamanın arayüz tasarımı ve doğrulanmış modül görselleri:" 
                : "Verified production views and interactive interface modules:"}
            </p>

            <div className={`grid gap-6 ${cs.gallery.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
              {cs.gallery.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveModalImage({ url: item.url, caption: item.caption[language] })}
                  className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0d12] hover:border-purple-500/50 transition-all cursor-pointer shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={item.url} 
                      alt={item.caption[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-sm text-white border border-white/20 flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isTr ? "Büyüt" : "Expand"}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#101116] border-t border-white/[0.06]">
                    <p className="text-xs sm:text-sm font-medium text-neutral-300">
                      {item.caption[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* ─────────────────────────────────────────────────────────────
          4. BOTTOM PROJECT NAVIGATION (PREV / ALL / NEXT)
      ───────────────────────────────────────────────────────────── */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          
          {/* Previous Project */}
          {prevProject && (
            <Link 
              to={`/project/${prevProject.id}`}
              className="group flex flex-col p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 group-hover:text-purple-300 mb-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>{isTr ? "Önceki Proje" : "Previous Project"}</span>
              </div>
              <div className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 truncate">
                {prevProject.title[language]}
              </div>
              <div className="text-xs text-neutral-400 truncate mt-0.5">
                {prevProject.category[language]}
              </div>
            </Link>
          )}

          {/* All Projects Center Link */}
          <div className="flex justify-center order-last sm:order-none">
            <Link 
              to="/#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white border border-white/10 transition-all"
            >
              <span>{isTr ? "Tüm Projeleri Görüntüle" : "View All Projects"}</span>
            </Link>
          </div>

          {/* Next Project */}
          {nextProject && (
            <Link 
              to={`/project/${nextProject.id}`}
              className="group flex flex-col text-right sm:items-end p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center justify-end gap-1.5 text-xs font-mono text-neutral-400 group-hover:text-purple-300 mb-1">
                <span>{isTr ? "Sonraki Proje" : "Next Project"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 truncate">
                {nextProject.title[language]}
              </div>
              <div className="text-xs text-neutral-400 truncate mt-0.5">
                {nextProject.category[language]}
              </div>
            </Link>
          )}

        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          5. IMAGE LIGHTBOX MODAL
      ───────────────────────────────────────────────────────────── */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModalImage(null)}
        >
          {/* Close button */}
          <button 
            type="button"
            aria-label={isTr ? "Kapat" : "Close"}
            onClick={() => setActiveModalImage(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal content */}
          <div 
            className="max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeModalImage.url} 
              alt={activeModalImage.caption || "Preview"}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            {activeModalImage.caption && (
              <p className="mt-4 text-sm font-medium text-neutral-300 text-center max-w-2xl px-4">
                {activeModalImage.caption}
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;
