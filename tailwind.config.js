/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredokaOne: ["Fredoka One", "sans-serif"],
        firaGo: ["FiraGO", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
};
