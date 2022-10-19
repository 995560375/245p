// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU

class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // update the size of the element we render
    update() {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    }
  
    // render the element on the screen
    // by default the shape will be a point/circle
    show() {
      stroke(255);
      strokeWeight(25);
      point(this.x, this.y);
    }
  }

  class Box extends Particle {
    constructor(x, y) {
      super(x, y);
      this.bright = random(255);
      this.r = 10;
    }
  
    update() {
      super.update();
      this.r += random(-8, 8);
    //   this.bright = random(255);
    }
  
    show() {
      strokeWeight(1);
      stroke(255);
      fill(this.bright);
      square(this.x, this.y, this.r);
    }
  }

  class Triangle {
      constructor(x1, y1, x2, y2, x3, y3) {
            this.bright = random(255);
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
            this.x3 = x3;
            this.y3 = y3;
            // this.stroke = random(255);
      }
      update() {
          const temp = random(-10, 10);
          this.x1 += temp;
          this.x2 += temp;
          this.x3 += temp;
          this.bright = random(255);
        //   this.stroke = random(255);
      }

      show() {
        //   stroke(this.stroke);
          fill(this.bright);
          triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
      }
  }