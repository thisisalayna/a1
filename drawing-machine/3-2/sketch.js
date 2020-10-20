let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(0, 157, 220);
}

function draw() {
  background(0, 157, 220);
  strokeWeight(strokeWidth);
  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 50;


  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true));
    strokeWeight(strokeWidth);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY)
    array.push([mouseX, mouseY]);

  }

  stroke(map(mouseX, 0, 600, 0, 255, true));
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY)

}

function keyTyped() {

  if (key == 's' || key == 'S') {

    saveCanvas('fileName', 'png');

  } else if (key === 'c') {
    clear();
  }


  return false;
}
