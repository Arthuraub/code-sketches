function setup() {
  frameRate(7);
  createCanvas(300, 300);
  background(0, 0, 255);
}

var eracom = 1;

function draw() {
  noFill();
  stroke(255, 0, 0);
  strokeWeight(1);
  circle(10, 10, eracom);
  circle(290, 10, eracom);
  circle(10, 290, eracom);
  circle(290, 290, eracom);
  circle(150, 150, eracom);

  eracom = eracom + 5;
}