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
        veryDarkPurple: "#06042E",
        darkPurple: "#1c1A4A",
        purpleCustom: "#5751E1",
        orange: "#FFC224",
        grayCustom: "#D3D2DF",
        blueGray: "#F7F7FA",
        textGray1: "#B2BBCC",
        textGray2: "#8C9AB4",
        grayBorder: "#B5B5C3",
        white2: "#F2F2F2",
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
