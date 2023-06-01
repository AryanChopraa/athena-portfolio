/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'heading': ['Raleway', 'sans-serif'],
      'athfont': ['Righteous', 'cursive'],
      'athgame':[ 'Poppins', 'sans-serif'],

    },
    extend: {
      backgroundImage: {
        'hero-pattern3': "url('/Users/aryannchopra/athena/athena-website/src/assets/shiva.png')",
        'hero-pattern': "url('/Users/aryannchopra/athena/athena-website/src/assets/Home.png')",
        'hero-pattern2': "url('/Users/aryannchopra/athena/athena-website/src/assets/polotno.png')",
      }
    },
  },
  plugins: [],
}