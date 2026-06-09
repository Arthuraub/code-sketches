function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255, 0, 0);
}

function draw() {
  background(0, 0, 255);
  translate(width / 2, height / 2);

  // 12 cercles disposes en rond
  var nombre = 12;
  for (var i = 0; i < nombre; i++) {
    var angle = (TWO_PI / nombre) * i;
    var x = cos(angle) * 120;
    var y = sin(angle) * 120;
    circle(x, y, 50);
  }
}
