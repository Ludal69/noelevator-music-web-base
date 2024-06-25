/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#ffac49",
        "custom-blue": "#0d2760",
      },
      backgroundImage: {
        "custom-background": "url('./assets/images/background.jpg')",
      },
      fontFamily: {
        logo: ["Moon Get", "sans-serif"],
        titles: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
