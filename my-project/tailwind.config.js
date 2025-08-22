/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html"
    ,"./src**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  // tailwind.config.js

  theme: {
    extend: {
      colors: {
        customBlue: '#0C8FF9',
      },
    },
  },


}

