/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredokaOne: ["Fredoka One", "sans-serif"],
        firaGo: ["FiraGO", "sans-serif"],
      },
      colors: {
        primary: "#8338EC",
        secondary: "#B588F4",
        white: "#FFFFFF",
        grey: "#212529",
      },
    },
  },
  plugins: [],
};
