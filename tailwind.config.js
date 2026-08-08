module.exports = {
  content: ["./src/**/*.{njk,html,md}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#011142",
          dark: "#000a2c",
          light: "#F2F4F7",
        },
        accent: {
          DEFAULT: "#011C6B",
          light: "#1E3A8A",
          dark: "#010D38",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
