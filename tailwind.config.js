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
          DEFAULT: "#f97316", // orange-500 - energy, action (from signage)
          dark: "#ea580c", // orange-600 - darker shade for hover states
        },
        secondary: {
          DEFAULT: "#dc2626", // red-600 - complementary accent color
          dark: "#b91c1c", // red-700 - darker shade for hover states
        },
        accent: {
          DEFAULT: "#dc2626", // Alias for secondary
          dark: "#b91c1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

