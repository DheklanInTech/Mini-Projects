"use strict";

const btnShowModal = document.querySelectorAll(".show-modal");
const hidden = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e) {
  //   console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// for (leddcvdt i = 0; i < btnShowModal.length; i++) {
//   btnShowModal[i].addEventListener("click", function() {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });
// }

// if (btnCloseModal || overlay) {
//   btnCloseModal.addEventListener("click", function() {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   });
//   overlay.addEventListener("click", function() {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   });
// }
