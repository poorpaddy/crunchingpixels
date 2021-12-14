module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sm: "5px 5px 4px 0px rgba(0,0,0,0.6)",
        md: "10px 10px 30px 0px rgba(0,0,0,0.18)",
        lg: "0px 0px 20px 0px rgba(0,0,0,0.21)",
      },
      backgroundImage: {
        home: "url('../images/bg/home.jpg')",
        header: "url('../images/bg/header.jpg')",
      },
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
