let chapterManager = new ChapterManager();
chapterManager.addChapter(new Introduction(chapterManager));
chapterManager.addChapter(new PainPoem(chapterManager));
chapterManager.addChapter(new Question(chapterManager));
chapterManager.addChapter(new Depressed(chapterManager));
chapterManager.addChapter(new SciencePoem(chapterManager));
chapterManager.addChapter(new GutBrain(chapterManager));
chapterManager.addChapter(new Breath(chapterManager));
let depressed = new Depressed(chapterManager);
let sciencePoem = new SciencePoem(chapterManager);
let gutBrain = new GutBrain(chapterManager);

function preload() {
  chapterManager.preload();
  // depressed.preload();
  // sciencePoem.preload();
  // gutBrain.preload();
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  background("white");
  textAlign(CENTER, CENTER);
  textFont("Roboto Mono, monospace");
  chapterManager.start();
  // depressed.setup();
  // sciencePoem.setup();
  // gutBrain.setup();
}

function draw() {
  chapterManager.draw();
  // depressed.draw();
  // sciencePoem.draw();
  // gutBrain.draw();
}

function mousePressed() {
  chapterManager.mousePressed();
  // depressed.mousePressed();
  // sciencePoem.mousePressed();
  // gutBrain.mousePressed();
}
