'use strict'
let bg;
let randoms = [];
let x;
let reSize;
let state = 'landing';
let cnv;
let someRainbow = 0;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let enemy = [];
let playerImg;
let fade;


function preload() {
  playerImg = loadImage('assets/playerimage.png');
}

function setup() {
  cnv = createCanvas(w, h);
  x = 1;
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
    fade = 0;
  //  textFont('');

  player = new Player();
  coins[0] = new Coin();
  coins.push(new Coin());
}


function draw() {
  background(165, 207, 201);

  switch (state) {
    case 'landing':
      landing();
      cnv.mouseClicked(landingMouseClicked);
      break;
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you did it!!':
      youDidIt();
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

function keyPressed() {
  if (keyCode == UP_ARROW || key == 'w') {
    player.direction = 'up'
  } else if (keyCode == LEFT_ARROW || key == 'a') {
    player.direction = 'left'
  } else if (keyCode == DOWN_ARROW || key == 's') {
    player.direction = 'down'
  } else if (keyCode == RIGHT_ARROW || key == 'd') {
    player.direction = 'right'
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW || key == 'w' || keyCode == LEFT_ARROW || key == 'a' || keyCode == DOWN_ARROW || key == 's' || keyCode == RIGHT_ARROW || key == 'd') {
    player.direction = 'still'
  }

}

function landing() {
let fadeAmount = 1;

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
    reSize = (5 - (20 / 100));

}

 function landingMouseClicked(){
   console.log('canvas is CLICKED! (on the landing page)');
   state = 'title'
 }

function title() {
  textAlign(CENTER);
  textSize(80);
  noStroke();
  fill(102, 7, 100);
  text('Scaredy Bear', w / 2, h / 3);

  textSize(20);
  text('click anywhere to start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is CLICKED! (on the title page)');
  state = 'level 1'
}

function level1() {
  background(165, 207, 201);

  if (random(1) <= 0.01) {
    coins.push(new Coin());
  }

  textSize(12);
  fill(255);
  stroke(0);
  strokeWeight(0);
  text(`points: ${points}`, w / 2, h / 3);

  player.display();
  player.move();

  // coins array, display/move
  // for (let i = 0; i < coins.length; i++){
  //   coins[i].display();
  //   coins[i].move();
  // }

  //foreach
  // coins.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })

  //for of loop
  for (let coin of coins) {
    coin.display();
    coin.move();
  }

  //coins array backwards. player.r/2 because it was not truly centered
  for (let i = coins.length - 1; i >= 0; i--) {
    if (dist(player.x + player.r / 2, player.y + player.r / 2, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      console.log(points);
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
    }
  }

  if (points >= 15) {
    state = 'you did it!!';
  }
}

function level1MouseClicked() {
  //points++;
  console.log('canvas is CLICKED! (on level 1)');


}

function youDidIt() {
  //background(someRainbow);
  background(0);
  textSize(100);
  stroke(255);
  strokeWeight(3);
  //fill(someRainbow);
  text('YOU did it!', w / 2, h / 3);
  strokeWeight(0);
  fill(255, 0, 0);
  textSize(20);
  text('click to restart', w / 2, h * 3 / 4);
}

function youDidItMouseClicked() {
  state = 'level 1';
  points = 0;
}


function drawHead() {
  fill(102, 7, 100);
  strokeWeight(0);
  circle(300, 300, 215);
  circle(380, 230, 70);
  fill(146, 39, 143);
  arc(300, 300, 215, 215, HALF_PI, HALF_PI + PI);
  circle(220, 230, 70);
  fill(168, 114);
  arc(380, 230, 40, 40, PI, QUARTER_PI);
  fill(247, 167);
  arc(220, 230, 40, 40, HALF_PI, QUARTER_PI + HALF_PI + PI);

}

function drawEyes() {
  strokeWeight(0);
  fill(255);
  circle(260, 290, 30);
  fill(200, 250, 255);
  circle(340, 290, 30);
}

function drawPupils() {

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      fill(25, 145, 129);
      circle(260, 295, 20 + random(-2, 2));
      fill(15, 69, 62);
      circle(340, 295, 20 + random(-2, 2));
    }
  }
}

function drawShine() {
  fill(200, 250, 255);
  circle(347, 290, 5);
  fill(255);
  circle(253, 290, 5);
}

function drawNose() {
  fill(211, 55, 78);
  ellipse(300, 320, 30, 20);
  fill(102, 7, 15);
  ellipse(290, 325, 4, 5);
  ellipse(310, 325, 4, 5);
}

function drawMouth() {
  x = x + random(-1, 1);
  fill("#302030");
  circle(285 + x, 360, 50);
  circle(315 + x, 360, 50);
}

function drawTongue() {
  x = 0;
  x = x + random(-3, 3);
  fill(211, 55, 78);
  ellipse(300 + x, 370, 30, 15);
}

function drawShadow() {
  fill(155, 193, 188);
  rect(300, 0, 300, 600);
}
