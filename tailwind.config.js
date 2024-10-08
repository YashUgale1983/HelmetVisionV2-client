/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js,jsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      md: "768px",
      lg: "1280px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
};
