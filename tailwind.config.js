/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#d3c333ff",
          dark: "#e0d149ff",
          light: "#C9FFF7"
        }
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Inter", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
};
