const plans = document.querySelectorAll(".plan");

plans.forEach(plan => appendLines(plan));

function appendLines(plan) {
  const lines = document.createElement("div");
  lines.classList.add("lines");
  for (x = 1; x <= 4; x++) {
    const line = document.createElement("div");
    line.classList.add("line-" + x);
    lines.appendChild(line);
  }
  plan.appendChild(lines);
}
