const frame = document.createElement('div')
const circle = document.createElement('div')
frame.classList.add('frame')
circle.classList.add('circle')
document.body.appendChild(frame);
frame.appendChild(circle)

for(i = 1; i<=10; i++){
    const ring = document.createElement('div')
    ring.classList.add('ring')
    ring.classList.add('ring-'+i)
    circle.appendChild(ring);   
}