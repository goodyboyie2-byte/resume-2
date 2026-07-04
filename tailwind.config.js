/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          400: '#9B2C2C',
          500: '#800020',
          600: '#6B0000',
          700: '#550000',
          800: '#400000',
          900: '#2B0000',
        },
        gold: {
          400: '#FFD700',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
        },
      },
    },
  },
  plugins: [],
}
