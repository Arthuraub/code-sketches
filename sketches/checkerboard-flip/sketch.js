function setup() {
  createCanvas(400, 400);
  background(220);
}

var unit = 50;
var x = 0;
var y = 0;
var rouge = true;

function draw() {
  noStroke();

  // on alterne rouge et bleu
  if (rouge == true) {
    fill(255, 0, 0);
    rouge = false;
  } else {
    fill(0, 0, 255);
    rouge = true;
  }

  square(x, y, unit);

  x = x + unit;
  if (x >= width) {
    x = 0;
    y = y + unit;
  }
}
