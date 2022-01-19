document.querySelector('.closebtn').addEventListener('click', showErrorMsg);

let element = true

function showErrorMsg(){
    if(element === true){
        document.querySelector('.card').classList.add('active')
    }
}