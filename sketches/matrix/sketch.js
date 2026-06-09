var colonnes = [];
var taille = 18;

function setup() {
  createCanvas(400, 400);
  textSize(taille);
  // une position de depart par colonne
  for (var i = 0; i < width / taille; i++) {
    colonnes.push(random(-20, 0));
  }
}

function draw() {
  background(0, 60);
  fill(255, 0, 0);

  for (var i = 0; i < colonnes.length; i++) {
    // un chiffre au hasard de 0 a 9
    var chiffre = floor(random(10));
    var y = colonnes[i] * taille;
    text(chiffre, i * taille, y);

    // quand c'est trop bas, on repart en haut
    if (y > height && random(1) > 0.975) {
      colonnes[i] = 0;
    }
    colonnes[i] += 1;
  }
}
