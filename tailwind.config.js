/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Customizable brand colors
        primary: '#DA291C',
        secondary: '#FFBC0D',
        
        // Standard colors
        white: '#FFFFFF',
        black: '#000000',
        
        // Grey scale
        'grey-light': '#ECECEC',
        'grey-dark': '#D5D5D5',
        'grey-darker': '#868686',
        
        // Status colors
        success: '#00AA06',
        error: '#EF4444',
        red: '#A50000',
      },
      fontFamily: {
        // Serious font - for legal text, instructions, formal content
        serious: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        
        // Branded font - for headings, titles, marketing content
        branded: ['Poppins', 'Helvetica Neue', 'sans-serif'],
        
        // Baloo font - for playful, friendly content
        baloo: ['Baloo Tamma 2', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
