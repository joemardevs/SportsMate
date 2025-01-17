/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./context/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f0566a",
        },
        secondary: {
          DEFAULT: "#2b2d34",
        },
        tertiary: {
          DEFAULT: "#efc2c8",
        },
        black: {
          DEFAULT: "#000000",
          100: "#333333",
        },
        gray: {
          DEFAULT: "#f5f5f5",
          100: "#e5e5e5",
          200: "#c9c9c9",
        },
      },
      fontFamily: {
        sfbold: "SF-Pro-Display-Bold",
        sfmedium: "SF-Pro-Display-Medium",
        sfregular: "SF-Pro-Display-Regular",
      },
    },
  },
  plugins: [],
};
