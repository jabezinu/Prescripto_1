/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  /* make sure there is no space in here {js,ts,jsx,tsx}*/
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#5f6FFF'
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))',
        'five': 'repeat(5, 1fr)'
      }
    },
  },
  plugins: [],
}

