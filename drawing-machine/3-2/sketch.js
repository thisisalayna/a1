let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  noFill();


}

function draw() {

  // if (mouseIsPressed) {
  //   stroke(0, 0, 0, mouseX * (1 / 6));
  //   strokeWeight(10);
  //   line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  //   line(mouseX, mouseY, pmouseX, pmouseY)
  //   array.push([mouseX, mouseY]);
  //
  // }

  stroke(map(mouseX, 0, 600, 0, 255, true));
  strokeWeight(5);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY)
  array.push([mouseX, mouseY]);
}

function keyTyped() {

  if (key == 's' || key == 'S') {

    saveCanvas('fileName', 'png');

  }

  else if(key ==='c'){
    clear();
  }


  return false;
}
