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
        "rev-bg-black-10": "#101025",
        "rev-bg-black-12": "#12122B",
        "rev-bg-black-03": "#030220",
        "rev-bg-contact": "#12122B",
        "rev-bg-blue-44": "#444FC4",
      },
      fontSize: {
        7: "1.75rem",
        9: "2.25rem",
      },
      padding: {
        7: "1.75rem",
        "15/2": "1.875rem",
        13: "3.25rem",
        15: "3.75rem",
        23: "5.75rem",
        30: "7.5rem",
        40: "10rem",
        80: "20rem",
      },
      margin: {
        "15/2": "1.875rem",
      },
      width: {
        150: "37.5rem",
        "7/10": "70%",
      },
      height: {
        65: "16.25rem",
      },
      flex: {
        2: "2",
        3: "3",
      },
      borderRadius: {
        5: "1.25rem",
      },
      blur: {
        60: "15rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
