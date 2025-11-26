/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../shared/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d4a574", // warm bone/ivory - from bull skull aesthetic
          dark: "#b8956a", // darker shade for hover states
        },
        secondary: {
          DEFAULT: "#c08497", // soft pink/purple - from floral crown
          dark: "#a87085", // darker shade for hover states
        },
        accent: {
          DEFAULT: "#a8c5a0", // soft green - from floral crown
          dark: "#8fb085",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

