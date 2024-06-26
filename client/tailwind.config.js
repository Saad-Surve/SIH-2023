/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const hide = require("tailwind-scrollbar-hide");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006AFF",
        "text-black": "#040406",
        "text-gray": "#585874",
        "icon-gray": "#A8A8BD",
        "header-black": "#16161D",
        "background-gray": "#F1F1F4",
        "light-blue": "#E5F0FF",
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
      },
    },
    fontFamily: {
      saira: ["Saira", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
  },
  plugins: [hide, nextui(), require("flowbite/plugin")],
};
