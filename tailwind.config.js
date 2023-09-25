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
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
