let array = [];
let noiseOffset = 0.0;
let g;
let colorPicker;
let choice = '1';
let button;
let mousePressed;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 157, 220);

g = createGraphics(200, 200);
colorPicker = createColorPicker('#ffffff');
colorPicker.size(50, 50);
//g.position(20, 20);
}

function draw() {
strokeWeight(10);
stroke(colorPicker.color());
cursor('grab');


g.background(colorPicker.color());
g.noStroke();
g.ellipse(g.width / 2 , g.height / 2, 10, 10);

  if (keyIsPressed) {
    choice = key;
    keyTyped(choice);

  }

  if (mouseIsPressed) {
    keyTyped(choice);
    cursor('grabbing');
}

  array.push([mouseX, mouseY]);

  }


function keyTyped(keyPress) {

  if (keyPress == 's' || keyPress == 'S') {

    saveCanvas('drawing', 'png');
  } else if (key === 'c') {
    //  clear();
    background(0, 157, 220);

  } else if (keyPress === '1') {
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (keyPress === '2') {
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (keyPress === '3') {

    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseX + 100, mouseY + 100, pmouseX + 100, pmouseY + 100);
    line(width - mouseX + 100, height - mouseY + 100, width - pmouseX + 100, height - pmouseY + 100);

  } else if (keyPress === '4') {
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseX + 100, mouseY + 100, pmouseX + 100, pmouseY + 100);
    line(width - mouseX + 100, height - mouseY + 100, width - pmouseX + 100, height - pmouseY + 100);
    line(mouseX + 300, mouseY + 300, pmouseX + 300, pmouseY + 300);
    line(width - mouseX + 300, height - mouseY + 300, width - pmouseX + 300, height - pmouseY + 300);

  } else if (keyPress === '5') {
    strokeWeight(500);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  return false;
}

// function clouds(){
//   noStroke();
// ellipse(100, 100, 50);
// ellipse(140, 110, 70, 50);
// ellipse(190, 110, 50);
// ellipse(150, 90, 80, 50);
//
// }

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
