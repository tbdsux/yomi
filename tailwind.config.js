const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('material-ui-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{ts,tsx,js,jsx,ejs}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Barlow', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
