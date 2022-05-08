const menuFace = document.querySelector(".menu__icon"),
  menu = document.querySelector(".menu"),
  notificationsBox = document.querySelector(".notifications"),
  searchIcon = document.querySelector(".search__icon"),
  searchInput = document.querySelector(".search__input");

menuFace.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  notificationsBox.classList.toggle("move-right");
});

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("search--active");
});
