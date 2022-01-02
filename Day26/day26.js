const nextBtns = document.querySelectorAll(".next");
const quotations = document.querySelectorAll(".quotes");

function show(event) {
  const currentQuote = event.target.parentElement;
  for (quoteIdx in quotations) {
    if (quotations[quoteIdx] === currentQuote) {
      currentQuote.classList.remove("active");
      const nextIdx = (+quoteIdx + 1) % quotations.length;
      quotations[nextIdx].classList.add("active");
    }
  }
}

nextBtns.forEach((button) => button.addEventListener("click", show));
