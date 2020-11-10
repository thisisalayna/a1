'use strict'

let state ='title';
let cnv;

function setup() {
  cnv = createCanvas(600, 600);
  cnv.mouseClicked(function(){
    console.log('canvas is CLICKED!');
  });
}


function draw() {
  background(200);

  if (state === 'title') {
    title();
  } else if (state === 'level 1') {
    level1();
  }

}

function title() {
  textSize(100);
  stroke(255);
  strokeWeight(3);
  fill('purple');
  text('This GAME!', 100, 100);
}

function level1() {
  background(50, 50, 200);
}
