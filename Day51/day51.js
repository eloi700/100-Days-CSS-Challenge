const frame = document.createElement('div');
frame.classList.add("frame");
document.body.appendChild(frame);

const container = document.createElement('div')
container.classList.add("container");
frame.appendChild(container);

const inputButton = document.createElement('input');
inputButton.id = "button";
inputButton.name = "state";
inputButton.type = "checkbox";
container.appendChild(inputButton);

const labelButton = document.createElement('label');
labelButton.classList.add('icon');
labelButton.htmlFor = "button";
container.appendChild(labelButton);

const text = document.createElement('h3');
text.classList.add('title');
text.innerText = "Web Development";
container.appendChild(text);

const pauseButton = document.createElement('div');
pauseButton.classList.add('pause');
labelButton.appendChild(pauseButton);

const playButton = document.createElement('div');
playButton.classList.add('play');
labelButton.appendChild(playButton);

const counter = document.createElement('div');
counter.classList.add('counter');
container.appendChild(counter);

const oneKNumber = document.createElement('div');
oneKNumber.classList.add('oneK')
oneKNumber.classList.add('number')
counter.appendChild(oneKNumber);
digits(oneKNumber);

const hundredNumber = document.createElement('div');
hundredNumber.classList.add('hundred')
hundredNumber.classList.add('number')
counter.appendChild(hundredNumber);
digits(hundredNumber);

const tensNumber = document.createElement('div');
tensNumber.classList.add('tens')
tensNumber.classList.add('number')
counter.appendChild(tensNumber);
digits(tensNumber);

const onesNumber = document.createElement('div');
onesNumber.classList.add('ones')
onesNumber.classList.add('number')
counter.appendChild(onesNumber);
digits(onesNumber);

function digits(parent){
for (let i = 0; i <= 9; i++){
    const numbers = document.createElement('span');
    numbers.classList.add("number-"+i);
    numbers.innerHTML = i;
    parent.appendChild(numbers);
    }
}