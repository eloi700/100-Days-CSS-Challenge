for(let i = 1; i < 9; i++){
    const imgSlices = document.createElement('div')
    imgSlices.classList.add('img');
    imgSlices.classList.add('slice-'+ i);
    document.querySelector('.slices').appendChild(imgSlices);
}