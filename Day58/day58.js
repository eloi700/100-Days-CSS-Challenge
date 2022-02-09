const frame = document.createElement('div');
frame.classList.add('frame');
document.body.appendChild(frame);

const expSphere = document.createElement('div')
expSphere.classList.add('sphere')
frame.appendChild(expSphere);

for (let x = 1; x < 20; x++){
    const slices = document.createElement('div')
    slices.classList.add('slice')
    slices.classList.add('slice-'+x)
    expSphere.appendChild(slices);
}