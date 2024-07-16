/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#ffac49",
        "custom-blue": "#0d2760",
      },
      fontFamily: {
        logo: ["Moon Get", "sans-serif"],
        titles: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
