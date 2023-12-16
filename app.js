const dialog = document.querySelector(".dialog");

setTimeout(() => {
  dialog.style.opacity = 1;
}, 1000);

const button = dialog.querySelector(".close-button");

button.addEventListener("click", function () {
  dialog.style.opacity = 0;
});
