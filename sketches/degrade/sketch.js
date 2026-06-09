function setup() {
  createCanvas(400, 400);
}

function draw() {
  // un degrade du rouge au bleu, ligne par ligne
  for (var x = 0; x < width; x++) {
    var rouge = 255 - x * (255 / width);
    var bleu = x * (255 / width);
    stroke(rouge, 0, bleu);
    line(x, 0, x, height);
  }
}
