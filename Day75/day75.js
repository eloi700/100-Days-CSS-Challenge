const frame = document.createElement('div')
const circle = document.createElement('div')
const title = document.createElement('div')
frame.classList.add('frame')
title.classList.add('title')
title.textContent = "DAY 75 - SPINNING DISCS"
circle.classList.add('circle')
document.body.appendChild(frame)
frame.appendChild(title)
frame.appendChild(circle)

for (x = 1; x <= 6; x++){
    const plane = document.createElement('div')
    plane.classList.add('plane')
    plane.classList.add('plane-'+x)
    circle.appendChild(plane)
}