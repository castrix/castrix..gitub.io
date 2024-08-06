/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/*.{tsx,css,ts}', './src/components/**/*.{tsx,css,ts}'],
  theme: {
    extend: {
      colors: {
        function: "#DBB800",
        variable: "#00E5F4",
        comment: "#68AC77",
        secondary: "#7E7E7E",
        placeholder: "#676767",
        tailwind: "#4BFF73",
        react: "#24F2FF",
        vue: "#68AC77",
        default: "#363636",
        string: "#FF5C00"
      },
      height: {
        ["d-screen"]: "100vh"
      }
    },
  },
  plugins: [],
}

