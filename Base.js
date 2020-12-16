class Base {
  constructor() {
    this.w = 100;
    this.h = 20;
    this.pos = createVector(width * 0.5 - this.w * 0.5, height - 100);
  }

  show() {
    noStroke();
    fill(255);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }

  move(dir) {
    if (dir === -1) {
      if (this.pos.x <= 0) return;

      this.pos.x -= 15;
    } else {
      if (this.pos.x > width - this.w) return;
      this.pos.x += 15;
    }
  }
}
