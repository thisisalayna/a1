//The dogs I love
let dogs = [{
  name: "Maxie",
  born: "1991"
}, {
  name: "Zsa-zsa",
  born: "1993"
}, {
  name: "Gabby",
  born: "1999"
}, {
  name: "Alfie",
  born: "2005"
}, {
  name: "Jodie",
  born: "2010"
}, {
  name: "Ricky",
  born: "2014"
}, {
  name: "Sebastian",
  born: "2016"
}];

let randomIndex = 0;
let counter = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(32);

  text("click to randomize", 50, 50);

  setTimeout(changeBackground, 1000);
}

function draw() {

}

//function changeBackground() {
//  if(counter<=5){
  //  counter++;
//    console.log(counter);
  //background(random(255), random(255), random(255));}

function randomizer(){
  if (dogs[0]) {
   background(255);
   randomIndex = int(random(dogs.length));
   text(dogs[randomIndex].name, 50, 50);
   dogs.splice(randomIndex, 1);
  } else {
   background(random(255), random(255), random(255));
   text("that's everyone!", 50, 50);
  }

}

function mousePressed() {

  setTimeout(randomizer, 2000);

}
