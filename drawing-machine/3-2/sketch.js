let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();


}

function draw() {

  if (mouseIsPressed) {
    stroke(0, 0, 0, mouseX * (1 / 6));
    strokeWeight(10);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY)
    array.push([mouseX, mouseY]);

  }

}

function keyTyped() {

  if (key == 's' || key == 'S') {

    saveCanvas('fileName', 'png');

  }
  else if (key === 'd') {

beginShape();
    for (let i = 0; i < array.length; i++) {
      console.log(i);
      curveVertex(array[i][0], array[i][1] )
    }
endShape();

  }
  else if(key ==='c'){
    clear();
  }


  return false;
}
