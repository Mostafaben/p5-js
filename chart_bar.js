let data = new Array(90).fill(0);

let max;
let index = 0;
let scl;
let maxValue;
let gap;
let colors = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < data.length; i++) {
    data[i] = random(0, 5000);
    colors.push(color(random(255), random(255), random(255)));
  }
  gap = width * 0.001;
  scl = (width - data.length * gap) / data.length;
  maxValue = maxInData(data);
  max = maxValue / (height - 50);
}

function mousePressed() {
  noLoop();
}

function draw() {
  background(51);
  data = [
    ...data.slice(0, index).sort((a, b) => b - a),
    ...data.slice(index, data.length),
  ];
  fill(255);
  textSize(20);
  text('max is : ' + data[0], width / 2, 20);

  noStroke();
  for (let i = 0; i < index; i++) {
    fill(colors[i]);
    rect(i * scl, height - 20, scl - gap, (-1 * data[i]) / max);

    if (data.length < 100) {
      textAlign(CENTER);
      textSize(12);
      text(i + 1, i * scl + scl / 2, height);
    }
  }
  if (index < data.length) {
    index++;
  } else {
    noLoop();
    setTimeout(() => {
      alert('sorted');
    }, 100);
  }
}

function maxInData(data) {
  let max = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i] > max) max = data[i];
  }
  return max;
}
