module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ye sari React components scan karega
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'solutions-grey': '#394352',
        'solutions-bg ': '#232e3f',
        'solutions-text': '#dfdbdd'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
