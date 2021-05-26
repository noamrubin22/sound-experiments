"use strict";

var mySound3;
var depressed;
var feel = 0;

function preload() {
  depressed = new Depressed();
  depressed.preload();
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  depressed.setup();
  text("are you allowing yourself to feel?", windowWidth / 2, windowHeight / 2);
}

function draw() {
  fill(255);

  if (feel == 0) {
    print("do nothing");
  } else {
    depressed.draw();
  }
}

function mousePressed() {
  depressed.playMusic();
  feel = 1;
  print("playmusic");
}