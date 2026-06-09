var valeur = 1;

function setup() {
  createCanvas(300, 300);
  textSize(120);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0, 0, 255);
  noStroke();
  fill(255, 0, 0);
  rect(60, 60, 180, 180, 20);
  fill(255);
  text(valeur, 150, 150);
}

// au clic, un nouveau chiffre de 1 a 6
function mousePressed() {
  valeur = floor(random(1, 7));
}
