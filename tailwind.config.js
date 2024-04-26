/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSerif: ["DM Serif Display", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        DarkViolet: "hsl(256, 26%, 20%)",
        GrayishBlue: "hsl(216, 30%, 68%)",
        VeryDarkViolet: "hsl(270, 9%, 17%)",
        DarkGrayishViolet: "hsl(273, 4%, 51%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        footer: "url('/src/assets/bg-pattern-footer-desktop.svg')",
        "footer-mobile": "url('/src/assets/bg-pattern-footer-mobile.svg')",
        "hero-left": "url('/src/assets/bg-pattern-intro-left-desktop.svg')",
        "hero-left-mobile":
          "url('/src/assets/bg-pattern-intro-left-mobile.svg')",
        "hero-right": "url('/src/assets/bg-pattern-intro-right-desktop.svg')",
        "hero-right-mobile":
          "url('/src/assets/bg-pattern-intro-right-mobile.svg')",
        "how-we-work": "url('/src/assets/bg-pattern-how-we-work-desktop.svg')",
        "how-we-work-mobile":
          "url('/src/assets/bg-pattern-how-we-work-mobile.svg')",
        nav: "url('/src/assets/bg-pattern-mobile-nav.svg')",
      },
    },
  },
  plugins: [],
};
