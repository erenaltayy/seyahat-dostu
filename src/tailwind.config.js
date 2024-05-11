module.exports = {
  content: [
    './views/**/*.ejs',
    './assets/js/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'round-pattern': `url("data:image/svg+xml,%3Csvg id='10015.io' viewBox='0 0 20 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='svg-pattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse' patternTransform='translate(0, 0) rotate(0) skewX(0)'%3E%3Csvg width='20' height='20' viewBox='0 0 100 100'%3E%3Cg fill='%2347ff4c' opacity='0.3'%3E%3Cpath d='M50.0439 50.0439C22.7868 49.2528 0.835069 27.3011 0.0439453 0.0439453C27.3011 0.835069 49.2528 22.7868 50.0439 50.0439Z'%3E%3C/path%3E%3Cpath d='M50.0439 50C22.7868 50.7911 0.835069 72.7429 0.0439453 100C27.3011 99.2089 49.2528 77.2571 50.0439 50Z'%3E%3C/path%3E%3Cpath d='M50 50.0439C77.2571 49.2528 99.2089 27.3011 100 0.0439453C72.7429 0.835069 50.7911 22.7868 50 50.0439Z'%3E%3C/path%3E%3Cpath d='M50 50C77.2571 50.7911 99.2089 72.7429 100 100C72.7429 99.2089 50.7911 77.2571 50 50Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='rgba(255, 255, 255, 0)'%3E%3C/rect%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23svg-pattern)'%3E%3C/rect%3E%3C/svg%3E")`,
        'ring-pattern':`url("data:image/svg+xml,%3Csvg id='10015.io' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='svg-pattern' x='0' y='0' width='30' height='30' patternUnits='userSpaceOnUse' patternTransform='translate(20, 20) rotate(20) skewX(0)'%3E%3Csvg width='10' height='10' viewBox='0 0 100 100'%3E%3Cg fill='%2347ff4c' opacity='0.3'%3E%3Cpath d='M88.3721 50C88.3721 71.1923 71.1923 88.3721 50 88.3721C28.8077 88.3721 11.6279 71.1923 11.6279 50C11.6279 28.8077 28.8077 11.6279 50 11.6279C71.1923 11.6279 88.3721 28.8077 88.3721 50ZM100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z' fill-rule='evenodd' clip-rule='evenodd'%3E%3C/path%3E%3C/g%3E%3C/svg%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='rgba(255, 255, 255, 0)'%3E%3C/rect%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23svg-pattern)'%3E%3C/rect%3E%3C/svg%3E")`,
      }
    }
  },
  plugins: []
}
