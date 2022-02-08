const frame = document.createElement('div')
frame.classList.add('frame');
document.body.appendChild(frame);

const icoSides = document.createElement('div')
icoSides.classList.add('icoSides')
frame.appendChild(icoSides);

for (let i = 1; i < 21; i++){
    const side = document.createElement('div');
    side.classList.add('side');
    side.classList.add('side-'+ i);
    icoSides.appendChild(side);
}

const side21 = document.createElement('div')
side21.classList.add('side')
side21.classList.add('side-21');
side21.innerHTML = '<i class="fas fa-hand-holding-water"></i>'
icoSides.appendChild(side21);

// Adding Font Awesome Source Link in JS
const script = document.createElement('script')
script.src='https://kit.fontawesome.com/7d534dd6bd.js';
script.crossOrigin='anonymous';
document.body.appendChild(script);
