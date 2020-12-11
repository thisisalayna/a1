class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 4;
    this.direction = 'still';
  }

  display() {
    image(playerImg, this.x, this.y, this.r, this.r);
  }

  move() {

    switch (this.direction) {
      case 'still':
        // be still
        break;
      case 'up':
        // decrease y
        if (this.y > 0) {
          this.y -= this.speed;
        }
        break;
      case 'down':
        // increase y
        if (this.y < h - this.r) {
          this.y += this.speed;
        }
        break;
      case 'right':
        //increase x
        if (this.x < w - this.r) {
          this.x += this.speed;
        }
        break;
      case 'left':
        //decrease x
        if (this.x > 0) {
          this.x -= this.speed;
        }
        break;
    }
  }

}
