var trail = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0, 0, 255);

  // on garde les 20 dernieres positions de la souris
  trail.push({ x: mouseX, y: mouseY });
  if (trail.length > 20) {
    trail.shift();
  }

  // de plus en plus gros vers la tete
  fill(255, 0, 0);
  for (var i = 0; i < trail.length; i++) {
    circle(trail[i].x, trail[i].y, i);
  }
}
