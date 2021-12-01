let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//нажатия
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

//координаты квадрата
let x = 500,
		y = 100

//размеры квадрата
let h = 50,
		w = 50

//скорость
let speed = 5 //скорость перемещения
let speedDown = 5 //скорость падения


let drawBox = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(x, y, w, h)
 
  y+h === canvas.height ? speedDown = 0 : y += speedDown; //падение
  if (x+100 === canvas.width) {speed = 0}//края
  rightPressed ? x+=5 : x+=0
  leftPressed ? x-=5 : x+=0 
  
}

setInterval(drawBox, 10);

