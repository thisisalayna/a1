'use strict'

let state = 'title';
let cnv;
let someRainbow = 0;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let playerImg;
let coinImg;

function preload() {
  playerImg = loadImage('assets/playerimage.png');
  //coinImg = loadImage('assets/coinimage.jpg');
}

function setup() {
  cnv = createCanvas(w, h);

  //  textFont('avenir next');

  player = new Player();
  //coins[0] = new Coin();
  coins.push(new Coin());
}


function draw() {
  background(165, 207, 201);

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
    if (dist(player.x + player.r/2, player.y + player.r/2, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      console.log(points);
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      //console.log('coin is out of town');
    }
  }
}

function level1MouseClicked() {
  //points++;
  console.log('canvas is CLICKED! (on level 1)');

  if (points >= 15) {
    state = 'you win!';
  }
}

function youWin() {
  //background(someRainbow);
  background(0);
  textSize(100);
  stroke(255);
  strokeWeight(3);
  //fill(someRainbow);
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
