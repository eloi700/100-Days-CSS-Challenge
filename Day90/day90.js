const frame = document.querySelector('.frame');
const space = document.createElement('div');
space.classList.add('space');
frame.appendChild(space);

for (let i = 1; i<= 380; i++){
    const trigger = document.createElement('div');
    trigger.classList.add('trigger');
    trigger.classList.add('trigger-'+i);
    frame.appendChild(trigger);
}

const lines = document.createElement('div');
lines.classList.add('lines');
frame.appendChild(lines);

for (let i = 1; i<= 19; i++){
    const line = document.createElement('div');
    line.classList.add('line');
    line.classList.add('line-'+i);
    lines.appendChild(line);

    const left = document.createElement('div');
    const right = document.createElement('div');
    left.classList.add('left');
    right.classList.add('right');
    line.appendChild(left);
    line.appendChild(right);
}