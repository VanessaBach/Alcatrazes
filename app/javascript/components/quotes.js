import Typed from 'typed.js';

const initQuotes = () => {
  new Typed('#banner-typed-text', {
    strings: ["ALCATRAZES"],
    typeSpeed: 200,
    loop: true
  });
}

export { initQuotes };
