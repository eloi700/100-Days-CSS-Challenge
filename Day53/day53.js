const rangeSlider = document.querySelector(".range-slider__range");
const rangeValue = document.querySelector(".range-slider__value");

rangeSlider.addEventListener("change", function(){
  rangeValue.innerHTML = rangeSlider.value
});