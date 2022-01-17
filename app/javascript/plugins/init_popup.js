
const initPopup = () => {
  const first = document.getElementById('first-full-screen')
  if (first) {
    first.addEventListener('click', (event) => {
      first.classList.add('inactive-tab');
    });
  }
};

export { initPopup };
