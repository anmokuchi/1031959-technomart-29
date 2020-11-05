// Modal add cart

const addCartButtons = document.querySelectorAll(".option-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");
const buttonContinue = cartPopup.querySelector(".button-continue");

for (let j = 0; j < addCartButtons.length; j++) {
  addCartButtons[j].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
}

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

buttonContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
