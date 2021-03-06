// ES6
// parallax effect
$(document).ready(() => {
    $(window).on('load scroll', () => {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 400 // fade out at 400px from top
        });
        $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });
});
​
// image "natural slow life effect"
​
const parallax = document.querySelector('.parallax');
​
window.addEventListener('scroll', () => {
  parallax.style.backgroundPositionY = -window.scrollY / 2 + "px";
});
