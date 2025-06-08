/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // React 파일 경로 포함
  ],
  safelist: ["swiper-pagination-bullet", "swiper-pagination-bullet-active"],
  theme: {
    extend: {},
  },
  plugins: [],
};
