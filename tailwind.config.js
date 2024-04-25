/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // https://fonts.google.com/specimen/DM+Serif+Display
        DMSerif: ["DM Serif", "sans-serif"],
        // https://fonts.google.com/specimen/Karla
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        DarkViolet: "hsl(256, 26%, 20%)",
        GrayishBlue: "hsl(216, 30%, 68%)",
        VeryDarkViolet: "hsl(270, 9%, 17%)",
        DarkGrayishViolet: "hsl(273, 4%, 51%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
