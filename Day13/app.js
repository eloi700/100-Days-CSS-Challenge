const frontImages = document.querySelectorAll(".photo");
const closeBtn = document.querySelector(".close");
const detail = document.querySelector(".detail");

frontImages.forEach((photo) => {
  photo.addEventListener("click", () => {
    detail.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  detail.classList.remove("active");
});
