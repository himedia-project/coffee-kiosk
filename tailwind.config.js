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
          "0%": { transform: "translateX(-25%)" }, // 할인문구가 초기에 바로 나오게 위치 조정
          "100%": { transform: "translateX(155%)" },
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
