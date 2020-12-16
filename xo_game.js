let scl = 100;
let grid = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];
let turn = 0;
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(51);

  noFill();
  strokeWeight(4);
  stroke(255);

  line(0, scl, scl * 3, scl);
  line(0, scl * 2, scl * 3, scl * 2);

  line(scl, 0, scl, scl * 3);
  line(2 * scl, 0, 2 * scl, scl * 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === 0) drawEllipse(i, j);
      else if (grid[i][j] === 1) drawCross(i, j);
    }
  }

  if (gameEnded()) {
    let winner = CheckWinner();
    setTimeout(() => {
      alert('game ended');
    }, 100);

    noLoop();
  }
}

function CheckWinner() {}

function gameEnded() {
  let end = true;
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === -1) return false;
    }
  return end;
}

function drawEllipse(i, j) {
  ellipse(i * scl + scl / 2, j * scl + scl / 2, 40, 40);
}
function drawCross(i, j) {
  line((i + 1) * scl, (j + 1) * scl, i * scl, j * scl);
  line(i * scl, (j + 1) * scl, (i + 1) * scl, j * scl);
}

function randomColor() {
  return color(random(255), random(255), random(255));
}

function mousePressed() {
  let x = Math.floor(mouseX / scl);
  let y = Math.floor(mouseY / scl);
  if (x >= 3 || y >= 3) return;
  if (grid[x][y] == -1) {
    grid[x][y] = turn;
    turn = (turn + 1) % 2;
  }
}
