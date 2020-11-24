'use strict'
var bubbles = []; //create empty array
var dir = 1;  //sets default direction

function setup() {
createCanvas(windowWidth, windowHeight);
for (let i = 0; i < 50; i++) {
  bubbles.push(new Bubble()); //fill array with 50 Bubble objects
  }
}

function draw() {
  //background(255, 5);
for (let i = 0; i < bubbles.length; i++) {
  bubbles[i].move();
  bubbles[i].display();
}
}

function mousePressed() {
  dir = dir * -1;
}

function keyPressed() {
  if (keyCode === 32) {
      setup();
    }
  else if (keyCode === 16) {
        console.log("The number of bubbles present is: " + bubbles.length);
      }
}

class Bubble {
  constructor() {
    this.size = random(75);
    this.x = random(width);
    this.y = random(height);
  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  move() {
    let targetX = random(mouseX-5, mouseX+5);
    let dx = targetX - this.x ;
    this.x += dx * 0.03 * dir;
    let targetY = random(mouseY-5, mouseY+5);
    let dy = targetY - this.y;
    this.y += dy * 0.03 * dir;

  }

  display() {
    stroke('black');
    //strokeWeight(0.5);
    //noFill();
    fill('white');
    ellipse(this.x, this.y, this.size, this.size);
  }
}
