let array = [];
let noiseOffset = 0.0;
//let strokeWidth = 5;
let choice = '1'

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 157, 220);

}

function draw() {
strokeWeight(10);
stroke('white');
cursor('grab');

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
  } else if (keyPress === 'h' || keyPress === 'H') {
    myFunction();
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

  } else if (keyPress === '5') {

  }
  return false;
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
