module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
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
