/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#FB8500",
        secondary: "#FFB84C",
        dark: "#080202",
        "dark-secondary": "#374259",
        light: "#F1F6F9",
        "light-secondary":"#FFFAF4"
      },
    },
  },
  plugins: [],
}
