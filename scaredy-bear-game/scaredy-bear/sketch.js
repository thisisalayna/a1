'use strict'
let bg;
let randoms = [];
let x;
//let changeDirection;

function setup() {
  x = 1;
  //changeDirection = false;
  createCanvas(400, 400);
  bg = new Background(10);
  drawHead();
  drawEyes();
  drawPupils();
  drawShine();
  drawNose();
  drawMouth();
  drawTongue();
  for (let i = 0; i < 10; i + 2) {
    let x = random(400);
    let y = random(400);
    random[i] = x;
    random[i++] = y;
  }

}

function draw() {
  background(165, 207, 201);
    drawShadow();
    bg.drawBack(100);
    drawNose();
    drawHead();
    drawEyes();
    drawPupils();
    drawShine();
    drawNose();
    drawMouth();
    drawTongue();

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

function drawPupils() {
  fill(25, 145, 129);
  circle(160, 195, 20);
  fill(15, 69, 62);
  circle(240, 195, 20);
}

function drawShine() {
  fill(200, 250, 255);
  circle(247, 190, 5);
  fill(255);
  circle(153, 190, 5);
}

function drawNose() {
  fill(211, 55, 78);
  ellipse(200, 220, 30, 20);
  fill(102, 7, 15);
  ellipse(190, 225, 4, 5);
  ellipse(210, 225, 4, 5);
}

function drawMouth() {
  x = x + random(-1, 1);
  fill("#302030");
  circle(185 + x, 260, 50);
  circle(215 + x, 260, 50);
}

function drawTongue() {
  x = 0;
  x = x + random(-3, 3);
  fill(211, 55, 78);
  ellipse(200 + x, 270, 30, 15);

}

function drawShadow() {
  fill(155, 193, 188);
  rect(200, 0, 200, 400);
}
