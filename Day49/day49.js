const frame = document.createElement('div');
frame.classList.add('frame');
document.body.appendChild(frame);

for (let i = 1; i <= 400; i++){
    const triggerLink = document.createElement('a')
    triggerLink.classList.add('trigger');
    triggerLink.href = "#"
    triggerLink.classList.add('trigger-' + i);
    frame.appendChild(triggerLink);
}

const mouseFollow = document.createElement('div');
mouseFollow.classList.add('mouseFollow');
frame.appendChild(mouseFollow);

mouseFollow.innerHTML = '<i class="fas fa-wifi"></i>';
