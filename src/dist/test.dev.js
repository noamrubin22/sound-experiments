"use strict";

var noiseNode, poem;

function preload() {
  noiseNode = new Noise();
  poem = new Poem();
  noiseNode.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseNode.setup();
}

function draw() {
  background(255); // noiseNode.draw();

  poem.display();
}