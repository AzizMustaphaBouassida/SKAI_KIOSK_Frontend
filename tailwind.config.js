/** @type {import('tailwindcss').Config} */
const THEME_COLORS = {
  primary: '#DA291C',
  secondary: '#FFBC0D',
  white: '#FFFFFF',
  black: '#000000',
  'grey-light': '#ECECEC',
  'grey-dark': '#D5D5D5',
  'grey-darker': '#868686',
  success: '#00AA06',
  error: '#EF4444',
  red: '#A50000',
}

const THEME_FONTS = {
  serious: ["Inter", "Segoe UI", "Roboto", "sans-serif"],
  branded: ["Poppins", "Helvetica Neue", "sans-serif"],
  baloo: ["Baloo Tamma 2", "Poppins", "sans-serif"],
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: THEME_COLORS,
      fontFamily: THEME_FONTS,
    },
  },
  plugins: [require("tailwindcss-animate")],
}
