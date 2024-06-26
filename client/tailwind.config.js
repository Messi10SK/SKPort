/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        black : "#0a0a0a",
        blur:"#090c43",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      fontFamily:{
        robot :[ "Roboto", 'sans-serif'],
        mont :[ "Montserrat", 'sans-serif'],
      }
    },
  },
  plugins: [flowbite.plugin()],
}

