const frame = document.createElement('div');
frame.classList.add('frame');
document.body.append(frame);

for (let i = 1; i <= 50; i++){
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.classList.add('circle-'+ i);
    frame.appendChild(circle);
}