/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Tajwal: ["Work Sans", "sans-serif"],
      },
      colors: {
        color1: "#FFD600",
      },
    },
  },
  plugins: [],
};
