
const buttons = document.querySelector('.buttons')

for (let i = 1; i <= 12; i++){
    const button = document.createElement('div')
    button.classList.add('btn');
    button.classList.add('btn-' + i);
    button.innerHTML = `&#${9726 + i};`
    buttons.appendChild(button);
}
