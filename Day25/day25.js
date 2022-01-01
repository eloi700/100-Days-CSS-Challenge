const locIcon = document.querySelector(".marker");
const locCard = document.querySelector(".card");
const buttons = document.querySelectorAll(".action");

function icon() {
  locCard.classList.add("active");
  locIcon.classList.add("inactive");
}

locIcon.addEventListener("click", icon);

function btnAction() {
  locCard.classList.remove("active");
  locIcon.classList.remove("inactive");
}

buttons.forEach((button) => button.addEventListener("click", btnAction));
