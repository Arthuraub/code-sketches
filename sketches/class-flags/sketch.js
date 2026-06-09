let flag1, flag2, flag3;

function setup() {
  createCanvas(600, 300);
  
  flag1 = new Flag('blue', 'white', 'red', 250, 10);
  flag2 = new Flag('black', 'yellow', 'red', 250, 125);
  flag3 = new Flag('green', 'white', 'red', 250, 250);
}

function draw() {
  background( 200 , 200 , 200);  
  flag1.drawFlag();
  flag2.drawFlag();
  flag3.drawFlag();
}


class Flag {
  constructor( c1, c2, c3, x, y ){
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.x = x;
    this.y = y;

  }
  w = 50 ;
  h = 10;

  /* v1 - statique */ /*
  drawFlag(){
    noStroke();
    const bandeau = this.w / 3;
    fill(this.c1);  rect(this.x, this.y, bandeau, this.h );
    fill(this.c2);  rect(this.x+bandeau, this.y, bandeau, this.h );
    fill(this.c3);  rect(this.x+bandeau*2, this.y, bandeau, this.h );
  }*/

  /* v2 */
  drawFlag(){
    noStroke();
    const stripe = this.w/3;
    const slices = 30;
    const sliceH = this.h / slices;
    const amp = 1;
    const t = frameCount * 0.07;
    const colors = [this.c1, this.c2, this.c3];
    
    for(let row = 0; row < slices; row++){
      const y = this.y + row + sliceH;
      const offset = sin( row * 0.3 + t) * amp;
      for (let i = 0; i < 3; i++){
        fill(colors[i]);
        rect(this.x + i * stripe + offset, y, stripe, sliceH+1 );
      }
    }
  }

  
}
