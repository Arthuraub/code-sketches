function setup() {
  createCanvas(400, 400);
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0, 0, 255);

  // des lignes qui ondulent avec un sinus
  for (var y = 0; y < height; y += 15) {
    beginShape();
    for (var x = 0; x <= width; x += 10) {
      var vague = sin(x * 0.05 + frameCount * 0.05 + y) * 10;
      vertex(x, y + vague);
    }
    endShape();
  }
}
