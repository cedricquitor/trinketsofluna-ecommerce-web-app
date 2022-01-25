module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
