/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/pages/admin/**"
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'cursive'],
      },
      colors: {
        'primary': '#F77A40',
        'text-primary': '#2E2E2E',
        'text-secondary': '#6B7280',
        'primary-dark': '#E56A30'
      },
    },
  },
  plugins: [],
} 