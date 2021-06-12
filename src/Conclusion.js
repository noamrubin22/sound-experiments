class Conclusion {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "Conclusion";
  }

  preload() {}

  setup() {
    textSize(60);
  }

  draw() {
    background(20);
    fill(255);
    text(this.title, windowWidth / 2, 80);
  }

  mousePressed() {
    this.chapterManager.next();
  }
}
