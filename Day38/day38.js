document.querySelector(".frame").addEventListener("click", showLogo);

let e = true;

function showLogo() {
  if (e == true) {
    document.querySelector(".black").classList.add("big");
    document.querySelector(".gold").classList.add("normal");
  } else {
    document.querySelector(".black").classList.remove("big");
    document.querySelector(".gold").classList.remove("normal");
  }
  e = !e;
}
