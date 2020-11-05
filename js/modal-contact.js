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
