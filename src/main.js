let chapterManager = new ChapterManager();
chapterManager.addChapter(new Introduction(chapterManager));
chapterManager.addChapter(new PainPoem(chapterManager));
chapterManager.addChapter(new Question(chapterManager));
chapterManager.addChapter(new Depressed(chapterManager));
chapterManager.addChapter(new SciencePoem(chapterManager));
chapterManager.addChapter(new GutBrain(chapterManager));
chapterManager.addChapter(new Breath(chapterManager));
chapterManager.addChapter(new Breath2(chapterManager));
chapterManager.addChapter(new Psychedelics(chapterManager));
chapterManager.addChapter(new Music(chapterManager));
chapterManager.addChapter(new Conclusion(chapterManager));
chapterManager.addChapter(new References(chapterManager));
let depressed = new Depressed(chapterManager);
let sciencePoem = new SciencePoem(chapterManager);
let gutBrain = new GutBrain(chapterManager);
let breath = new Breath(chapterManager);
let breath2 = new Breath2(chapterManager);

let constant = gutBrain;

function preload() {
  constant.preload();
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  background("white");
  textAlign(CENTER, CENTER);
  textFont("Roboto Mono, monospace");
  // chapterManager.start();
  constant.setup();
}

function draw() {
  constant.draw();
}

function mousePressed() {
  constant.mousePressed();
}

function mouseWheel(event) {
  if (constant.currentChapter.mouseWheel) {
    constant.currentChapter.mouseWheel(event);
  }
}
