let d = new Date();
let seconds;
let mins;
let hours;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  text(d, 100, 100);
  seconds = (d.getSeconds() * TWO_PI) / 60;
  mins = (d.getMinutes() * TWO_PI) / 60;
  let h = d.getHours() % 12;
  hours = (h * TWO_PI) / 12;
  background(51);
  frameRate(1);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(-PI / 2);
  noFill();
  strokeWeight(10);
  stroke(255, 0, 200);
  ellipse(0, 0, 300, 300);

  push();
  rotate(mins);
  fill(255, 0, 0);
  noStroke();
  rect(0, 0, 200, 10);
  pop();

  push();
  rotate(hours);
  fill(0, 255, 0);
  noStroke();
  rect(0, 0, 120, 10);
  pop();

  push();
  rotate(seconds);
  fill(randomColor());
  noStroke();
  rect(0, 0, 100, 10);
  seconds += TWO_PI / 60;
  pop();

  noStroke();
  fill(255);
  ellipse(0, 0, 50, 50);

  if (seconds >= TWO_PI) {
    seconds = 0;
    background(randomColor());
    mins += TWO_PI / 60;
  }
  if (mins >= TWO_PI) {
    mins = 0;
    hours += TWO_PI / 12;
  }
}

function randomColor() {
  return color(random(255), random(255), random(255));
}
