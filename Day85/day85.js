const frame = document.createElement('div'),
wave = document.createElement('div');
frame.classList.add('frame');
wave.classList.add('wave');
document.body.appendChild(frame);
frame.appendChild(wave);

for (i=1; i<=200; i++){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.classList.add('dot-'+i);
    wave.appendChild(dot);
}
