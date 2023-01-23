const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    nav.classList.toggle('nav-open');
  });

nav.addEventListener('click', function(event) {
      if (event.target.classList.contains('nav__link')) {
        hamburger.classList.remove('is-active');
        nav.classList.remove('nav-open');
      }
  });

let slides = document.querySelectorAll(".news__item");
let btnPrev = document.querySelector(".btn--prev");
let btnNext = document.querySelector(".btn--next");

let slideIndex = 1;

btnNext.addEventListener("click", function nextSlide() {
  showSlides(slideIndex += 1);
});

btnPrev.addEventListener("click",function previousSlide() {
  showSlides(slideIndex -= 1);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "grid";
}

showSlides(slideIndex);
