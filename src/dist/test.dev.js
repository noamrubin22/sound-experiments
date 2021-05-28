"use strict";

var mySound;
var depressed;
var soundVisual;
var startScreen = 0;

function preload() {
  depressed = new Depressed();
  depressed.preload();
  mySound = loadSound("assets/subnautica.mp3");
  textFont("Helvetica");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  depressed.setup();
  text("are you allowing yourself to feel your feelings?", windowWidth / 2, windowHeight / 2);
  soundVisual = new SoundVisual(mySound, "black", "black");
}

function draw() {
  fill(255);

  if (!startScreen == 0) {
    depressed.draw();
    soundVisual.displayWavelength("horizontal", 1.5);
  }
}

function mousePressed() {
  depressed.playMusic();
  startScreen = 1;
  print("playmusic");
}