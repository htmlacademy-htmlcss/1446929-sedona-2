const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".search-btn");
const closeButton = document.querySelector(".modal-close-btn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
