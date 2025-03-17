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
        black: "#000000",
        green: "#08A508",
        red: "#FA4D4D",
        borderGray: "#CED4DA",
        pink: "#FF66A8",
        gray: {
          10: "#F8F9FA", // 1%
          100: "#DEE2E6", // 10%
          200: "", // 15%
          300: "#ADB5BD", // 20%
          greyish: "",
          headline: "#212529",
          validation: "#6C757D",
          subheadline: "#343A40",
          blackish: "#0D0F10",
        },
      },
    },
  },
  plugins: [],
};
