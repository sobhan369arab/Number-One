/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
<<<<<<< HEAD
        'heroSection': "url('./src/assets/images/hero_section_landing.jpg')",
        'importantWord': "url('./src/assets/images/importantWord.png')",
        'informedPoster': "url('./src/assets/images/informedPoster.jpg')",
        'gradientBackground': "url('./src/assets/images/gradientBackground.jpg')",
      },
      backgroundSize: {
        11: "11px",
        70: "70%",
=======
        'titleSectionGradient': "url('./src/assets/images/titleSectionGradient.jpg')"
>>>>>>> 2c23e377654e3d1626e00dccf231f84aa45aa792
      },
      colors: {
        footerColor: "#06042E",
        titleColor: "#161439",
        purpleCustom: "#5751E1",
        yellowCustom: "#FFC224",
      },
      fontFamily: {
        IranSans: ["Iran-Sans"],
        Pop_Med: ["Pop-Medium"],
      },
      screens: {
        'mobile': {'max': '690px'}
      },
    },
  },
  plugins: [],
};
