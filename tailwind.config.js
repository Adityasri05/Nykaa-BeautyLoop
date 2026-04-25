/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nykaa: {
          pink: '#ff3f6c',
          'pink-light': '#fff0f3',
          'pink-dark': '#e0305b',
          dark: '#1a1a2e',
          light: '#faf7f5',
          gray: '#8a8a8a',
          gold: '#d4a853',
          'gold-light': '#fef9f0'
        }
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        slideUp: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        pop: 'pop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        scaleIn: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        wiggle: 'wiggle 0.5s ease-in-out',
      },
      boxShadow: {
        'nykaa': '0 4px 30px rgba(255, 63, 108, 0.15)',
        'nykaa-lg': '0 8px 40px rgba(255, 63, 108, 0.25)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
