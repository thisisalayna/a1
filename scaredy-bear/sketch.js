'use strict'
var mic;
let micLevel;
let reSize;
let noseColor = 0;
let bg;
let randoms = [];
let sketchStarted  = false;
let x;
let changeDirection;

function setup() {
  x = 1;
  changeDirection = false;
  createButton("Start").mousePressed(startSketch);
  noseColor = 0;
  createCanvas(400, 400);
  bg = new Background(10);
  drawHead();
  drawEyes();
  drawPupils(1);
  drawShine();
  drawNose();
  drawMouth(0);
  drawTongue();
  for (let i = 0; i < 10; i + 2) {
    let x = random(400);
    let y = random(400);
    random[i] = x;
    random[i++] = y;
  }

}

function startSketch(){
mic = new p5.AudioIn();
mic.start();
mic.stop();

sketchStarted = true;
}



function draw() {

  if (sketchStarted) {
background(165, 207, 201);

  drawShadow();

  bg.drawBack(100);

  noseColor = (noseColor + .1) % 360;
  drawNose();

  if (mouseX < 200) {
    reSize = (mouseX + 100) / 100;
  } else {

    reSize = (5 - (mouseX / 100));

  }

  micLevel = mic.getLevel() * 300;
  drawHead();

  // positionTable = bg.generateRandom(10);

  drawEyes();
  drawPupils(reSize);
  drawShine(reSize);

  drawNose();
  translate(p5.Vector.fromAngle(micLevel, 5));



  drawMouth();

  push();
  translate(p5.Vector.fromAngle(radians(micLevel * 1000), 2));
  drawTongue();
  pop();

  }



}

function drawHead() {
  fill(102, 7, 100);
  strokeWeight(0);
  circle(200, 200, 215);
  circle(280, 130, 70);
  fill(146, 39, 143);
  arc(200, 200, 215, 215, HALF_PI, HALF_PI + PI);
  circle(120, 130, 70);
  fill(168, 114);
  arc(280, 130, 40, 40, PI, QUARTER_PI);
  fill(247, 167);
  arc(120, 130, 40, 40, HALF_PI, QUARTER_PI + HALF_PI + PI);

}

function drawEyes() {
  strokeWeight(0);
  fill(255);
  circle(160, 190, 30);
  fill(200, 250, 255);
  circle(240, 190, 30);
}

function drawPupils(scale) {
  fill(25, 145, 129);
  circle(160, 195, 20 * scale);
  fill(15, 69, 62);
  circle(240, 195, 20 * scale);
}

function drawShine(scale) {
  fill(200, 250, 255);
  circle(247, 190, 5 * scale);
  fill(255);
  circle(153, 190, 5 * scale);
}

function drawNose() {
  colorMode(HSB);
  fill(noseColor, 100, 100);
  colorMode(RGB);
  ellipse(200, 220, 30, 20);
  fill(102, 7, 15);
  ellipse(190, 225, 4, 5);
  ellipse(210, 225, 4, 5);
}

function drawMouth() {
  fill("#302030");
  circle(185, 260, 50);
  circle(215, 260, 50);
}

function drawTongue() {
  fill(145, 7, 7);
  ellipse(200, 270, 30, 15);

}

function drawShadow() {
  fill(155, 193, 188);
  rect(200, 0, 200, 400);
}
