const bigImages = document.querySelectorAll(".big");
const smallImages = document.querySelectorAll(".small");

let currentSmall = true;

smallImages.forEach((smallImage) =>
  smallImage.addEventListener("click", showBigImage)
);

bigImages.forEach((bigImage) =>
  bigImage.addEventListener("click", showBigImage)
);

function showBigImage(e) {
  if (currentSmall === true) {
    currentSmall = false;
    for (i in smallImages) {
      if (smallImages[i] === e.target) {
        // bigImages[i].style.display = "block";
        bigImages[i].classList.add("active");
      }
    }
  } else {
    currentSmall = true;
    // e.target.style.display = "none";
    e.target.classList.remove("active");
    // e.target.classList.add("inactive");
  }
}
