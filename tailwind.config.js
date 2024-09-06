/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('./src/assets/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
}

