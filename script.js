const sun = document.querySelector('#sun');
const ctx = sun.getContext('2d');
sun.width = window.innerWidth;
sun.height = window.innerHeight;

let xAxis = 0;
let YAxis = sun.height;

function draw() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(sun.width / 2,YAxis, 60, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function animate() {
    ctx.clearRect(0,0,sun.width,sun.height);

    YAxis -= 1;
    draw();
    requestAnimationFrame(animate);
}
animate();