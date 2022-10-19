/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1600px" },
      lg: { max: "1200px" },
    },
    extend: {
      colors: {
        "rev-black": "#04040E",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
