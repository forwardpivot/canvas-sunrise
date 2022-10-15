const sun = document.querySelector('#sun');
const ctxSun = sun.getContext('2d');
sun.width = window.innerWidth;
sun.height = window.innerHeight;

let sunYAxis = 800;

const waterTop = document.querySelector('#waterTop');
const ctxWater = waterTop.getContext('2d');
waterTop.width = window.innerWidth;
waterTop.height = window.innerHeight;

const boat = document.querySelector('#boat');
const ctxBoat = boat.getContext('2d');
boat.width = window.innerWidth;
boat.height = window.innerHeight;
let boatXAxis = 900;


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

    sunYAxis -= 0.5;
    drawSun();
    requestAnimationFrame(animateSun);
}
animateSun();

function drawWater() {
    ctxWater.fillStyle = 'blue';
    ctxWater.beginPath();
    ctxWater.fillRect(0,600,waterTop.width,500);
    ctxWater.closePath();

    const boatImg = new Image();
    boatImg.onload = () => {
        ctxBoat.clearRect(117,500,boatXAxis,500);
        ctxBoat.drawImage(boatImg,boatXAxis,500);
    }
    
    boatXAxis += -0.7;
    boatImg.src = 'boat.png';
    requestAnimationFrame(drawWater);
}
drawWater();