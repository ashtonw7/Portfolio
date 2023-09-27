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
        "meriweather": ["Merriweather"]
      },
    },
    screens: {
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
      floatDown: {
        '0%': { opacity: 0 },
        '25%': { opacity: 1 },
        '40%': { opacity: 1 },
        '100%': { transform: 'translateY(65vh)', opacity: 0 },
      }
    },
    animation: {
      'cascade': 'floatDown 5s ease-in-out forwards',
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
