var Arthur04;
var Arthur05;

function setup() {
  frameRate(999);
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 255);
  stroke(255, 0, 0);
  Arthur04 = windowWidth / 2;
  Arthur05 = windowHeight / 2;
}

function draw() {
  Arthur04 = Arthur04 + (mouseX - Arthur04) / 50;
  Arthur05 = Arthur05 + (mouseY - Arthur05) / 50;
  line(0, 0, Arthur04, Arthur05);
}

function keyPressed() {
  if (key === "x") {
    background(0, 0, 255);
  }
}
