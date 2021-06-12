class Psychedelics {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "Psychedelics";
  }

  preload() {}

  setup() {
    textSize(60);
  }

  draw() {
    background(255);
    fill(0);
    text(this.title, windowWidth / 2, 80);
  }

  mousePressed() {
    this.chapterManager.next();
  }
}
