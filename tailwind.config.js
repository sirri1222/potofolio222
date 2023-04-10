/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nm: ["'Nanum Myeongjo', serif"],
        gm: ["GowunBatang-Regular"],
        NanumSquare: ["NanumSquareRound"],
        ju: ["'Jua', sans-serif"],
        dh: ["'Do Hyeon', sans-serif"],
        dongle: ["'Dongle', sans-serif"],
        gw: ["GangwonEdu"],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
