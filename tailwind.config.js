/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        serviceCard: "0px 0px 4.5px rgba(0, 0, 0, 0.21)",
      },
      boxShadow: {
        caseStudyRecentWorkCard: "0px 1px 3px 0px rgba(0, 0, 0, 0.25)",
        blogImage: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        standardCodeAutomation: "rgb(247 224 34)",
      },
      zIndex: {
        dropdown: "-1",
      },
      animation: {
        "slide-down": "slideDown 0.5s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-30%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-30%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-highlights")],
};
