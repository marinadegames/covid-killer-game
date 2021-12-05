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
    x: Math.floor(Math.random() * (canvas.width - 0)),
    y: canvas.height,
    r: 20,
    color: 'red',
    speed: 0.5,
}
//vitamin
let Vitamin = {
    x: Math.floor(Math.random() * (canvas.width - 0)),
    y: canvas.height,
    r: 10,
    color: 'green',
    speed: 0.8,
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
function drawVitamin(){
    ctx.beginPath()
    ctx.arc(Vitamin.x, Vitamin.y, Vitamin.r,0, Math.PI*2)
    Vitamin.y-=Vitamin.speed
    ctx.fillStyle = Vitamin.color
    ctx.fill();
}

// DRAW!!!
function draw(){

    //Вывод данных на экран
    countHTML.innerHTML = `Counter: ${count}`;
    lifeHTML.innerHTML = `Life: ${life}`

    //очистка холста
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //draw
    drawBox()

    // collision
    if (Box.x + Box.w > Covid.x - Covid.r &&
        Box.x - Box.w/2 < Covid.x &&
        Box.y+Box.h > Covid.y - Covid.r &&
        Box.y-Box.h/2 < Covid.y
    )
    {
        console.log('collision!!!')
        Covid.x = Math.floor(Math.random() * (canvas.width - 0))
        Covid.y = canvas.height
        Box.h -=1
        Box.w -=1
        count++
    }

    if (Box.x + Box.w > Vitamin.x - Vitamin.r &&
        Box.x - Box.w/2 < Vitamin.x &&
        Box.y+Box.h > Vitamin.y - Covid.r &&
        Box.y-Box.h/2 < Vitamin.y
    )
    {
        console.log('collision vitamin')
        Vitamin.x = Math.floor(Math.random() * (canvas.width - 0))
        Vitamin.y = canvas.height
        Box.h +=5
        Box.w +=5
    }

    // kill life
    if (Covid.y - Covid.r < 0){

        console.log('kill')
        Covid.x = Math.floor(Math.random() * (canvas.width - 0))
        Covid.y = canvas.height
        life--
    }


}


setInterval(draw, 10);
setInterval(drawCovid, 10)
setInterval(drawVitamin, 10)
