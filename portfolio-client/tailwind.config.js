/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'portfolio-red':'#F11616',
        'portfolio-grey':'#D9D9D9'
      },
      fontFamily:{
        'awakenning':['Awakenning, regular']
      }
    },
    screens: {
      'sm': '283px',
      'md': '325px',
      'md-lg': '400px',
      'tablet': '666px',
      'lg': '834px',
      'pro': '1025px', // I wanted the menu hamburger to stay on the Ipad Pro
      'xl':'1440px',
      'xxl':'1600px'


    }
  },
  plugins: [],
}

