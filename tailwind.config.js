const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroSection: "url('./src/assets/images/hero_section_landing.jpg')",
        importantWord: "url('./src/assets/images/importantWord.png')",
        informedPoster: "url('./src/assets/images/informedPoster.jpg')",
        gradientBackground: "url('./src/assets/images/gradientBackground.jpg')",
        titleSectionGradient:
          "url('./src/assets/images/titleSectionGradient.jpg')",
      },
      colors: {
        footerColor: "#06042E",
        titleColor: "#161439",
        purpleCustom: "#5751E1",
        yellowCustom: "#FFC224",
        grayCustom: "rgba(244, 243, 248, 1)",
      },
      fontFamily: {
        IranSans: ["Iran-Sans"],
        Pop_Med: ["Pop-Medium"],
        Sahel: ['"Pop-Medium"', '"Sahel"'],
      },
      screens: {},
    },
  },
  plugins: [nextui()],
};
