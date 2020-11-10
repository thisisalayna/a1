'use strict'

let state = 'title';
let cnv;
let someRainbow = 0;
let points = 0;
let w = 600;
let h = 600;

function setup() {
  cnv = createCanvas(w, h);

  textFont('avenir next');

}


function draw() {
  background(200);

  someRainbow = (someRainbow + .9) % 360;

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win!':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;

  }

  // if (state === 'title') {
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  // } else if (state === 'level 1') {
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // } else {
  //
  // }

}

function title() {
  textAlign(CENTER);
  textSize(100);
  stroke(255);
  strokeWeight(3);
  fill('purple');
  text('This GAME!', w / 2, h / 5);

  textSize(25);
  text('click anywhere to start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is CLICKED! (on the title page)');
  state = 'level 1'
}

function level1() {
  background(50, 50, 200);
  textSize(12);
  fill(255);
  stroke(0);
  strokeWeight(0);
  text('click for points', w / 2, h / 3);
  text('points:' + points, w/2, h/4);
}

function level1MouseClicked() {
  points++;
  console.log('points = ' + points);

  if (points >= 15) {
    state = 'you win!';
  }
}

function youWin() {
  background(someRainbow);
  textSize(100);
  stroke(255);
  strokeWeight(3);
  fill(someRainbow);
  text('YOU win!', w / 2, h / 3);
  strokeWeight(0);
  fill(255, 0, 0);
  textSize(20);
  text('click to restart', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
