const contactButton = document.querySelector(".contacts-button");
const contactPopup = document.querySelector(".modal-contact");
const contactClose = contactPopup.querySelector(".modal-close");
const contactForm = document.querySelector(".contact-form");
const contactUsername = contactPopup.querySelector(".contact-name");
const contactEmail = contactPopup.querySelector(".contact-email");
const contactIssue = contactPopup.querySelector(".contact-issue");

let isUsernameSupport = true;
let username = "";

try {
  username = localStorage.getItem("username");
} catch (err) {
  isUsernameSupport = false;
}

let isEmailSupport = true;
let email = "";

try {
  email = localStorage.getItem("email");
} catch (err) {
  isEmailSupport = false;
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
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactUsername.value || !contactEmail.value || !contactIssue.value) {
    evt.preventDefault();
  } else {
    if (isUsernameSupport) {
      localStorage.setItem("username", contactUsername.value);
    }
    if (isEmailSupport) {
      localStorage.setItem("email", contactEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
    }
  }
});
