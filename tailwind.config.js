/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'titleSectionGradient': "url('./src/assets/images/titleSectionGradient.jpg')"
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
