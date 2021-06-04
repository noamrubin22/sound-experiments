"use strict";

var poem;
var soundVisual;
var depressed;
var mySound;
var mySound2;
var mode;
var soundVisualDepression;
var startScreen = 0;
var gutBrainImages = [];
var i = 0;

function preload() {
  soundFormats("mp3", "ogg"); // mySound = loadSound("assets/unfinished.mp3");

  mySound = loadSound("assets/test.wav");
  mySound2 = loadSound("assets/waterlife.mp3");
  brain1 = loadImage("../assets/gutBrain/brainScan.png");
  brain2 = loadImage("../assets/gutBrain/brainScan1.png");
  brain3 = loadImage("../assets/gutBrain/brainScanWhole.png");
  gut = loadImage("../assets/gutBrain/gut.png");
  gut1 = loadImage("../assets/gutBrain/gut1.png");
  gut2 = loadImage("../assets/gutBrain/gut2.png");
  gut3 = loadImage("../assets/gutBrain/gut3.png");
  gut4 = loadImage("../assets/gutBrain/gut4.png");
  flowers1 = loadImage("../assets/gutBrain/flowers1.png");
  flowers2 = loadImage("../assets/gutBrain/flowers2.png");
  flowers3 = loadImage("../assets/gutBrain/flowers3.png");
  flowers4 = loadImage("../assets/gutBrain/flowers4.png");
  gutBrainImages.push(gut1, gut2, gut4, brain3, gut1, gut3, brain1, brain2, flowers1, flowers2, flowers3, flowers4);
  gutBrain = new GutBrain(gutBrainImages);
  poem = new Poem();
  depressed = new Depressed();
  mode = "startPoem";
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  depressed.preload(); // depressed.setup();

  background("white");
  textAlign(CENTER, CENTER);
  textFont("Roboto Mono, monospace");

  if (mode === "startPoem") {
    poem.display();
    soundVisual = new SoundVisual(mySound, "darkblue", "orange");
  }
}

function draw() {
  if (mode === "startPoem") {
    if (mySound.isPlaying()) {
      poem.remove();
      push();
      soundVisual.displayWavelength("horizontal", 2.5, 1);
      mySound.rate(1.2);
      pop();
      setTimeout(function () {
        soundVisual.displayFrequency();
      }, 1000);
      setTimeout(function () {
        push();
        textSize(14);
        text("can you allow yourself to feel?", width / 5, height / 2);
        pop();
      }, 1000);
    }

    mySound.onended(function () {
      mode = "introDepression";
      depressed.preload();
      depressed.setup();
      soundVisualDepression = new SoundVisual(mySound, "black", "black");
    });
  } else if (mode === "introDepression") {
    if (!startScreen == 0) {
      depressed.draw();
      soundVisualDepression.displayWavelength("horizontal", 1.5, 6);
    }
  }
}

function mousePressed() {
  if (mode === "startPoem") {
    if (!mySound.isPlaying()) {
      mySound.play();
    }
  } else if (mode === "introDepression") {
    depressed.playMusic();
    startScreen = 1;
  } else if (mode === "gutBrain") {
    i++;
  }
}