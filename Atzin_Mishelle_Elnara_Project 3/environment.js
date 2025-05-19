
class Environment{
 
  constructor(width){
  // rectMode(CENTER);
  this.bg1x = 0;
  this.bg2x = width/2;
  this.bg3x = this.bg2x*3;
  }

  render(){
    background(135,206,235);
    //(# of Pages - 1 * width) / (60 * desired time) = desired time


    // fill(100);
    // rect(this.bg1x, height/2, width, height);


    // image(bird1, this.bg1x, height/2, width);
    // image(bird2, this.bg1x + width, height/2, width);
    // image(bird1, this.bg1x + width*2, height/2, width);
    // image(bird2, this.bg1x + width*3, height/2, width);
    // image(bird1, this.bg1x + width*4, height/2, width);
    // image(bird2, this.bg1x + width*5, height/2, width);
    push();
     imageMode(CORNER);
     if (keyIsDown(LEFT_ARROW)){
      background(112, 0, 138);
     image(birdViewImage, this.bg1x, 0, height*13.19, height);
    }
    else if(keyIsDown(RIGHT_ARROW)){
      background(220);
      image(BWImage, this.bg1x, 0, height*13.19, height);
    }else{
      background(135,206,235);
      image(normalImage, this.bg1x, 0, height*13.19, height);
    }
    pop();

    this.bg1x -= height*10.19/7500;

    if(bird.py < 0){
      imageMode(CENTER);
      background(0);
      image(nightSky, this.bg2x ,height/2, width, width*0.5625);
      image(nightSky, this.bg3x ,height/2, width, width*0.5625);
       
      
      if (this.bg2x <= -width / 2) {
      this.bg2x = width*3/ 2;
      counter++;
    }
  
    if (this.bg3x <= -width / 2) {
      this.bg3x = width*3/ 2;
      counter++;
    }
      
    }


   


    // fill(200);
    // rect(this.bg2x, height/2, width, height);
    this.bg2x -= width*5/7200;
    this.bg3x -= width*5/7200;
 
   
  
    // if (this.bg1x <= -width / 2) {
    //   this.bg1x = width*3/ 2;
    //   counter++;
    // }
  
    // if (this.bg2x <= -width / 2) {
    //   this.bg2x = width*3/ 2;
    //   counter++;
    // }
    // if (this.bg3x <= -width / 2) {
    //   this.bg2x = width*3/ 2;
    //   counter++;
    // }
  }
}