/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Revolutionary Pink Palette
        pink: {
          25: '#fff5f7',
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        // Soft Blush Tones
        blush: {
          50: '#fdf8f9',
          100: '#faf0f2',
          200: '#f5e1e5',
          300: '#ecc8d0',
          400: '#dfa3b0',
          500: '#cf7d8e',
          600: '#b85a6d',
          700: '#9a4458',
          800: '#7d3747',
          900: '#68303d',
        },
        // Rose Accents
        rose: {
          25: '#fff5f7',
          50: '#fff1f3',
          100: '#ffe4e9',
          200: '#fecdd6',
          300: '#fda4b8',
          400: '#fb7193',
          500: '#f43f6b',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'pink-sm': '0 1px 2px 0 rgba(219, 39, 119, 0.05)',
        'pink': '0 4px 6px -1px rgba(219, 39, 119, 0.1), 0 2px 4px -2px rgba(219, 39, 119, 0.1)',
        'pink-md': '0 8px 16px -4px rgba(219, 39, 119, 0.12), 0 4px 8px -4px rgba(219, 39, 119, 0.08)',
        'pink-lg': '0 16px 32px -8px rgba(219, 39, 119, 0.15), 0 8px 16px -8px rgba(219, 39, 119, 0.1)',
        'pink-xl': '0 24px 48px -12px rgba(219, 39, 119, 0.2)',
        'pink-glow': '0 0 20px rgba(236, 72, 153, 0.3)',
        'glass': '0 8px 32px rgba(225, 29, 72, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)',
        'gradient-pink-soft': 'linear-gradient(180deg, #fff5f7 0%, #fdf2f4 50%, #faf0f2 100%)',
        'gradient-pink-dark': 'linear-gradient(180deg, #1c1017 0%, #170d12 100%)',
        'gradient-rose': 'linear-gradient(135deg, #be123c 0%, #e11d48 50%, #f43f6b 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'heart-burst': 'heartBurst 0.4s ease-out',
        'ripple': 'ripple 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'page-in': 'pageIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.02)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        heartBurst: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.3)' },
          '50%': { transform: 'scale(0.9)' },
          '75%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.4' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)' },
        },
        pageIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
