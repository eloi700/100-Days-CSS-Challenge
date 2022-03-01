const charTrigger = document.querySelector(".triggers");

for (let x = 0; x <= 9; x++) {
  const radioInput = document.createElement("input");
  radioInput.classList.add("radio");
  radioInput.name = "morse";
  radioInput.type = "radio";
  radioInput.id = "morse-" + x;
  charTrigger.appendChild(radioInput);

  const radioLabel = document.createElement("label");
  radioLabel.classList.add("trigger");
  radioLabel.id = "label-" + x;
  radioLabel.htmlFor = "morse-" + x;
  radioLabel.innerHTML = x;
  charTrigger.appendChild(radioLabel);
}

const alphabet=["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let val = alphabet.length;

for (let index = 0; index < val; index++) {
  const alphaInput = document.createElement("input");
  alphaInput.classList.add("radio");
  alphaInput.name = "morse";
  alphaInput.type = "radio";
  alphaInput.id = "morse-" + alphabet[index];
  charTrigger.appendChild(alphaInput);

  const alphaLabel = document.createElement("label");
  alphaLabel.classList.add("trigger");
  alphaLabel.id = "label-" + alphabet[index];
  alphaLabel.htmlFor = "morse-" + alphabet[index];
  alphaLabel.innerHTML = alphabet[index];
  charTrigger.appendChild(alphaLabel);
}

const lightTrigger = document.createElement('div')
lightTrigger.classList.add('light')
charTrigger.appendChild(lightTrigger);


