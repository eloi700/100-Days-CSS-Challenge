const grapesButton = document.getElementById("list-1");
const bananaButton = document.getElementById("list-2");
const appleButton = document.getElementById("list-3");
const strawberryButton = document.getElementById("list-4");

function displayFruitCard() {
  var element = document.getElementsByName("fruit-buttons");

  let value;
  for (i = 0; i < element.length; i++) {
    if (element[i].checked) {
      value = element[i].value;
    }
  }

  document.querySelector(".grapes").classList.remove("active");
  document.querySelector(".banana").classList.remove("active");
  document.querySelector(".apple").classList.remove("active");
  document.querySelector(".strawberry").classList.remove("active");

  switch (value) {
    case "grapes":
      document.querySelector(".grapes").classList.add("active");
      break;

    case "banana":
      document.querySelector(".banana").classList.add("active");
      break;

    case "apple":
      document.querySelector(".apple").classList.add("active");
      break;

    case "strawberry":
      document.querySelector(".strawberry").classList.add("active");
      break;
  }
}

grapesButton.addEventListener("click", displayFruitCard);
bananaButton.addEventListener("click", displayFruitCard);
appleButton.addEventListener("click", displayFruitCard);
strawberryButton.addEventListener("click", displayFruitCard);
