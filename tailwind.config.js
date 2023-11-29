/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        "public-sans": ["Public Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "#2D314D",
        "lime-Green": "#31D35C",
        "bright-cyan": "#2BB7DA",
      },
    },
  },
  daisyui: {
    themes: [] ,
  },
  plugins: [require("daisyui")],
};
