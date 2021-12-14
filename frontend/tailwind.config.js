module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rock: ["Rock", "serif"],
        roboto: ["Roboto", "serif"],
      },
      colors: {
        primary: "#3eaffb",
        secondary: "#4a4a4a",
        orange: "#ef821d",
        button: {
          primary: "#3daefa",
        },
        gray: {
          100: "#f9f9f9",
          200: "#e7e7e7",
          300: "#dcdcdc",
          400: "#9b9b9b",
        },
      },
    },
  },
  plugins: [],
};
