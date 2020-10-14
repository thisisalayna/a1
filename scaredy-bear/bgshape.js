
class Background {
  
  background(numberOfCircles)
  {
    this.numberOfCircles = numberOfCircles;

  }
  

drawBack(numberOfCircles){

fill(63, 48, 71);
  for(let i = 0; i<26; i++)
  {
    for(let j = 0; j<26; j++)
    {
      fill(random(255), random(255), random(255));
      circle(16*i, 16*j, 5+random(-0.5,0.5));      
    }
  }
}

}
