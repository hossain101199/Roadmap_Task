/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1F2C",
        secondary: "#2D364D",
        textColor: "#BFC6D7",
      },
    },
  },
  plugins: [],
};
