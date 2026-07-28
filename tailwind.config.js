module.exports = {
  content: ["./src/**/*.{njk,html,md}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#002060",
          dark: "#00143f",
          light: "#0a3a8f",
        },
        accent: {
          DEFAULT: "#d97706",
          light: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
