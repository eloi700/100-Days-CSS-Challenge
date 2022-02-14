const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");
const outputColor = document.querySelector(".wrapper-output-color");
const outputCode = document.querySelector(".code-output");

/** Generates a random hex value between `00` and `ff` */
const randomHex = () =>
  Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

/** Uses `randomHex` to generate a random color string */
const randomColor = () => `#${[...Array(3)].map(randomHex).join("")}`;

/** Returns a random value between 0 and 360 */
const randomAngle = () => `${Math.floor(Math.random() * 361)}deg`;

/** Generate random linear gradient values */
const randomGradient = () => [randomAngle(), randomColor(), randomColor()];

/** Update UI with new values */
const update = () => {
  const [angle, color1, color2] = randomGradient();
  // We use custom properties instead of CSS directly.
  outputColor.style.setProperty("--one-color", randomColor());
  outputColor.style.setProperty("--two-color", randomColor());
  outputColor.style.setProperty("--angle", randomAngle());
  outputCode.value = `background:  linear-gradient(${angle}, ${color1}, ${color2});`;
};

copyBtn.addEventListener("click", () =>
  // Replaced deprecated `execCommand` with clipboard API
  navigator.clipboard.writeText(outputCode.value)
);

generateBtn.addEventListener("click", update);

update();

// Thanks & credit to Luke Shiru
