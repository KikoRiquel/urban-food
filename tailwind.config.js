import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#f1f1f1",
        black: "#2f2f35",
        blue: {
          50: "#CAFBF5",
          100: "#CAFBF5",
          200: "#97F7F3",
          300: "#60E3E8",
          400: "#39C1D2",
          500: "#0594B5",
          600: "#03739B",
          700: "#025782",
          800: "#013E68",
          900: "#002C56",
        },
        purple: {
          50: "#F2EAFA",
          100: "#E4D4F4",
          200: "#C9A9E9",
          300: "#AE7EDE",
          400: "#9353D3",
          500: "#7828C8",
          600: "#6020A0",
          700: "#481878",
          800: "#301050",
          900: "#180828",
        },
        green: {
          50: "#EAFCD9",
          100: "#EAFCD9",
          200: "#D0F9B3",
          300: "#ACEF8A",
          400: "#88E06A",
          500: "#57CC3D",
          600: "#3AAF2C",
          700: "#22921E",
          800: "#137617",
          900: "#0B6116",
        },
        red: {
          50: "#FDE3D7",
          100: "#FDE3D7",
          200: "#FCC0AF",
          300: "#F79586",
          400: "#EF6C66",
          500: "#E5373F",
          600: "#C4283D",
          700: "#A41B3A",
          800: "#841135",
          900: "#6D0A32",
        },
        pink: {
          50: "#FFEDFA",
          100: "#FFDCF5",
          200: "#FFB8EB",
          300: "#FF95E1",
          400: "#FF71D7",
          500: "#FF4ECD",
          600: "#CC3EA4",
          700: "#992F7B",
          800: "#661F52",
          900: "#331029",
        },
        yellow: {
          50: "#FDF4CA",
          100: "#FDF4CA",
          200: "#FBE796",
          300: "#F3D261",
          400: "#E7BB39",
          500: "#D89B00",
          600: "#B97F00",
          700: "#9B6600",
          800: "#7D4E00",
          900: "#673E00",
        },
        cyan: {
          50: "#F0FCFF",
          100: "#E6FAFE",
          200: "#D7F8FE",
          300: "#C3F4FD",
          400: "#A5EEFD",
          500: "#7EE7FC",
          600: "#06B7DB",
          700: "#09AACD",
          800: "#0E8AAA",
          900: "#053B48",
        },
        zinc: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
      },
    },
    darkMode: "class",
    plugins: [
      nextui({
        addCommonColors: true,
      }),
    ],
  },
};
