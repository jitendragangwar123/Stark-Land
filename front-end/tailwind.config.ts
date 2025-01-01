import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "dark-1": "#000",
        "white-1": "#fff",
        primary: "#f77448",
        secondary: "#3B82F6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },  // Start from right
          '50%': { transform: 'translateX(0)' },    // Move to center
          '100%': { transform: 'translateX(-100%)' }, // Move out to left
        },
      },
      animation: {
        slideIn: 'slideIn 10s linear infinite', // Set the duration for the infinite sliding
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
