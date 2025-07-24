/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
      },
      colors: {
        skyblue: "#87CEEB",
      },
    },
  },
  plugins: [],
};
