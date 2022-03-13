for (i = 1; i <=5; i++){
    const lines = document.createElement('div'), 
    container = document.querySelector('.container')
    lines.classList.add('line');
    lines.classList.add('line-'+i);  
    container.appendChild(lines);
}
