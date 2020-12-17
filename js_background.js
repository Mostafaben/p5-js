let circles = [];
let stop = true;
let r = 200;
function setup() {
  createCanvas(windowWidth, windowHeight);
  circles.push(new Circle(width / 2, height / 2, 100, color(51)));
  background(51);
}

function mousePressed() {
  stop = !stop;
}
function draw() {
  if (stop) return;
  background(51);

  let count = 0;
  while (count < 10) {
    var x = random(width);
    var y = random(height);
    var intersect = false;
    var c = new Circle(x, y);
    for (let i = 0; i < circles.length; i++) {
      if (circles[i] == c) continue;
      if (c.intersect(circles[i])) {
        intersect = true;
        break;
      }
    }
    if (!intersect) {
      circles.push(c);
      count++;
    }
  }

  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  textSize(50);
  fill(255);
  textAlign(CENTER);
  let a = width / 2;
  fill(255, 255, 0);
  let b = height / 2;
  text('JS', a, b, 100, 100);
}

class Circle {
  constructor(x, y, r, c) {
    this.pos = createVector(x, y);
    this.r = r || random(2, 50);
    this.c = c || color(random(255), random(255), random(255));
  }

  show() {
    fill(this.c);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  intersect(c) {
    return this.pos.dist(c.pos) <= this.r + c.r;
  }
}
