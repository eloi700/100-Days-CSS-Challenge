const frame = document.querySelector('.frame'), 
plane = document.querySelector('.plane'), 
image = document.querySelector('.image');

for (let i = 1; i < 201; i++){
    const trigger = document.createElement('div');
    trigger.classList.add('trigger');
    trigger.classList.add('trigger-'+i);
    frame.appendChild(trigger);
    frame.insertBefore(trigger, plane, image);
}


