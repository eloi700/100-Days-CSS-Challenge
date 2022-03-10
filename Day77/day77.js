const frame = document.createElement('div')
const ball = document.createElement('div')
frame.classList.add('frame')
ball.classList.add('ball')
document.body.appendChild(frame);
frame.appendChild(ball)

for (x=1; x<=6; x++){
    const blur = document.createElement('div')
    blur.classList.add('blur');
    blur.classList.add('blur-'+x);
    ball.appendChild(blur)
}