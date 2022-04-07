// find elements
let canvas = document.getElementById('canvas')
let start = document.getElementById('start')
let pauseButton = document.getElementById('pause')
let covidImg = document.getElementById('covidImg')

// get context
let ctx = canvas.getContext('2d');

// event listeners
document.addEventListener("mousemove", mouseMoveHandler, false);

// variables
let score = 0
let antibodyRadius = 15
let mouseX = 0
let mouseY = 0
let speedCovid = 0.5 //0.3
let lives = 3
let pause = false


// covid parameters
let covidRadius = 30
let covidX = Math.random() * canvas.width
let covidY = 410

// functions
function mouseMoveHandler(e) {
    mouseX = e.x
    mouseY = e.y
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, antibodyRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function generatorCovid() {
    ctx.beginPath()
    ctx.drawImage(covidImg, covidX - 50, covidY - 50, 100, 100,)
    ctx.stroke();
    ctx.closePath()
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Lifes: " + lives, 8, 40);
}

function gameOverDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER!", canvas.width / 2 - 150, canvas.height / 2);
}

function mainMenuDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("COVID KILLER!", canvas.width / 2 - 150, canvas.height / 2);
}

function pauseDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "40px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("Pause...", canvas.width / 2 - 150, canvas.height / 2);

    ctx.beginPath()
    ctx.drawImage(covidImg, covidX - 50, covidY - 50, 100, 100,)
    ctx.arc(covidX, covidY, covidRadius, 0, Math.PI * 2, true)
    ctx.stroke();
    ctx.closePath()

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore()
    drawCircle()
    drawLives()

    // draw covid
    generatorCovid()
    covidY -= speedCovid
    if (covidY + covidRadius <= 0) {
        if (lives === 0) {
            clearInterval(whatDraw)
            whatDraw = setInterval(gameOverDraw, 10)
        }
        lives--
        covidY = canvas.height + covidRadius
        covidX = Math.random() * canvas.width
    }
    // collision detect
    if (mouseX + antibodyRadius > covidX - covidRadius
        && mouseY + antibodyRadius > covidY - covidRadius
        && mouseX - antibodyRadius < covidX + covidRadius
        && mouseY - antibodyRadius < covidY + covidRadius) {
        console.log('collission!');
        score++
        speedCovid += 0.03
        covidY = canvas.height + covidRadius
        covidX = Math.random() * canvas.width
    }
}

start.addEventListener('click', () => {
    clearInterval(whatDraw)
    lives = 3
    speedCovid = 0.5
    score = 0
    whatDraw = setInterval(draw, 10)
})
pauseButton.addEventListener('click', () => {
    clearInterval(whatDraw)
    whatDraw = setInterval(pauseDraw, 10)
})

// interval draw
let whatDraw = setInterval(mainMenuDraw, 10)
