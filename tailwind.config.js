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
          DEFAULT: "#e8a4b8", // soft rose pink - feminine floral
          dark: "#d48aa0", // deeper rose for hover states
        },
        secondary: {
          DEFAULT: "#f4a5c1", // lighter pink - delicate flower petals
          dark: "#e88ba8", // deeper pink for hover states
        },
        accent: {
          DEFAULT: "#d4a5c8", // soft lavender - feminine floral accent
          dark: "#c08ab0", // deeper lavender for hover states
        },
        floral: {
          DEFAULT: "#f5b8c8", // very soft pink - lightest floral tone
          dark: "#e8a4b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

