const topTri = document.querySelector('.top');
const shadowTriangles = document.querySelectorAll('.paraTri');

shadowTriangles.forEach(tri1 => appendTriangles(tri1))

function appendTriangles(tri2){
    for (let i = 0; i <= 11; i++){
        const triangle = document.createElement('div')
        triangle.classList.add('triangle')
        triangle.classList.add('triangle-'+ i)
        tri2.appendChild(triangle); 
    }
}