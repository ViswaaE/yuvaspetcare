/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        drvets: {
          green: {
            DEFAULT: "#2E7D32", // Primary Green
            light: "#66BB6A",   // Light Green
          },
          blue: {
            DEFAULT: "#1976D2", // Primary Blue
            light: "#64B5F6",   // Light Blue
          },
          teal: "#26A69A",      // Accent
          neutral: {
            dark: "#333333",
            light: "#F5F5F5",
            white: "#FFFFFF",
          },
        },
      },
    },
  },
  plugins: [],
};
