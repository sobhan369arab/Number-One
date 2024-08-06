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
        VeryDarkPurple: "#06042E",
        DarkPurple: "#1c1A4A",
        Purple: "#5751E1",
        Orange: "#FFC224",
        Gray: "#D3D2DF",
        BlueGray:"#F7F7FA",
        TextGray1: "#B2BBCC",
        TextGray2: "#8C9AB4",
        White: "#F2F2F2",
      },
      // screens: {
      //   tablet: "640px",

      //   laptop: "1024px",

      //   desktop: "1280px",
      // },
    },
  },
  plugins: [],
};
