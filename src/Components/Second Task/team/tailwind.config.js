/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '250px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
    }
  },
  plugins: [],
}