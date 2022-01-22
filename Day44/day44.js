const sqcolor = document.querySelectorAll('.sq');

for(let i = 0; i < sqcolor.length; i++) {
    let rgb = [];

    for(let i = 0; i < 4; i++)
        rgb.push(Math.floor(Math.random() * 255));

    sqcolor[i].style.borderColor = 'rgb('+ rgb.join(',') +')';
}