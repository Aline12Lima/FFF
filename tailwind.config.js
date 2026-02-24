/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garanta que o caminho para a pasta src está correto
  ],
  theme: {
    extend: {
      colors: {
        construct: {
          dark: "#121212",
          yellow: "#FFB800",
        }
      }
    },
  },
  plugins: [],
}