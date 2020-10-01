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


function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(32);

  text("click to randomize", 50, 50);

 setTimeout(changeBackground, 1000);
}

function draw() {


}

function changeBackground(){
  background


}

function mousePressed() {
  if (dogs[0]) {
    background(255);
    randomIndex = int(random(dogs.length));
    text(dogs[randomIndex].name, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(255));
    text("that's everyone!", 50, 50);
  }



}
