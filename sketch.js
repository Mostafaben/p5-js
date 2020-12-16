let b;
let starterBalls = 1;
let balls = [];
let respawnCounter = 0;
let score = 0;
let ballsCount = 30;
let btnCoor;
let start = false;
let canvas;
let hitSound;
let winMusic;

function preload() {
  hitSound = loadSound('./metalbat.mp3');
  winMusic = loadSound('./Ball+Hit+Cheer.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  b = new Base();
  btnCoor = createVector((width - btnWidth) / 2, (height - btnHeight) / 2);
  for (let i = 0; i < starterBalls; i++) {
    balls.push(new Ball());
  }
}

const btnWidth = 180;
const btnHeight = 50;

function startGame() {
  start = true;
  background(51);
  draw();
}

function mousePressed() {
  if (
    mouseX > btnCoor.x &&
    mouseX < btnWidth + btnCoor.x &&
    mouseY < btnCoor.y + btnHeight &&
    mouseY > btnCoor.y
  ) {
    startGame();
  }
}

function draw() {
  if (!start) {
    background(51);
    fill(0, 0, 0);
    noStroke();
    rect(btnCoor.x, btnCoor.y, btnWidth, btnHeight);
    textSize(20);
    fill(255);
    textAlign(CENTER);
    text('start the game', width / 2, height / 2 + 8);
    return;
  } else {
    background(0, 200, 255);
    loop();
    textSize(20);
    fill(255);
    textAlign(LEFT);
    text('SCORE : ' + floor(respawnCounter / 60), 10, 30);
    textAlign(LEFT);
    text('Balls : ' + ballsCount, width - 100, 30);
    b.show();
    let deadBalls = [];

    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i];
      ball.show();
      ball.update();
      ball.hit(b);
      if (ball.dead()) {
        deadBalls.push(i);
      }
    }

    for (let i = 0; i < deadBalls.length; i++) {
      balls.splice(deadBalls[i], 1);
    }

    if (keyIsDown(LEFT_ARROW)) {
      b.move(-1);
    } else if (keyIsDown(RIGHT_ARROW)) {
      b.move(1);
    }

    respawnCounter++;

    if (balls.length == 0) {
      balls.push(new Ball());
      ballsCount--;
    }

    if (balls.length > 0 && respawnCounter % 300 == 0) {
      balls.push(new Ball());
      ballsCount--;
    }

    if (ballsCount == 0) {
      winMusic.play();
      background(255, 0, 0);
      textSize(40);
      textAlign(CENTER);
      fill(255);
      text('you lost', width / 2, height / 2);
      textSize(30);
      textAlign(CENTER);
      fill(255);
      text(
        'Score : ' + floor(respawnCounter / 60),
        width / 2,
        height / 2 + 100
      );
      noLoop();
      return;
    }
  }
}
