import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Nika - Social App",
      description:
        "Asosyalliğe karşı farklı insanlarla tanışmayı ve onlarla çeşitli aktiviteler yapmayı sağlayan sosyal medya uygulaması.",
      image: "/img/nika.png",
      github: "https://github.com/uygar-gormez28/Nika",
      // Teknolojileri dizi olarak ekledik
      tags: ["React", "Firebase", "Tailwind CSS"], 
    },
    {
      title: "NotlarSende",
      description: "Öğrencilerin kendi aralarında not paylaşımı yapabildiği platform.",
      image: "/img/Not.png",
      github: "https://github.com/uygar-gormez28/NotlarSende",
      tags: ["Django", "HTML", "CSS"],
    },
    {
      title: "Akgun A.Ş",
      description: "Klasik bir E-ticaret sitesi.",
      image: "/img/akgun.png",
      github: "https://github.com/uygar-gormez28/AKGUN-TICARET",
      tags: ["React", "Redux", "Router Dom"],
    },
    {
      title: "Weather App",
      description: "Hava durumu bilgilerini gösteren interaktif web uygulaması.",
      image: "/img/weather.png",
      github: "https://github.com/uygar-gormez28/Weather-App",
      tags: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projeler
          </h2>
          <p className="text-gray-400 text-lg">İşte geliştirdiğim bazı projelerim</p>
        </div>

        {/* Projeler Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer block"
            >
              {/* Görsel */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* İçerik */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Teknoloji Etiketleri (Yeni Eklendi) */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* GitHub linki */}
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-white text-sm transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub'da incele</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;