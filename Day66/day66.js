
const sparkles = document.querySelector('.sparkles')

for (let i = 1; i <= 12; i++){
    const sparkle = document.createElement('div')
    sparkle.classList.add('sparkle');
    sparkle.classList.add('sparkle-' + i);
    sparkle.innerHTML = `&#${9726 + i};`
    sparkles.appendChild(sparkle);
}
