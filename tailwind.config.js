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
      lg: "1400px",
      xl: "1600px",
    },
    extend: {
      colors: {
        "rev-black": "#04040E",
        "rev-bg-black": "#08071B",
        "rev-bg-black-14": "#14142C",
        "rev-bg-black-0B": "#0B0A24",
        "rev-bg-contact": "#12122B",
      },
      padding: {
        15: "3.75rem",
        30: "7.5rem",
        40: "10rem",
      },
      width: {
        150: "37.5rem",
      },
      flex: {
        2: "2",
        3: "3",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
