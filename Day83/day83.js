const warp = document.querySelector('.warp');

for (let i = 1; i<=30; i++){
    const rings = document.createElement('div');
    rings.classList.add('ring');
    rings.classList.add('ring-'+i);
    warp.appendChild(rings);

    for (let x = 1; x<=24; x++){
        const lines = document.createElement('div');
        lines.classList.add('line');
        lines.classList.add('line-'+x);
        rings.appendChild(lines);
    }
}