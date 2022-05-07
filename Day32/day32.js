const plusInc = document.querySelector(".plus"),
  minusInc = document.querySelector(".minus"),
  numberIncDec = document.querySelector(".number");

let number = 0;

plusInc.addEventListener("click", () => {
  number += 1;
  numberIncDec.textContent = number;
});

minusInc.addEventListener("click", () => {
  number -= 1;
  numberIncDec.textContent = number;
});
