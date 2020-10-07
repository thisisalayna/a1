//The dogs I love
let dogs = [{
    name: "Maxie",
    born: "1991"
  },
  {
    name: "Zsa-zsa",
    born: "1993"
  },
  {
    name: "Gabby",
    born: "1999"
  },
  {
    name: "Alfie",
    born: "2005"
  },
  {
    name: "Jodie",
    born: "2010"
  },
  {
    name: "Ricky",
    born: "2014"
  },
  {
    name: "Sebastian",
    born: "2016"
  }
];

let randomIndex = 0;
let animating = false;
let dogImages = [];
let imageCounter = 0;
let button;

function preload() {
  for (let i = 0; i <= 7; i++) {
    dogImages[i] = loadImage(`images/dogs_${i}.jpg`)

  }

}


function setup() {
  createCanvas(600, 600);
  background(220);
  textSize(25);
  fill(255);
  imageMode(CENTER);
  textAlign(CENTER);
  textStyle(ITALIC);
  textFont('Times');
  frameRate(3);



  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);

  text("click to randomize", 300, 50);

}

function draw() {

  if (animating == true) {
    clear();
    image(dogImages[imageCounter], width / 2, height / 2);

  }
  if (imageCounter < dogImages.length - 1) {
    imageCounter++;
  } else {
    imageCounter = 0;
  }

}

function randomizer() {
  animating = false;
  console.log(dogs);
  if (dogs[0]) {
    background(255);
    clear();

    randomIndex = int(random(dogs.length));
    image(random(dogImages), width / 2, 300);
    text(`${dogs[randomIndex].name}
    born in ${dogs[randomIndex].born}`, width / 2, 400);
    //text(dogs[randomIndex].name + " was born in " +
    //dogs[randomIndex].born, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(255), random(255), random(255));
    text("that's everyone!", 300, 50);
  }
}

function buttonPressed() {

  animating = true;
  setTimeout(randomizer, 2000);

}
