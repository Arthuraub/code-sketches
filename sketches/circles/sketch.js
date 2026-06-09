function setup() {
  createCanvas(400, 400);
  background(0, 0, 255);
}

var size = 10;

function draw() {
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  circle(200, 200, size);
  size += 10;
}