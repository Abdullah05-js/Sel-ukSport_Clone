// @type {import('tailwindcss').Config}
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit", // Just-in-Time mode for faster builds
  theme: {
    extend: {
      // Custom Animations
      animation: {
        'gradient-flow': 'gradient-flow 3s ease infinite',
      },
      keyframes: {
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },

      // Custom Colors
      colors: {
        primary: "#86efac", // Light green
        secondary: "#2dd4bf", // Teal
        dimWhite: "rgba(255, 255, 255, 0.7)", // Semi-transparent white
        dimBlue: "rgba(9, 151, 124, 0.1)", // Semi-transparent blue-green
      },

      // Custom Breakpoints
      screens: {
        xs: "480px", // Extra small screens
        ss: "620px", // Slightly small screens
        sm: "768px", // Small screens
        md: "1060px", // Medium screens
        lg: "1200px", // Large screens
        xl: "1700px", // Extra large screens
      },
    },
  },
  darkMode: "class", // Enables class-based dark mode
  plugins: [], // Add any plugins here if needed
  important: true, // Ensures Tailwind styles take precedence
};