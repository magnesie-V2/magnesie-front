module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      height: {
        "screen/2": "50vh",
      },
      maxHeight: {
        104: "26rem",
      },
      width: {
        fit: "fit-content",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
