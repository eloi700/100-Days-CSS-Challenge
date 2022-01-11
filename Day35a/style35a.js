document.querySelectorAll(".bar").forEach((bar) => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  bar.style.backgroundColor = randomColor;
});
