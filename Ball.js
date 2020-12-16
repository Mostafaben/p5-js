let speed = 12;
class Ball {
  constructor() {
    this.pos = createVector(random(width), 100);
    this.r = 10;
    this.c = color(10, random(100) + 100, 0);
    this.vel = createVector(random(-4, 4), max(random(-speed, speed), 10));
  }

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  update() {
    if (this.pos.x >= width || this.pos.x <= 0) {
      this.vel.x *= -1;
    }
    if (this.pos.y >= height || this.pos.y <= 0) {
      this.vel.y *= -1;
    }
    this.pos.add(this.vel);
  }

  dead() {
    return this.pos.y >= height;
  }

  hit(base) {
    var bRight = base.pos.x + base.w;
    var bLeft = base.pos.x;
    var bTop = base.pos.y;
    var bBottom = base.pos.y + base.h;
    if (this.pos.x + this.r > bLeft)
      if (this.pos.x - this.r < bRight)
        if (this.pos.y + this.r > bTop)
          if (this.pos.y - this.r < bBottom) {
            this.vel.y *= -1;
            this.vel.y -= 0.5;
            this.vel.x += 1;
            hitSound.play();
            return true;
          }

    return false;
  }
}
