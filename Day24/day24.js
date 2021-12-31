const finishBtn = document.querySelector("#button");
const finishLabel = document.querySelector(".finish");
const circle = document.querySelector(".circle");
const check = document.querySelector(".fas");

finishBtn.addEventListener("click", () => {
  finishLabel.classList.toggle("active");
  circle.classList.toggle("active");
  check.classList.toggle("active");
});
