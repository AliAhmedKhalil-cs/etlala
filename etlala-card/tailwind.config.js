
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#080C16',
        champagne: '#D8BD83',
        ivory: '#F6F2E9',
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 35px rgba(216, 189, 131, 0.16)',
      },
    },
  },
  plugins: [],
}
