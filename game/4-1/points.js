class Point {
    constructor(){
      this.r = 40;
      this.x = random(w);
      this.y = h - this.r;
    }

display(){
  ellipse(this.x, this.y, this.r, this.r);
}

move(){
  this.y++
}
}
