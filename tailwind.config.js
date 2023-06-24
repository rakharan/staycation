/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3252DF',
        gray: {
          900: '#152C5B'
        }
      }
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}