// Offers slider

const buttonPrevious = document.querySelector(".slider-button-back");
const buttonNext = document.querySelector(".slider-button-next");
const offersSlides = document.querySelectorAll(".offers-slide");
const offersControls = document.querySelectorAll(".offers-control-button");

let offersIndex = 1;
let offersCount = offersSlides.length;

buttonPrevious.addEventListener("click", function() {
  offersSlides[offersIndex].classList.remove('offers-slide-current');
  offersControls[offersIndex].classList.remove('current');
  offersIndex--;
  if (offersIndex < 0){
    offersIndex = offersCount-1;
  }

  offersSlides[offersIndex].classList.add('offers-slide-current');
  offersControls[offersIndex].classList.add('current');
});

buttonNext.addEventListener('click', function() {
  offersSlides[offersIndex].classList.remove('offers-slide-current');
  offersControls[offersIndex].classList.remove('current');
  offersIndex++;
  if (offersIndex > offersCount-1){
      offersIndex = 0;
  }

  offersSlides[offersIndex].classList.add('offers-slide-current');
  offersControls[offersIndex].classList.add('current');
});

// Modal contact

const contactButton = document.querySelector(".contacts-button");
const contactPopup = document.querySelector(".modal-contact");
const contactClose = contactPopup.querySelector(".modal-close");
const contactForm = document.querySelector(".contact-form");
const contactUsername = contactPopup.querySelector(".contact-name");
const contactEmail = contactPopup.querySelector(".contact-email");
const contactIssue = contactPopup.querySelector(".contact-issue");

let isStorageSupport = true;
let username = "";
let email = "";

try {
  username = localStorage.getItem("username");
  email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

  if (username && email) {
    contactUsername.value = username;
    contactEmail.value = email;
    contactIssue.focus();
  } else if (username && !email) {
    contactUsername.value = username;
    contactEmail.focus();
  } else if (email && !username) {
    contactEmail.value = email;
    contactUsername.focus();
  } else {
    contactUsername.focus();
  }
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactUsername.value || !contactEmail.value || !contactIssue.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", contactUsername.value);
      localStorage.setItem("email", contactEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});

// Modal map

const mapLink = document.querySelector(".contacts-map-link");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
