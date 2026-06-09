var particules = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0, 0, 255);
  fill(255, 0, 0);

  for (var i = 0; i < particules.length; i++) {
    var p = particules[i];
    p.x = p.x + p.vx;
    p.y = p.y + p.vy;
    p.vy = p.vy + 0.1;   // un peu de gravite
    circle(p.x, p.y, 8);
  }
}

// quand la souris survole, on lance des particules
function mouseMoved() {
  particules = [];
  for (var i = 0; i < 40; i++) {
    var angle = random(TWO_PI);
    var vitesse = random(1, 5);
    particules.push({
      x: mouseX,
      y: mouseY,
      vx: cos(angle) * vitesse,
      vy: sin(angle) * vitesse
    });
  }
}
