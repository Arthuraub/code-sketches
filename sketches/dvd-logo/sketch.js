// 4 points qui rebondissent, relies par un quadrilatere rouge
var ax = 200;
var ay = 200;
var bx = 100;
var by = 400;
var cx = 500;
var cy = 150;
var dx = 400;
var dy = 450;

var avx = 2.5;
var avy = -3.5;
var bvx = -3;
var bvy = 2;
var cvx = 4;
var cvy = 3.2;
var dvx = -2.2;
var dvy = -4;

function setup() {
  createCanvas(600, 600);
  background(0, 0, 255);
  strokeWeight(1.5);
}

function draw() {
  background(0, 0, 255, 27);
  stroke(255, 0, 0);
  noFill();

  ax = ax + avx;
  ay = ay + avy;
  bx = bx + bvx;
  by = by + bvy;
  cx = cx + cvx;
  cy = cy + cvy;
  dx = dx + dvx;
  dy = dy + dvy;

  if (ax <= 0 || ax >= width) { avx = avx * -1; }
  if (ay <= 0 || ay >= height) { avy = avy * -1; }
  if (bx <= 0 || bx >= width) { bvx = bvx * -1; }
  if (by <= 0 || by >= height) { bvy = bvy * -1; }
  if (cx <= 0 || cx >= width) { cvx = cvx * -1; }
  if (cy <= 0 || cy >= height) { cvy = cvy * -1; }
  if (dx <= 0 || dx >= width) { dvx = dvx * -1; }
  if (dy <= 0 || dy >= height) { dvy = dvy * -1; }

  quad(ax, ay, bx, by, cx, cy, dx, dy);
}
