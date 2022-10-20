/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1600px",
    },
    extend: {
      colors: {
        "rev-black": "#04040E",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
