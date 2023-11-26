/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD4100",
        "lighter-orange": "rgb(255, 236, 230)",
        "light-orange": "rgb(255 217 204)",
        "light-gray": "#E9EAEB",
        "light-gray-shade": "#5d5d5e",
        "text-light-gray": "#C2C0C3",
        "gray-for-bg": "#F2F3F6",
        "text-gray": "#080808	",
        "text-orange": "#fd4100",
        "common-blue": "#272A37",
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "800px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
});
