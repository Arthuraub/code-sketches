function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 255);
  translate(width / 2, height / 2);

  stroke(255, 0, 0);
  noFill();
  strokeWeight(2);
  circle(0, 0, 300);

  var h = hour() % 12;
  var m = minute();
  var s = second();

  // aiguille des secondes
  push();
  rotate(map(s, 0, 60, 0, 360) - 90);
  strokeWeight(1);
  line(0, 0, 130, 0);
  pop();

  // aiguille des minutes
  push();
  rotate(map(m, 0, 60, 0, 360) - 90);
  strokeWeight(3);
  line(0, 0, 110, 0);
  pop();

  // aiguille des heures
  push();
  rotate(map(h, 0, 12, 0, 360) - 90);
  strokeWeight(6);
  line(0, 0, 70, 0);
  pop();
}
