const contactsButton = document.querySelector(".contacts-button");
const contactsPopup = document.querySelector(".modal-contact");
const contactsClose = contactsPopup.querySelector(".modal-close");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
});
