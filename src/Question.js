class Question {
  constructor(chapterManager) {
    this.text = "are you allowing yourself to feel?";
    this.chapterManager = chapterManager;
  }

  preload() {}
  setup() {
    background(0);
    fill("gray");
    textSize(22);
    text(this.text, width / 2, height / 2);
  }

  draw() {}

  mousePressed() {
    this.chapterManager.next();
  }
}
