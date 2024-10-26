/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          '5': '#9899DF',
          '15': '#4749B3', 
          '20': '#6669FE',
          '90':'#4749B3',
          '80':'#43458E',
          
        },
        grey: { 
          '5':'#F6F6FB',
          '20': '#F8F8F8',
          '10': '#F2F2FF',
          '40':'#F7F7FF',
          '50':'#B8B8B8',

        },
        pink: {
          '20' : '#E66DFF'
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
