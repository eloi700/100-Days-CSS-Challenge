const frame = document.createElement('div');
const wrapper = document.createElement('div')
frame.classList.add('frame')
wrapper.classList.add('wrapper')
document.body.appendChild(frame)
frame.appendChild(wrapper)

for (let x=1; x <=18; x++){
    const ellipse = document.createElement('div')
    ellipse.classList.add('ellipse')
    ellipse.classList.add('ellipse-' + x)
    wrapper.appendChild(ellipse);
}