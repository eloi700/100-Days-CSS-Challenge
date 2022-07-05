for (let x = 1; x <=18; x++){
    const stripes = document.querySelector('.stripes');
    const stripe = document.createElement('div');
    stripe.classList.add('stripe');
    stripe.classList.add('stripe-' + x);
    stripes.appendChild(stripe);
}