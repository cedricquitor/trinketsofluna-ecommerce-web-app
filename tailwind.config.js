module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        playfair: "'Playfair Display', serif",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
