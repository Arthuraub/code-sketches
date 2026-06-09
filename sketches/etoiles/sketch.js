var etoiles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();

  // on cree 150 etoiles au hasard
  for (var i = 0; i < 150; i++) {
    etoiles.push({ x: random(width), y: random(height), v: random(1, 5) });
  }
}

function draw() {
  background(0, 0, 255);
  fill(255, 0, 0);

  for (var i = 0; i < etoiles.length; i++) {
    var e = etoiles[i];
    circle(e.x, e.y, 3);
    e.x = e.x + e.v;
    if (e.x > width) {
      e.x = 0;
    }
  }
}
