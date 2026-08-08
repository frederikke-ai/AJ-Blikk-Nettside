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
          DEFAULT: "#011142",
          light: "#525d7e",
          dark: "#000b2e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
