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
  $('.slider').slick({
    slidesToShow: 3,
    speed: 600,
    infinite: true,
    touchTreshold: 15,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});