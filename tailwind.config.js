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
        "fade-in": "fadeIn 0.3s ease-out forwards",
        blob: "blob 7s infinite",
        shimmer: "shimmer 8s infinite",
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
        // Opacity only, so it can't fight an element's own translate classes.
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Diagonal light sweep across a banner.
        shimmer: {
          "0%": { transform: "translateX(-100%) rotate(12deg)" },
          "100%": { transform: "translateX(200%) rotate(12deg)" },
        },
        // Slow drifting background shapes.
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
    },
  },
};
