const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
  parallax.style.marginTop = -window.scrollY / 2 + "%";
});
