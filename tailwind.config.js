/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(-80%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "slide-left": "slideLeft 0.5s ease-in-out",
        "slide-right": "slideRight 0.5s ease-in-out",
        "marquee-mobile": "marquee 12s linear infinite",
        "marquee-desktop": "marquee 10s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
