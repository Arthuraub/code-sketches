let posX = 200;
let posY = 200;

let size = 30;

let vitX = 2.5;
let vitY = 3.7;

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 255);

  posX += vitX;
  posY += vitY;

  if( posX >= width-size || posX <= 0 ){
    vitX = vitX * -1;
  }

  if( posY >= height-size || posY <= 0 ){
    vitY = vitY * -1;
  }

  noStroke();
  fill(255, 0, 0);
  square(posX, posY, size);
}