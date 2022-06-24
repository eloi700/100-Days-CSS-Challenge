for (let i=1; i<=100; i++){
    const hor = document.querySelector('.horizontal');
    const stripe = document.createElement('div');
    stripe.classList.add('stripe');
    stripe.classList.add('stripe' + i);
    hor.appendChild(stripe);
}

for (let i=1; i<=100; i++){
    const ver = document.querySelector('.vertical');
    const stripe = document.createElement('div');
    stripe.classList.add('stripe');
    stripe.classList.add('stripe' + i);
    ver.appendChild(stripe);
}