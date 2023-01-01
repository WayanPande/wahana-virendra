/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-wahana': '#FFC947',
        'yellow-wahana-light': '#FFF6E1',
        'blue-wahana': '#008AA1',
        'blue-wahana-light': '#E5FBFF',
        'gray-wahana': '#8B8B8B'
      },
      boxShadow: {
        card: 'inset 0px -90px 30px -15px rgba(0,0,0,0.5)'
      },
      backgroundImage: {
        'footer-texture': "url('./assets/footer.png')",
        'section-texture': "url('./assets/bg-section.png')",
        'payment-texture': "url('./assets/payment-section.png')"
      }
    },
  },
  plugins: [],
}
