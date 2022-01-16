document.querySelector(".border").addEventListener("click", openMenu);
document.querySelector(".menu").addEventListener("click", closeMenu);

function openMenu() {
  document.querySelector(".border").classList.add("active");
  document.querySelector(".menu").classList.add("active");
  document.querySelector(".border").classList.remove("inactive");
  document.querySelector(".menu").classList.remove("inactive");
}

function closeMenu() {
  document.querySelector(".border").classList.add("inactive");
  document.querySelector(".menu").classList.add("inactive");
  document.querySelector(".border").classList.remove("active");
  document.querySelector(".menu").classList.remove("active");
}
