let poem;
let soundVisual;
let depressed;
let mySound;
let mySound2;
let mode;

function preload() {
  soundFormats("mp3", "ogg");
  // mySound = loadSound("assets/unfinished.mp3");
  mySound = loadSound("assets/test.wav");
  mySound2 = loadSound("assets/waterlife.mp3");
  mySound3 = loadSound("assets/subnautica.mp3");
  depressed = new Depressed();
  mode = 0;
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  textSize(24);
  textAlign(CENTER, CENTER);
  background("white");
  if (mode === 0) {
    poem = new Poem();
    soundVisual = new SoundVisual(mySound, "blue", "orange");
    print(mySound);
  }
}

function draw() {
  if (mode == 0) {
    poem.display();
    if (mySound.isPlaying()) {
      poem.remove();
      push();
      soundVisual.displayWavelength("horizontal", 2);
      pop();
      setTimeout(function () {
        soundVisual.displayFrequency();
      }, 1000);
    }
  } else {
    if (!mySound3.isPlaying()) {
      mySound3.play();
    }
  }
  mySound.onended(function () {
    print("audio ended");
    mode = 1;
  });
}

function mousePressed() {
  if (mode === 0) {
    if (!mySound.isPlaying()) {
      mySound.play();
    }
  }
}
