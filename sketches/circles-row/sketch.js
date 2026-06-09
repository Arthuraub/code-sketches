let xs = [];      // positions horizontales (fixes)
let ys = [];      // positions verticales (qui bougent)
let vits = [];    // vitesses verticales
let taille = 30;

function setup() {
  createCanvas(400, 400);

  for (let x = 1; x < width; x += 1) {
    xs.push(x);
    ys.push(random(height));     // départ au hasard
    vits.push(random(2, 5));     // vitesse au hasard
  }
}

function draw() {
  background(0, 0, 250);
  noStroke();
  fill(255, 0, 0);

  for (let i = 0; i < xs.length; i++) {
    ys[i] = ys[i] + vits[i];

    // rebond UNIQUEMENT sur l'axe vertical (haut / bas)
    if (ys[i] > height - taille / 2 || ys[i] < taille / 2) {
      vits[i] = vits[i] * -1;
    }

    circle(xs[i], ys[i], taille);
  }
}