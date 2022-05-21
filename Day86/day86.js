const frame = document.createElement('div'),
cradle = document.createElement('div');
frame.classList.add('frame')
document.body.appendChild(frame);
cradle.classList.add('cradle');
frame.appendChild(cradle)

for (i=1; i<=5; i++){
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.classList.add('ball-'+i);
    cradle.appendChild(ball);
};

