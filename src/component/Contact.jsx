import React from "react";

const Contact = () => {
  const contacts = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "uygrgrmz@gmail.com",
      link: "mailto:uygrgrmz@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Uygar Görmez",
      link: "https://www.linkedin.com/in/uygar-g%C3%B6rmez-48b982306/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "@uygrgrmz",
      link: "https://github.com/uygar-gormez28",
      color: "from-gray-600 to-gray-900",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              İletişim
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz</p>
        </div>

        {/* İkonlar Alanı - Flexbox ile Ortalandı */}
        <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.link.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`flex flex-col items-center group cursor-pointer`}
            >
              {/* Daire */}
              <div
                className={`w-40 h-40 rounded-full bg-gradient-to-br ${
                  contact.color
                } flex items-center justify-center text-white mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl ${
                  contact.link && "group-hover:shadow-blue-500/50"
                } relative`}
              >
                {contact.icon}
                {/* Glow Efekti */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${contact.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}
                ></div>
              </div>

              {/* Label ve Value */}
              <div className="text-center">
                <h3 className="text-white font-bold text-lg mb-1">{contact.label}</h3>
                <p className="text-gray-400 text-sm">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
