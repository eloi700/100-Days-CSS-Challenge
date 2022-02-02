const frame = document.createElement('div');
frame.classList.add("frame");
document.body.appendChild(frame);

const container = document.createElement('div');
container.classList.add("container");
frame.appendChild(container)

let xMax = 18;
for (let i = 1; i <=10; i++){
    const circle = document.createElement('div');
    circle.classList.add("circle");
    circle.classList.add('circle-' + i);
    container.appendChild(circle);

    for (let x = 1; x <= xMax; x++){
        const dot = document.createElement('div');
        dot.classList.add("dot");
        dot.classList.add("dot-" + x);
        circle.appendChild(dot);

        const fill = document.createElement('div');
        fill.classList.add('fill');
        dot.appendChild(fill);
    }
    xMax += 6;
}
