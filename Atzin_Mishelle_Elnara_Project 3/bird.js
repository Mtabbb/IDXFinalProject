
class Bird{

 
  constructor(py, spd, gravity){
   
    this.py = py;
    this.spd = spd;
    this.gravity = gravity;
    
  }

  render(){
  imageMode(CENTER);
 
  fill(200,70,75);

  image(birdImage, width/3,this.py, 72, 72);

  image(birdImage, width/3, this.py + height+25, 72, 72);
  this.py = this.py + this.spd;
  this.spd = this.spd + this.gravity;

  if (this.py > height) {
    this.py = height;
  }
 }
}



function keyReleased(){
  if (keyCode == 87 && state === 1) {
    bird.spd = (bird.spd * 3/4) - 3;
    birdImage = bird2;
    birdFlap1.play();
  }

  setTimeout (() => {
    birdImage = bird1;
  }, 200);
  
}