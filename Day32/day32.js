const plusInc = document.querySelector(".plus");
const minusInc = document.querySelector(".minus");
const numberIncDec = document.querySelector(".number");

let number = 0;

plusInc.addEventListener("click", () => {
  number += 1;
  numberIncDec.textContent = number;
});

minusInc.addEventListener("click", () => {
  number -= 1;
  numberIncDec.textContent = number;
});
