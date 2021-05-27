"use strict";

var mySound3;
var depressed;
var soundVisual;
var startScreen = 0;

function preload() {
  depressed = new Depressed();
  depressed.preload();
  mySound3 = loadSound("assets/subnautica.mp3");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  depressed.setup();
  text("are you allowing yourself to feel?", windowWidth / 2, windowHeight / 2);
  soundVisual = new SoundVisual(mySound3, "black", "black");
}

function draw() {
  fill(255);

  if (startScreen == 0) {
    print("do nothing");
  } else {
    depressed.draw();
    soundVisual.displayWavelength("horizontal", 1.5);
  }
}

function mousePressed() {
  depressed.playMusic();
  startScreen = 1;
  print("playmusic");
}