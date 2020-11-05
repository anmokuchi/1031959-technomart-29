// Services slider

const serviceButtons = document.querySelectorAll(".service-button");
const serviceSlides = document.querySelectorAll(".services-slide");
const servicesWrapper = document.querySelector(".services-description");

serviceButtons.forEach(function (item, i) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();

    serviceButtons.forEach(function (button) {
      button.classList.remove("current");
    });

    serviceSlides.forEach(function (slide) {
      slide.classList.remove("services-slide-current");
    });

    servicesWrapper.classList.forEach(function (className) {
      if (className.startsWith("services-description-wrapper")) {
        servicesWrapper.classList.remove(className);
      }
    });

    item.classList.add("current");
    serviceSlides[i].classList.add("services-slide-current");
    servicesWrapper.classList.add("services-description-wrapper-" + [i+1]);
  });
});
