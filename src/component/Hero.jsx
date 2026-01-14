import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img/Matrix.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px) brightness(0.4)",
            transform: "scale(1.1)",
          }}
        ></div>
        
        {/* Yorum satırı düzeltildi */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-300 hover:scale-105 hover:text-shadow-glow">
            Merhaba, Ben{" "}
            <span className="text-blue-500 hover:text-blue-400 transition-colors duration-300 inline-block hover:scale-110">
              Uygar Görmez
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-medium mb-10 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
            Bilgisayar Mühendisi | Web & Veri Çözümleri{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Projeler Butonu - Linke çevrildi */}
            <a 
              href="#projects"
              className="px-10 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-center"
            >
              Projelerim
            </a>

            {/* İletişim Butonu - Linke çevrildi */}
            <a 
              href="#contact"
              className="px-10 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black hover:scale-110 hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 text-center"
            >
              İletişim
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;