/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "subtle-zoom": "subtle-zoom 20s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "subtle-zoom": {
          "0%, 100%": { transform: "scale(1.05)" },
          "50%": { transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        warm: "0 4px 14px -2px rgba(234, 88, 12, 0.08), 0 2px 6px -1px rgba(234, 88, 12, 0.06)",
      },
    },
  },
  plugins: [],
};
