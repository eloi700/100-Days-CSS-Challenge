const greetings = document.querySelector('.banner');

for (let x = 1; x <= 8; x++){
    const letters = document.createElement('div');
    letters.classList.add('letter');
    greetings.appendChild(letters);
}