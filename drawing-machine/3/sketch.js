function setup() {
  createCanvas(1000, 600);
    background(200);


}

function draw() {

if (mouseIsPressed){
  stroke(0,0,0, mouseX*(1/6));
  strokeWeight(10);
  line(width - mouseX, height - mouseY, width - pmouseX,height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY)
}

}

function keyTyped(){

if (key =='p'|| key == 'P'){
  saveCanvas('drawingmachine', 'png');
}
  return false;
}
