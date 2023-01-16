const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    nav.classList.toggle('nav-open');
  });

nav.addEventListener('click', function(event) {
      if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('is-active');
        nav.classList.remove('nav-open');
      }
  });

$(document).ready(function() {
  $('.slydir').slick({
    slidesToShow: 1,
    speed: 600,
    infinite: false,
    touchTreshold: 15,
    variableWidth: false,
  });
});