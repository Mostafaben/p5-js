let data = [];
let colors = [];
const len = 10;
const r = 300;
let scl;
let sum;
let canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < len; i++) {
    data.push(floor(random(0, 100)));
    colors.push(color(random(255), random(255), random(255)));
  }
  sum = data.reduce((acc, value) => (acc += value));
  scl = TWO_PI / sum;
}

let index = 0;
function draw() {
  background(51);

  translate(width / 2, height / 2);
  noStroke();
  let acc = 0;
  for (let i = 0; i < index; i++) {
    push();
    rotate(acc);
    fill(colors[i]);
    let a = data[i] * scl;
    arc(0, 0, r, r, 0, a, PIE);
    acc += a;
    pop();
  }

  if (index >= len) noLoop();
  index++;
}
