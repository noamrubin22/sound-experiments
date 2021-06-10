let breath, mySound, soundVisual;

function preload() {
  breath = new Breath();
  breath.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //   noStroke();
  //   background(222);
  //   fill(255);
  //   textSize(15);
  //   textAlign(CENTER);
  breath.setup();
}

function draw() {
  breath.draw();
}

function mouseClicked() {
  breath.startVideo();
}

function mouseMoved() {
  breath.playMusic();
}
