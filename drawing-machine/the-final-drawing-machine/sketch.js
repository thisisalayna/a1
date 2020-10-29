let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;
//let visible = true;
let choice = '1';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 157, 220);

}

function draw() {
  if (keyIsPressed) {
    choice = key;
  }
  if (mouseIsPressed) {
    keyTyped(choice);
  }
  array.push([mouseX, mouseY]);
  stroke(0, 0, 0, mouseX);
  strokeWeight(10);

  }


function keyTyped(keyPress) {

  if (keyPress == 's' || keyPress == 'S') {

    saveCanvas('drawing', 'png');
  } else if (key === 'c') {
    //  clear();
    background(0, 157, 220);
  } else if (keyPress === 'h' || keyPress === 'H') {
    toggleView();
  } else if (keyPress === '1') {
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (keyPress === '2') {
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (keyPress === '3') {

  } else if (keyPress === '4') {

  } else if (keyPress === '5') {

  }
  return false;
}


// function toggleView() {
//   if (visible) {
//     div.hide();
//   } else {
//     div.show();
//     visible = true;
//   }
// }
