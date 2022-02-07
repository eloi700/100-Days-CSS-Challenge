const incrButton = document.getElementById('incr');
const decrButton = document.getElementById('decr');
const textTemp = document.querySelector('.temperature')

let defTemp = 0;

function incrTemp(){
	defTemp += 
}

incrButton.addEventListener('click', incrTemp);



for (let x = 1; x < 31; x++){
	const span = document.createElement('span')
	const control = document.querySelector('.controlUnit');
	span.classList.add('range-'+ x);
	span.innerHTML = "I";
	control.appendChild(span);
}

