const sun = document.querySelector('#sun');
const ctxSun = sun.getContext('2d');
sun.width = window.innerWidth;
sun.height = window.innerHeight;

let sunYAxis = 800;

const waterTop = document.querySelector('#waterTop');
const ctxWater = waterTop.getContext('2d');
waterTop.width = window.innerWidth;
waterTop.height = window.innerHeight;

let waterXAxis = 0;
let waterMotion = 1;
let waterToggle = 0;



function drawSun() {
    ctxSun.fillStyle = 'red';
    ctxSun.strokeStyle = 'orange';
    ctxSun.lineWidth = 3;
    ctxSun.beginPath();
    ctxSun.arc(sun.width / 2,sunYAxis, 170, 0, Math.PI * 2);
    ctxSun.closePath();
    ctxSun.fill();
    ctxSun.stroke();
}

function animateSun() {
    ctxSun.clearRect(0,0,sun.width,sun.height);

    sunYAxis -= 0.7;
    drawSun();
    requestAnimationFrame(animateSun);
}
animateSun();

function drawWater() {
    ctxWater.fillStyle = 'blue';
    ctxWater.beginPath();
    ctxWater.fillRect(waterXAxis,600,waterTop.width,500);
    ctxSun.closePath();
}

function animateWater() {
    // ctxWater.clearRect(0,0,waterTop.width,waterTop.height)
    // if (waterToggle == 0) {
    //     waterXAxis += 2 * Math.sin(waterMotion);
    //     waterToggle++;
    // } else if (waterToggle == 1) {
    //     waterXAxis -= 2 * Math.sin(waterMotion);
    //     waterToggle--;
    // }

    drawWater();
    requestAnimationFrame(animateWater)
}
animateWater();