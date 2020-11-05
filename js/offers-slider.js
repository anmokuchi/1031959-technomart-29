// Offers slider

const buttonPrevious = document.querySelector(".slider-button-back");
const buttonNext = document.querySelector(".slider-button-next");
const offersSlides = document.querySelectorAll(".offers-slide");
const offersControls = document.querySelectorAll(".offers-control-button");

let offersIndex = 1;
let offersCount = offersSlides.length;

buttonPrevious.addEventListener("click", function(evt) {
  evt.preventDefault();

  offersSlides[offersIndex].classList.remove("offers-slide-current");
  offersControls[offersIndex].classList.remove("current");
  offersIndex--;
  if (offersIndex < 0) {
    offersIndex = offersCount-1;
  }

  offersSlides[offersIndex].classList.add("offers-slide-current");
  offersControls[offersIndex].classList.add("current");
});

buttonNext.addEventListener("click", function(evt) {
  evt.preventDefault();

  offersSlides[offersIndex].classList.remove("offers-slide-current");
  offersControls[offersIndex].classList.remove("current");
  offersIndex++;
  if (offersIndex > offersCount-1) {
      offersIndex = 0;
  }

  offersSlides[offersIndex].classList.add("offers-slide-current");
  offersControls[offersIndex].classList.add("current");
});

offersControls.forEach(function (item, k) {
  item.addEventListener("click", function(evt) {
    evt.preventDefault();

    offersControls.forEach(function (control) {
      control.classList.remove("current");
    });

    offersSlides.forEach(function (slide) {
      slide.classList.remove("offers-slide-current");
    });

    item.classList.add("current");
    offersSlides[k].classList.add("offers-slide-current");
    offersIndex = k;
  });
});
