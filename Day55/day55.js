const incrButton = document.getElementById('incr');
const decrButton = document.getElementById('decr');
const textTemp = document.querySelector('.temperature')

let currentTemp = 1;

incrButton.addEventListener('click', () =>{
	let maxTemp = 30
	currentTemp +=1;
	if (currentTemp <= maxTemp){
		textTemp.textContent = currentTemp + '\u00B0'
	}else {
		currentTemp = maxTemp;
		textTemp.textContent = maxTemp + '\u00B0'
	}
	const range = document.querySelector('.range-' + currentTemp);
	range.innerHTML = "&#9899;";
})

decrButton.addEventListener('click', () => {
	let minTemp = 1;
	currentTemp -=1;
	if(currentTemp >= minTemp){
		textTemp.textContent = currentTemp + '\u00B0'
	} else{
		currentTemp = minTemp;
		textTemp.textContent = minTemp + '\u00B0'
	}
	const range = document.querySelector('.range-' + (currentTemp+1));
	range.innerHTML = "&#9675;";
})

for(let x = 1; x < 31; x++){
	const span = document.createElement('span');
	const control = document.querySelector('.controlUnit');
	span.classList.add('range-'+ x);
	span.innerHTML = "&#9675;";
	control.appendChild(span);
}

const range = document.querySelector('.range-1');
range.innerHTML = "&#9899;";

