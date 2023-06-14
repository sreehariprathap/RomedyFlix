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
        secondary: "#FBB500",
        dark: "#080202",
        "dark-secondary": "#374259",
        light: "#F1F6F9",
        "light-secondary":"#FFFAF4"
      },
      backgroundImage:{
        "black-tint":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4904935607055322) 75%, rgba(255,255,255,0) 100%)",
        "nav-tint":"linear-gradient(180deg, rgba(8,2,2,1) 0%, rgba(8,2,2,1) 70%, rgba(255,255,255,0) 100%)"
      }
    },
  },
  plugins: [],
}
