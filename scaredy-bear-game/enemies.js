class Enemy {
  constructor() {
    this.r = 10;
    this.x = random(w);
    this.y = 0 - this.r;
    this.color = color(random(255), random(255), random(255));
  }



  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    this.y++
  }
}
