const frame = document.createElement('div')
const circle = document.createElement('div')
frame.classList.add('frame')
circle.classList.add('circle')
document.body.appendChild(frame)
frame.appendChild(circle)

for (x = 1; x <= 6; x++){
    const plane = document.createElement('div')
    plane.classList.add('plane')
    plane.classList.add('plane-'+x)
    circle.appendChild(plane)
}