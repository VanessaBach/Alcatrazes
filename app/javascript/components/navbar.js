const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        navbar.classList.add('nav-bg');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };