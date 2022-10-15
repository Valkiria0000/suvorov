const btnClose = document.querySelector(".popup__btn");
const popup = document.querySelector(".popup");
const btnOpen = document.querySelector(".is-popup");
console.log(btnOpen);
btnClose.addEventListener("click", close);
function close() {
  popup.classList.remove("is-open");
}
btnOpen.addEventListener("click", open);
function open() {
  popup.classList.add("is-open");
}
