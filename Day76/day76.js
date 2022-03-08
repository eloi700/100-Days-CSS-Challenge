const passInput = document.querySelector('.input')
const key = document.querySelector('.key');
const backText = document.querySelector('.backSide')
key.addEventListener('click', ()=>{
    passInput.value = '';
})
backText.addEventListener('click', ()=>{
    passInput.value = '';
})