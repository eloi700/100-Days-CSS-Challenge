const ring = document.querySelector(".ring");

for (let i = 1; i <= 40; i++) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.classList.add("line-" + i);
  ring.appendChild(line);
}
let x = 0;
for (let i = 0; i <= 7; i++) {
  const number = document.createElement("div");
  number.classList.add("number");
  number.classList.add("number-" + i);
  number.textContent = x;
  x = x + 5;
  ring.appendChild(number);
}
