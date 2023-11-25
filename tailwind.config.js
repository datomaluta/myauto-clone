/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD4100",
        "lighter-orange": "rgb(255, 236, 230)",
        "light-orange": "rgb(255 217 204)",
        "light-gray": "#E9EAEB",
        "light-gray-shade": "#5d5d5e",
        "gray-for-bg": "#F2F3F6",
        "text-gray": "#080808	",
        "text-orange": "#fd4100",
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "800px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
