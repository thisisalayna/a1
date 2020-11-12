class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

  display() {
    rect(this.x, this.y, this.r, this.r);
    // image(playerImg, this.x, this.y, this.r, this.r);
  }

  move() {

    switch (this.direction) {
      case 'still':
        // be still
        break;
      case 'up':
        // decrease y
        this.y -= this.speed;
        break;
      case 'down':
        // increase y
        this.y += this.speed;
        break;
      case 'right':
        //increase x
        this.x += this.speed;
        break;
      case 'left':
        //decrease x
        this.x -= this.speed;
        break;


    }
  }

}
