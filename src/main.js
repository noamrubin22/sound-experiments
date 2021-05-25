let poem;
let soundVisual;
let mySound;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/unfinished.mp3");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  textSize(24);
  textAlign(CENTER, CENTER);
  print("hello");
  background("white");
  poem = new Poem();
  soundVisual = new SoundVisual();
}

function draw() {
  poem.display();
  if (mySound.isPlaying()) {
    poem.remove();
    push();
    soundVisual.displayWavelength();
    pop();
    setTimeout(function () {
      soundVisual.displayFrequency();
    }, 1000);
  } else {
    //
  }
}

function mousePressed() {
  if (!mySound.isPlaying()) {
    mySound.play();
  }
}
