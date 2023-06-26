/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'button': '0 8px 15px 0 rgba(50, 82, 223, 0.3)'
      },
      backgroundColor: {
        'primary': '#3252DF'
      },
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