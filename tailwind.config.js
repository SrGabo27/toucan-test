/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "mr-de-haviland": ['"Mr De Haviland"', "cursive"],
        worksans: ['"Work Sans"', "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "var(--blue)",
          400: "var(--blue-400)",
        },
        green: {
          DEFAULT: "var(--green)",
        },
        gray: {
          DEFAULT: "var(--gray)",
        },
        black: {
          DEFAULT: "var(--black)",
        },
      },
    },
  },
  plugins: [],
};
