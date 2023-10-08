/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgWhite': '#FFFFFF',
        'textBlack': '#070F18',
        'textGray': '#575455',
        'bgNavy': '#1F7CFF',
        'bgPurple': '#191046',
        'bgPink': '#FF1FB3',
        'bgRed': '#F75C4E',
        'bgOrange': '#F7954E',
        'bgBlue': '#5C4EF7',
        'bgGray': '#F5F6FB',
        'textWhite': '#FFFFFF',
        'textRed': '#F75C4E',
      }
    },
  },
  plugins: [],
}

