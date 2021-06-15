let chapterManager = new ChapterManager();
chapterManager.addChapter(new Introduction(chapterManager));
chapterManager.addChapter(new PainPoem(chapterManager));
chapterManager.addChapter(new Question(chapterManager));
chapterManager.addChapter(new Depressed(chapterManager));
chapterManager.addChapter(new SciencePoem(chapterManager));
chapterManager.addChapter(new GutBrain(chapterManager));
chapterManager.addChapter(new Breath(chapterManager));
chapterManager.addChapter(new Psychedelics(chapterManager));
chapterManager.addChapter(new Music(chapterManager));
chapterManager.addChapter(new Conclusion(chapterManager));
chapterManager.addChapter(new MindPoem(chapterManager));
chapterManager.addChapter(new References(chapterManager));

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

function mouseWheel(event) {
  if (chapterManager && event) {
    if (chapterManager.mouseWheel) {
      chapterManager.mouseWheel(event);
    }
  }
}
