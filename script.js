let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
let countHTML = document.getElementById('counter')
let lifeHTML = document.getElementById('life')

//нажатия
let rightPressed = false
let leftPressed = false
let upPressed = false
let downPressed = false

//очки и жизни
let life = 3;
let count = 0;

//countHTML.innerHTML = `Counter: ${count}`;
//lifeHTML.innerHTML = `Life: ${life}`

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
    y: canvas.height,
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
    Covid.y-=Covid.speed
    ctx.fillStyle = Covid.color
    ctx.fill();
}
function drawCount () {
    ctx.fillText('Counter: ')
}

// DRAW!!!
function draw(){
    countHTML.innerHTML = `Counter: ${count}`;
    lifeHTML.innerHTML = `Life: ${life}`
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBox()
    drawCovid()

    // collision
    if (Box.x + Box.w > Covid.x - Covid.r &&
        Box.x - Box.w/2 < Covid.x &&
        Box.y+Box.h > Covid.y - Covid.r &&
        Box.y-Box.h/2 < Covid.y
    )
    {
        console.log('collision!!!')
        Covid.x = randX()
        Covid.y = canvas.height
        count++
    }

    // kill life
    if (Covid.y - Covid.r < 0){

        console.log('kill')
        Covid.x = randX()
        Covid.y = canvas.height
        life--
    }


}
    //console.log(`COVID: ${Covid.x} BOX: ${Box.x}` )


setInterval(draw, 10);

