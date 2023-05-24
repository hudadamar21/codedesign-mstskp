/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC881D",
        light: "#FFF6ED",
        dark: "#0D0E25",
      },
      fontFamily: {
        "dm-sans": "'DM Sans', sans-serif",
        "source-sans-pro": "'Source Sans Pro', sans-serif",
      },
      screens: {
        lg: "1180px",
      },
    },
  },
  plugins: [],
};
