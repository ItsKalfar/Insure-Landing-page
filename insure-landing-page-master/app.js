const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close");
const mobileMenu = document.querySelector(".slide-bar-wrapper");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});
