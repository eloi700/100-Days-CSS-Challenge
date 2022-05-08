const menu = document.querySelector(".menu-button"),
  dropDownMenu = document.querySelector(".dropdown-menu"),
  notifications = document.querySelector(".alert-messages"),
  searchIcon = document.querySelector(".search-icon"),
  searchBar = document.querySelector(".search"),
  title = document.querySelector(".title");

menu.addEventListener("click", () => {
  dropDownMenu.classList.toggle("dropdown-menu--active");
  notifications.classList.toggle("alert-messages--move-right");
});

searchIcon.addEventListener("click", () => {
  title.classList.toggle("title--active");
  searchBar.classList.toggle("search--active");
});
