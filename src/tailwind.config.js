module.exports = {
  content: [
    './views/**/*.ejs',
    './assets/js/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {

        'cross-pattern': `url("data:image/svg+xml,%3Csvg id='10015.io' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='svg-pattern' x='0' y='0' width='15' height='15' patternUnits='userSpaceOnUse' patternTransform='scale(10) translate(10, 10) rotate(0) skewX(0)'%3E%3Csvg width='10' height='10' viewBox='0 0 100 100'%3E%3Cg fill='%2347d3ff' opacity='0.1'%3E%3Cpath d='M17.3113 0L0.595015 16.4187L33.4325 49.8513L0 82.6887L16.4187 99.405L49.8513 66.5675L82.6887 100L99.405 83.5813L66.5675 50.1488L100 17.3113L83.5813 0.595015L50.1488 33.4325L17.3113 0Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='rgba(255, 255, 255, 0)'%3E%3C/rect%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23svg-pattern)'%3E%3C/rect%3E%3C/svg%3E")`,
        'ring-pattern':`url("data:image/svg+xml,%3Csvg id='10015.io' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='svg-pattern' x='0' y='0' width='30' height='30' patternUnits='userSpaceOnUse' patternTransform='translate(20, 20) rotate(20) skewX(0)'%3E%3Csvg width='10' height='10' viewBox='0 0 100 100'%3E%3Cg fill='%2347ff4c' opacity='0.3'%3E%3Cpath d='M88.3721 50C88.3721 71.1923 71.1923 88.3721 50 88.3721C28.8077 88.3721 11.6279 71.1923 11.6279 50C11.6279 28.8077 28.8077 11.6279 50 11.6279C71.1923 11.6279 88.3721 28.8077 88.3721 50ZM100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z' fill-rule='evenodd' clip-rule='evenodd'%3E%3C/path%3E%3C/g%3E%3C/svg%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='rgba(255, 255, 255, 0)'%3E%3C/rect%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23svg-pattern)'%3E%3C/rect%3E%3C/svg%3E")`,
      }
    }
  },
  plugins: []
}
