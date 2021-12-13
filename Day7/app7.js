const menu = document.querySelector(".menu-button");
const dropDownMenu = document.querySelector(".dropdown-menu");
const notifications = document.querySelector(".alert-messages");
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search");
const title = document.querySelector(".title");

menu.addEventListener("click", () => {
  dropDownMenu.classList.toggle("dropdown-menu--active");
  notifications.classList.toggle("alert-messages--move-right");
});

searchIcon.addEventListener("click", () => {
  title.classList.toggle("title--active");
  searchBar.classList.toggle("search--active");
});
