module.exports = {
  content: [
    './views/**/*.ejs',
    './assets/js/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'logo-color': '#0a1f30',
      },
      animation: {
        scroll: 'scroll 5s linear infinite',
      },
      keyframes: {
        scroll: {
          'from': { transform: 'translateX(-20%)' },
          'to': { transform: 'translateX(-30%)' },
        },
      },
    }
  },
  plugins: []
}
