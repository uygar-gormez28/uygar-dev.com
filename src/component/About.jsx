import React from "react";

const About = () => {
  const technologies = ["Python", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Git", "HTML/CSS", "SQL"];

  return (
    <section
      className="min-h-screen bg-black


 py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* ÜST: Daire Fotoğraf (Ortada) */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/50 hover:border-blue-500 transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/20">
              <img src="/img/pc.png" alt="Uygar Görmez" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </div>
        </div>

        {/* ALT: İki Sütun - Yer Değiştirdi */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* SOL: About Me (önceden sağdaydı) */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hakkımda
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Merhaba! Ben Uygar Görmez, Bilgisayar Mühendisliği 4.sınıf öğrencisiyim. Web sayfası ve mobil
                uygulamalar üzerinde çalışıp geliştirmeler yapıyorum.
              </p>
              <p>
                Full-stack development alanında kendimi geliştiriyorum. Modern web teknolojileriyle kullanıcı dostu ve
                performanslı uygulamalar geliştiriyorum.
              </p>
              <p>
                Açık kaynak projelere katkıda bulunmayı ve yeni şeyler öğrenmeyi seviyorum. Hedefim, teknoloji
                dünyasında fark yaratan projeler geliştirmek .Kalan vaktimde de kitap okumayı tercih ediyorum
              </p>
            </div>
          </div>

          {/* SAĞ: Technologies & Skills (önceden soldaydı) */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Kullandığım Teknolojiler
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg px-3 py-3 text-center text-white text-sm font-semibold hover:scale-105 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
