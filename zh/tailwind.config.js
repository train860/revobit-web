/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      fontFamily: {
        harmony: ["var(--font-harmony)"],
      },
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
      },
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
        "31/2": "3.125rem",
        18: "4.5rem",

        23: "5.75rem",
        "47/2": "5.875rem",
        24: "6rem",
        26: "6.5rem",
        30: "7.5rem",
        37: "9.25rem",
        40: "10rem",
        80: "20rem",
      },
      gap: {
        25: "6.25rem",
        31: "7.75rem",
      },
      margin: {
        "15/2": "1.875rem",
      },
      width: {
        150: "37.5rem",
        "7/10": "70%",
        225: "56.25rem",
      },
      height: {
        65: "16.25rem",
        195: "48.75rem",
      },
      flex: {
        2: "2",
        3: "3",
      },
      borderRadius: {
        5: "1.25rem",
        "15/2": "1.875rem",
      },
      blur: {
        60: "15rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
