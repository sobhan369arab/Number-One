/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      backgroundSize: {
        11: "11px",
        70: "70%",
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
      // screens: {
      //   tablet: "640px",

      //   laptop: "1024px",

      //   desktop: "1280px",
      // },
    },
  },
  plugins: [
    // plugin(function ({ addBase, theme }) {
    //   addBase({
    //     h1: { fontSize: theme("fontSize.2xl") },
    //     h2: { fontSize: theme("fontSize.xl") },
    //     h3: { fontSize: theme("fontSize.lg") },
    //   });
    // }),
  ],
};
