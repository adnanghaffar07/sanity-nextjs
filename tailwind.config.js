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
      },
    },
  },
  plugins: [],
};
