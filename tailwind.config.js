/* eslint-disable-next-line */
const { FIT_MENU } = require('./src/consts')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,css,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sono: ['var(--sono-font)'],
        inter: ['var(--inter-font)'],
        poppins: ['var(--poppins-font)'],
        'josefin-slab': ['var(--josefin-slab-font)'],
        'maven-pro': ['var(--maven-pro-font)']
      },
      colors: {
        primary: '#55dde0',
        secondary: '#33658a',
        terciary: '#2f4858',
        accent: '#f6ae2d',
        orange: '#f26419',
        surface: '#eef1f2',
        'cape-lee': {
          100: '#dee9ec',
          200: '#bdd3da',
          300: '#9dbec7',
          400: '#7ca8b5',
          500: '#5c92a2',
          600: '#518A8F',
          700: '#497582',
          800: '#375861',
          900: '#243a41'
        },
        othergreen: '#A9C491'
      },
      screens: {
        fitmenu: `${FIT_MENU}px`
      }
    }
  },
  plugins: []
}
