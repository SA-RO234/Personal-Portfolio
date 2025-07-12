/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        boldonse: ["Boldonse", "system-ui"],
        dm: ["DM Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#fb8569",
        greenMain: "#001d21",
        dark: "#0D0D0E",
        darkLight: "#F2EFEA",
        pink: "#E32C48",
      },
    },
  },
  plugins: [],
};
