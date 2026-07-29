module.exports = {
  content: ["./src/**/*.{njk,html,md}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3d3835",
          dark: "#2b2724",
          light: "#f6f4f2",
        },
        accent: {
          DEFAULT: "#963a24",
          light: "#b06b5a",
          dark: "#752d1c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
