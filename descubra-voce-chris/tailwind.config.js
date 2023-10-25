/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#160F24",
        secondary: "#8A11C0",
        mediumPurple: "#270E3B",
        superDarkPurple:"#120D1D",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "#2420E3",
        dimPurple: "rgba(106, 9, 151, 0.2)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};