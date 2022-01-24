const btn = document.querySelector('.button');
const btnText = document.querySelector('.msg');
const btnThankU = document.querySelector('.thankU');

const timeLine = new TimelineMax({paused: false});

btn.addEventListener('click', () =>{
    timeLine
    .to(btnText, 0.6, {opacity: 0})
    .to(btn, 0.8, {height: 0.5, opacity: 0.5, boxShadow: "0px -0.5px 10px #FFA500", delay: 0.25})
    .to(btn, 0.1, {opacity: 0.5, background: "#FFA500"})
    .to(btn, 0,{width: 1, delay:0.2})
    .to(btn, 0.1,{boxShadow: "0px 0px 0px 10px #fa2856, y:90, height:100, delay:0.23"})
    .to(btn, 0.3,{height: 1000, y: -1500, boxShadow: "0px 0px 0px 10px #FFA500, delay: 0.2"})
    .to(".thankU", 1, {opacity:1, delay:0.3});
});
