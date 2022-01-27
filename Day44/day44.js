const frame = document.createElement("div");
frame.classList.add("frame");

for(i = 1; i <= 20; i++){
    const square = document.createElement("span");
    square.classList.add("sq");
    square.classList.add("sq-" + i);
    frame.appendChild(square);
}

document.body.appendChild(frame);

const sqcolor = document.querySelectorAll('.sq');
for(let i = 0; i < sqcolor.length; i++) {
    let rgb = [];

    for(let i = 0; i < 4; i++)
        rgb.push(Math.floor(Math.random() * 255));

    sqcolor[i].style.borderColor = 'rgb('+ rgb.join(',') +')';
}
