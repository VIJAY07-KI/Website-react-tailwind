/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all your components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5044E5", // your custom primary color
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  darkMode: "class", // enable class-based dark mode
  plugins: [],
}
