const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return; // stop the fn from running when they are not moused down
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to 
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    // lastX = e.offsetX;
    // lastY = e.offsetY;
    // you can destructure as such instead...
    // THIS IS ES6
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = true);
canvas.addEventListener('mouseout', () => isDrawing = true);