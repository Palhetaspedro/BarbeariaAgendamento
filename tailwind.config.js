/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bege:       "#F5F5DC",
        preto:      "#121212",
        amarelo:    "#FDE047",
        cinza:      "#6B6B6B",
        begeEscuro: "#E8E8C8",
      },
      fontFamily: {
        sans:    ["DM Sans", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
