const sun = document.querySelector('#sun');
const ctxSun = sun.getContext('2d');
sun.width = window.innerWidth;
sun.height = window.innerHeight;

let sunYAxis = sun.height;

const water = document.querySelector('#water');
const ctxWater = water.getContext('2d');
water.width = window.innerWidth;
water.height = window.innerHeight;
let waterXAxis = 0;



function drawSun() {
    ctxSun.fillStyle = 'red';
    ctxSun.strokeStyle = 'orange';
    ctxSun.lineWidth = 3;
    ctxSun.beginPath();
    ctxSun.arc(sun.width / 2,sunYAxis, 60, 0, Math.PI * 2);
    ctxSun.closePath();
    ctxSun.fill();
    ctxSun.stroke();
}

function animateSun() {
    ctxSun.clearRect(0,0,sun.width,sun.height);

    sunYAxis -= 2;
    drawSun();
    requestAnimationFrame(animateSun);
}
animateSun();

function animateWater() {
    ctxWater.fillStyle = 'blue';
    ctxWater.fillRect(waterXAxis,600,water.width,400);
}
animateWater();