import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        "primary-orange": "#F17121",
        "gray-light": "#555555",
        "gray-light-2": "#EAEAEA",
        "gray-mid": "#D8D8D8",
        "gray-mid-2": "#636363",
        "primary-blue": "#3E79F3",
        "terquoise-blue": "#0E8AA3",
      },
      fontFamily: {
        "gilroy-bold": ["Gilroy-Bold", "sans-serif"],
        "gilroy-heavy": ["Gilroy-Heavy", "sans-serif"],
        "gilroy-light": ["Gilroy-Light", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "gilroy-regular": ["Gilroy-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
