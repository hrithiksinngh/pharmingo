/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      screens:{
        'xs': '450px',
        '2xl': '1536px',
        '3xl': '1736px',
        '4xl': '1936px',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(177.41deg, #156082 28.57%, #264653 97.72%)',
        'orange-gradient': 'linear-gradient(180deg, #E76F51 0%, #F4A261 100%)',
        'green-gradient': 'linear-gradient(180deg, #2A9D8F 0%,#264653 100%)',
        'orange-gradient-2': 'linear-gradient(180deg, #F4A261 0%, #E76F51 54.76%)',
      },
      boxShadow: {
        'float': '0px 10px 30px rgba(0, 0, 0, 0.14)',
        'package-card': '3px 6px 30px 0px rgba(0, 0, 0, 0.14)',
      },
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
       
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(50px)', opacity: '0' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 0.7s ease-out',
       
        slideDown: 'slideDown 0.4s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        fadeOut: 'fadeOut 0.5s ease-in',
      },
    },
  },
  plugins: [],
}
