// @type {import('tailwindcss').Config}
import {heroui} from "@heroui/react";

export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  mode: "jit",
  theme: {
    extend: {


      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite'
      },
      
      colors: {
        primary: "#86efac", 
        secondary: "#2dd4bf", 
        dimWhite: "rgba(255, 255, 255, 0.7)", 
        dimBlue: "rgba(9, 151, 124, 0.1)", 
        greenStar:"#00A770"
      },

    
      screens: {
        xs: "480px", 
        ss: "620px", 
        sm: "768px", 
        md: "1060px", 
        lg: "1200px", 
        xl: "1700px",
      },
    },
  },
  darkMode: "class", 
  plugins: [heroui()]
 
};


