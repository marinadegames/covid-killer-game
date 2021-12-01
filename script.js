let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//нажатия
let rightPressed = false
let leftPressed = false
let upPressed = false
let downPressed = false

function keyDownHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = true;
    } else if (e.keyCode === 37) {
        leftPressed = true;
    }else if (e.keyCode === 38 ){
        upPressed = true
    }else if (e.keyCode ===  40){
        downPressed = true
    }
}
function keyUpHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = false
    } else if (e.keyCode === 37) {
        leftPressed = false
    }else if (e.keyCode === 38 ){
        upPressed = false
    }else if (e.keyCode ===  40){
        downPressed = false
    }
}

// Квадрат
let Box = {
    x: 100,
    y: 100,
    w: 50,
    h: 50,
    color: 'black',
}
// КОВИД
let Covid = {
    x: Math.random() * (canvas.width - 0),
    y: canvas.height - 5,
    r: 20,
    color: 'red',
}

//скорость
let speed = 10 //скорость перемещения

function drawBox() {
    ctx.fillStyle = Box.color
    ctx.fillRect(Box.x, Box.y, Box.w, Box.h)

    //перемещение
    rightPressed === true && Box.x+Box.w < canvas.width ? Box.x += 7 : Box.x += 0
    leftPressed === true && Box.x > 0 ? Box.x -= 7 : Box.x += 0
    upPressed === true && Box.y > 0 ? Box.y -= 7 : Box.y -= 0
    downPressed === true && Box.y+Box.w < canvas.height ? Box.y += 7 : Box.y -= 0
    Box.x + Box.w === canvas.width ? speed = 5 : speed = 0
}
function drawCovid(){
    ctx.beginPath()
    ctx.arc(Covid.x, Covid.y,Covid.r,0, Math.PI*2)
    ctx.fillStyle = Covid.color
    ctx.fill();
}

// DRAW!!!
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBox()
    drawCovid()
}
setInterval(draw, 10);

