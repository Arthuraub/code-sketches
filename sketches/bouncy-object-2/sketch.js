let Arthur01 = {

  size: 30,
  posX: 10,
  posY: 15,
  vitX: 1.2,
  vitY: 0.9,
  name: "Eracom 3",

  bouger: function(){
    this.posX = this.posX + this.vitX;
    this.posY += this.vitY;
  },

  rebondir: function(){
    if(this.posX + this.size > width || this.posX < 0){
      this.vitX = this.vitX * -1;
    }
    if(this.posY + this.size > height || this.posY < 0){
      this.vitY *= -1;
    }
  },

  dessiner: function(){
    stroke(0, 0, 255);
    strokeWeight(3);
    fill(255, 0, 0);
    square(this.posX, this.posY, this.size);
    noStroke();
    fill(255);
    text(this.name, this.posX, this.posY - 4);
  },

  update: function(){
    this.bouger();
    this.rebondir();
    this.dessiner();
  }

};


let Arthur02 = Object.create(Arthur01);
Arthur02.name = "Eracom 1";
Arthur02.vitX = 1.5;

let Arthur03 = Object.create(Arthur01);
Arthur03.name = "Eracom 2";
Arthur03.vitY = -2;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);
  Arthur01.update();
  Arthur02.update();
  Arthur03.update();
}
