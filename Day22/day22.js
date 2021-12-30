const calories = document.querySelector(".mid-count");
const steps = document.querySelector(".left-count");
const km = document.querySelector(".right-count");

function progress(element, finalValue, timeInterval) {
  let counter = 0;
  setInterval(() => {
    if (counter == finalValue) {
      clearInterval();
    } else {
      counter += 3;
      element.innerHTML = counter;
    }
  }, timeInterval);
}

progress(calories, 150, 30);
progress(steps, 1080, 0.1);
progress(km, 3, 60);
