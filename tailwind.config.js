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
          DEFAULT: "#0F3A84", // deep automotive blue
          dark: "#0A2D6B", // deeper blue for hover states
        },
        secondary: {
          DEFAULT: "#D10F87", // hot magenta/pink
          dark: "#B00D73", // deeper magenta for hover states
        },
        accent: {
          DEFAULT: "#1E4A9F", // lighter automotive blue accent
          dark: "#0F3A84", // deeper blue for hover states
        },
        floral: {
          DEFAULT: "#E11F9A", // lighter magenta highlight
          dark: "#D10F87",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

