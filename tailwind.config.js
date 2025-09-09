// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        drvets: {
          green: "#1ABC9C",   // Primary Green (fresh, trustful)
          blue: "#3498DB",    // Primary Blue (professional, calm)
          dark: "#2C3E50",    // Dark Navy (headers, footer)
          light: "#ECF0F1",   // Light Gray (background)
          accent: "#16A085",  // Teal Accent
        },
      },
    },
  },
  plugins: [],
};
