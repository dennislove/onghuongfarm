/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      pm: '368px',
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1441px'
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      fontFamily: {
        jom: 'Jomhuria',
        pop: 'Poppins',
        inter: 'Inter',
        gry: 'Qwitcher Grypen',
        alu: 'Allura'
      },
      colors: {
        primary: '#C9DABF',
        secondary: '#FFEFEF',
        dark: {
          light: '#5A7184',
          hard: '#7B5340',
          soft: '#183B56'
        }
      },
      keyframes: {
        moveRight: {
          '0%': { right: '-30%' },
          '100%': { right: '0' }
        },
        moveTop: {
          '0%': { top: '-30%' },
          '100%': { top: '0' }
        },
        slideIn: {
          '0%': { transform: 'translateY(-3rem)' }, // -translate-y-20 corresponds to -5rem if 1rem = 4
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        moveRight: 'moveRight 2s forwards',
        moveTop: 'moveTop 0.5s forwards',
        slideIn: 'slideIn 1s ease-in-out forwards'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
};
