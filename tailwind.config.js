/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: {
          accent: '#a18a68',
          white: '#ffffff',
          black: '#000000',
        },
        neutral: {
          darkGray: '#707070',
          gray: '#d8d8d8',
          lightGray: '#efefef',
        },
        service: {
          errors: '#d82700',
        },
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      fontFamily: {
        main: ['DM Sans', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
