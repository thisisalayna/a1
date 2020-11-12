class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.direction = 'still';
  }

  display() {
    rect(this.x, this.y, this.r, this.r);
  }

  move() {

    switch (this.direction) {
      case 'still':
        // be still
        break;
      case 'up':
        // decrease y
        break;
      case 'down':
        // increase y
        break;
      case 'right':
        //increase x
        break;
      case 'left':
        //decrease x
        break;


    }
  }

}
