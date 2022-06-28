const container = document.querySelector('.container');
for (let i = 1; i <=8; i++){
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.classList.add('ball-'+i);
    container.appendChild(ball);
}