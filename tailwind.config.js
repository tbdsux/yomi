const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{ts,tsx,js,jsx,ejs}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
