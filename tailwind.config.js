const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  darkMode: "class", //Apply Dark Mode feature
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
    },

    extend: {
      backgroundImage: {},
      fontFamily: {
        sans: ["Inter", "sans-serif"],

        serif: ["Georgia", "serif"],

        mono: ["ui-monospace", "SFMono-Regular"],

        display: ["Oswald", "sans-serif"],

        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0f4c5c",
        secondary: "ed8900",
        black: "#06113C",
        "background-white": "#FFFBF5",
        teal: "#76ABAE",
        "space-grey": "#EEEEEE",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
});
