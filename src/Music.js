class Music {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "Sound";
    this.text = "What is the power of music?";
    this.interaction =
      "You probably have experienced it yourself. Music has the capacity to make us feel. We don't have a choice. Besides  s";
  }

  preload() {}

  setup() {
    textAlign(CENTER);
  }

  draw() {
    background(255);
    fill(0);
    textSize(60);
    text(this.title, windowWidth / 2, 80);
    textSize(18);
    text(this.text, windowWidth / 2 - 300, windowHeight / 2 - 50, 600);
  }

  mousePressed() {
    this.chapterManager.next();
  }
}
