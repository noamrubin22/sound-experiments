"use strict";

var chapterManager = new ChapterManager();
chapterManager.addChapter(new Poem(chapterManager));
chapterManager.addChapter(new Depressed(chapterManager));
chapterManager.addChapter(new GutBrain(chapterManager));
chapterManager.addChapter(new Breath(chapterManager));

function preload() {
  chapterManager.preload();
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  background("white");
  textAlign(CENTER, CENTER);
  textFont("Roboto Mono, monospace");
  chapterManager.start();
}

function draw() {
  chapterManager.draw();
}

function mousePressed() {
  chapterManager.mousePressed();
}