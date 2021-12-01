let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//нажатия
let rightPressed = false
let leftPressed = false
let upPressed = false
let downPressed = false

let randX = () => Math.floor(Math.random() * (canvas.width - 0))
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
    speed: 3,
}
// КОВИД
let Covid = {
    x: randX(),
    y: 50, //canvas.height + 30
    r: 20,
    color: 'red',
    speed: 0.5,
}
function drawBox() {
    ctx.fillStyle = Box.color
    ctx.fillRect(Box.x, Box.y, Box.w, Box.h)

    //перемещение
    rightPressed === true && Box.x+Box.w < canvas.width ? Box.x += Box.speed : Box.x += 0
    leftPressed === true && Box.x > 0 ? Box.x -= Box.speed : Box.x += 0
    upPressed === true && Box.y > 0 ? Box.y -= Box.speed : Box.y -= 0
    downPressed === true && Box.y+Box.w < canvas.height ? Box.y += 7 : Box.y -= 0

}
function drawCovid(){
    ctx.beginPath()
    ctx.arc(Covid.x, Covid.y, Covid.r,0, Math.PI*2)
    Covid.y = 100 //-=Covid.speed
    ctx.fillStyle = Covid.color
    ctx.fill();

}

// DRAW!!!
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBox()

    //draw covid
    if (Covid.y - (Covid.r/2) > 0){
        drawCovid()
    }else{
        Covid.y = canvas.height + 30
        Covid.x = randX();
    }

    // collision
    if (Box.x+Box.w > Covid.x - Covid.r &&
        Box.y+Box.h > Covid.y + Covid.r &&
        Box.y-Box.h < Covid.y - Covid.r &&
        Box.x-Box.w < Covid.x + Covid.r
        ){
        Covid.x += 3}
    else if(Box.y-Box.h < Covid.y - Covid.r) {
        Covid.y -= 3

    }
}
    //console.log(`COVID: ${Covid.x} BOX: ${Box.x}` )


setInterval(draw, 10);

