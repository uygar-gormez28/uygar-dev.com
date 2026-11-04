/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#08090D',
          secondary: '#101116',
          surface: '#15161E',
          elevated: '#1A1C26',
        },
        brand: {
          blue: '#3B82F6',
          purple: '#9333EA',
          pink: '#EC4899',
        },
        content: {
          primary: '#F5F6FA',
          secondary: '#A4A8B8',
          muted: '#73798B',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      maxWidth: {
        'container': '1240px',
      },
    },
  },
  plugins: [],
};
