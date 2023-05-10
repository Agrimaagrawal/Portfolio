/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        "tgreen":"#1ee0e0",
        "tblue":"rgb(18, 14, 38)",
      }
    },
  },
  plugins: [],
}

