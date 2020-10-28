let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  //background(0, 157, 220);

  drawGrid();
}

function draw() {
  //background(0, 157, 220);
  strokeWeight(strokeWidth);
  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 50;


  //  if (mouseIsPressed) {
  //     stroke(map(mouseX, 0, 600, 0, 255, true));
  //     strokeWeight(strokeWidth);
  //     line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  //     line(mouseX, mouseY, pmouseX, pmouseY)
  //     array.push([mouseX, mouseY]);



  // stroke(map(mouseX, 0, 600, 0, 255, true));
  // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  // line(mouseX, mouseY, pmouseX, pmouseY)

}

function keyTyped() {

  if (key == 's' || key == 'S') {

    saveCanvas('drawing', 'png');
  } else if (key === 'c') {
    //  clear();
    background(0, 157, 220);
  }


  return false;
}

function drawGrid() {
  numCells = 20;
  fillColor = "#DB0501";
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === "#DB0501") {
        fillColor = "#9C0300";
      } else {
        fillColor = "#DB0501";
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);

    }
  }
  strokeWeight(5);
}
