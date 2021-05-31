let poem;
let soundVisual;
let depressed;
let mySound;
let mySound2;
let mode;
let soundVisualDepression;
let startScreen = 0;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/unfinished.mp3");
  mySound2 = loadSound("assets/waterlife.mp3");
  depressed = new Depressed();
  depressed.preload();
  mode = 0;
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  textSize(20);
  textAlign(CENTER, CENTER);
  background("white");
  if (mode === 0) {
    poem = new Poem();
    soundVisual = new SoundVisual(mySound, "darkblue", "orange");
  }
}

function draw() {
  if (mode === 0) {
    poem.display();
    if (mySound.isPlaying()) {
      poem.remove();
      push();
      soundVisual.displayWavelength("horizontal", 2.5, 1);
      mySound.rate(2);
      pop();
      setTimeout(function () {
        soundVisual.displayFrequency();
      }, 1000);
    }
    mySound.onended(function () {
      mode = 1;
      depressed.setup();
      text(
        "are you allowing yourself to feel?",
        windowWidth / 2,
        windowHeight / 2
      );
      soundVisualDepression = new SoundVisual(mySound, "black", "black");
    });
  } else if (mode === 1) {
    if (!startScreen == 0) {
      depressed.draw();
      soundVisualDepression.displayWavelength("horizontal", 1.5, 6);
    }
  }
}

function mousePressed() {
  if (mode === 0) {
    if (!mySound.isPlaying()) {
      mySound.play();
    }
  } else if (mode === 1) {
    depressed.playMusic();
    startScreen = 1;
  }
}
