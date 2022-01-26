// const frame = document.querySelector('.frame');

const frame = document.createElement("div");
frame.classList.add("frame");

for (let n = 1; n <= 6; n++){
const ring = document.createElement("div");
ring.classList.add("ring");
ring.classList.add("ring-" + n);

for (let i = 1; i <= 12; i++ ){
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.classList.add("dot-" + i);
    ring.appendChild(dot);
  }
    frame.appendChild(ring);
}

document.body.appendChild(frame);