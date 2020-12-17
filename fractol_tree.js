const len = 120;
let angle;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angle = PI / 6;
  noLoop();
}
function draw() {
  background(51);
  strokeWeight(2);
  stroke(255);
  translate(width / 2, height);
  branch(len, color(255));
}

function branch(len, c) {
  if (len <= 4) return;
  stroke(c);
  line(0, 0, 0, -len);

  let newColor = color(random(255), random(255), random(255));

  translate(0, -len);
  push();
  rotate(angle);
  branch(len * 0.8, newColor);
  pop();
  rotate(-angle);
  branch(len * 0.8, newColor);
}
