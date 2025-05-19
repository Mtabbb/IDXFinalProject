let environment, bird;
let counter = 0;
let spaceTransitioning = false;
let birdIsCold = false;
let state = 0;
let birdCantBreathe = false;
// let width = 1920;
// let height = 1080;

let gameMusic;
let menuMusic;
let bird1, bird2;

function preload() {
  gameMusic = loadSound("Vivaldi - Game Audio.mp3");
  menuMusic = loadSound("Vivaldi - Intro.mp3");
  bird1 = loadImage("Bird1.png");
  bird2 = loadImage("Bird2.png");
  birdFlap1 = loadSound("birdflap1.wav");
  birdImage = bird1;
  normalImage = loadImage("bgfull.png");
  birdViewImage = loadImage("bgfull bird vision.png");
  BWImage = loadImage("bgfull BW.png");
  sadBird = loadImage("sad.png");
  nightSky = loadImage("Night Sky.png");
  win = loadImage("Happy Bird.png");
  calmMusic = loadSound("Dvorak Calm.mp3");
}

function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.95);

  environment = new Environment(width);
  bird = new Bird(100, 0.5, 0.05);

  textFont("Georgia");
  textAlign(CENTER);
  rectMode(LEFT);

  startButton = createButton("Start Game");
  startButton.position(width / 3-40, height *4/ 5 + 40);
  startButton.style("font-size", "18px");
  startButton.style("padding", "10px 20px");
  startButton.style("font-family", "Georgia");
  startButton.mousePressed(startGame);

  gameMusic.onended(() => {
    if (state === 1) {
      state = 4;
    }
  });
}

function startGame() {
  state = 1;
  startButton.hide();
  gameMusic.play();
  menuMusic.stop();
}

function mousePressed() {
  if (state == 0) {
    menuMusic.play(); //loops menu music on load
  }
}

function draw() {
  //i guess this was the issue
  // if (mouseX > 0) {
  //   if (!menuMusic.isPlaying()) {
  //     menuMusic.play();
  //   }
  // }

  background(240, 230, 200);
  fill(80, 50, 20);
  textSize(48);
  push();
  textAlign(LEFT);
  text("Classical Bird", width / 4, height / 2 - 40);

  textSize(16);
  fill(0);
  text("A poetic flight through classical skies", width / 4, height / 2);
  pop();

  if (state === 1) {
    draw1();
    menuMusic.stop();
    // if (!gameMusic.isPlaying()) {
    //   gameMusic.play();
    // }
  } else if (state === 2) {
    gameMusic.stop();
    if (!menuMusic.isPlaying()) {
      menuMusic.play();
    }
    draw2();
    bird.py = height;
    birdFlap1.stop();
  } else if (state === 3) {
    gameMusic.stop();
    if (!menuMusic.isPlaying()) {
      menuMusic.play();
    }
    draw3();
    bird.py = 100;
    birdFlap1.stop();
  } else if (state === 4) {
    gameMusic.stop();
    menuMusic.stop();
    draw4();
  }

  console.log(state);
}

function draw1() {
  environment.render();
  bird.render();

  // console.log(counter);
  // console.log(bird.spd," ", bird.gravity);
  // console.log(counter);

  if (bird.py < 0) {
    outputVolume(0.2);
    if (spaceTransitioning == false) {
      bird.gravity = 0.025;
      spaceTransitioning == true;
    }
  } else {
    bird.gravity = 0.05;
    outputVolume(1);
  }
  // if (bird.py > 0){
  //   if (spaceTransitioning == true){

  //   }
  // }

  if (bird.spd > 20) {
    state = 2;
  }

  if (bird.py < -height - 140) {
    state = 3;
  }

  // console.log(birdIsCold)

  // if (birdIsCold == true) {
  // }

  // if (birdCantBreathe == true) {
  // }
}

function draw2() {
  push();
  imageMode(CENTER);
  image(sadBird, width / 2, height / 2, width, width * 0.56);
  pop();
  textFont("Georgia");
  textSize(64);
  fill(255, 0, 0);
  text("i need shelter...", width / 2, height / 2 - 30);
}

function draw3() {
  fill(255, 0, 0);
  background(0);
  textSize(64);
  text("i can't br...", width / 2, height / 2);
}

function draw4() {
  imageMode(CENTER);
  background(255);
  image(win, width / 2, height / 2, width, width * 0.5625);
  if (state === 4 && !calmMusic.isPlaying()) {
    calmMusic.play();
  }
  // console.log("draw4 running");
}