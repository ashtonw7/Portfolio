/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "maven": ["MavenPro"],
        "bowlby": ["BowlbyOneSC"],
        "meriweather": ["Merriweather"],
        "inter": ["Inter"],
      },
      boxShadow: {
        'green': '-15px 15px #00917B',
        'green-sm': '-5px 5px #00917B',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'lger': '1100px',
      'xler': '1290px',
      'smallphone': '400px',
      'smallish': '548px',
      'iphone': '390px',
      'bigphone': '450px',
      'aboutbreak': '500px',
      'aboutbreak2': '770px',
      'aboutbreak3': '1030px',
      'aboutbreak4': '1760px',
      'expbreak3': '1770px',
      'expbreak32': '1401px',
      'expbreak35': '1470px',
      'expbreak4': '1650px',
      'expbreak5': '1730px',
      'mid': '376px',
      'big': '681px',
      'break1': '860px',
      'break2': '683px',
      'break3': '590px',
      'break4': '455px',
      'break5': '364px',
      'vertical': '768px',
    },
    keyframes: {
      cascade: {
        '0%': { opacity: 0 },
        '25%': { opacity: 1 },
        '40%': { opacity: 1 },
        '100%': { transform: 'translateY(65dvh)', opacity: 0 },
      },
      bounce: {
        '0%': { transform: 'translateY(-0%)' },
        '50%': { transform: 'translateY(5%)' },
        '100%': { transform: 'translateY(0%)' }
      },
      slideInRight: {
        '0%': { transform: 'translateX(-50%) skew(-12deg)', opacity: 0, },
        '100%': { transform: 'translateX(0%) skew(-12deg)', opacity: 1 }
      },
      slideInLeft: {
        '0%': { transform: 'translateX(50%) skew(-12deg)', opacity: 0, },
        '100%': { transform: 'translateX(0%) skew(-12deg)', opacity: 1 }
      }
    },
    animation: {
      'cascade': 'cascade 5s ease-in-out forwards',
      'bounce': 'bounce 1.5s ease-in-out infinite',
      'slide-in-right': 'slideInRight 0.7s ease-in-out',
      'slide-in-left': 'slideInLeft 0.7s ease-in-out'
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
