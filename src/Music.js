class Music {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "Music";
    this.text =
      "Music is something that is part of human nature. It has the power to evoke certain realizations, emotions, it has a comforting level and is a key part of every ceremony of plant medicine. There is something magical about music. When listening to music, there is no choice in whether you want to feel or not. You just feel.  And it evokes us to move. I believe music can play/ is playing a very imporant role in pursueing wellbeing, everywhere around the world, and i am really curious about the mechanisms behind it.";
    this.interaction =
      "You probably have experienced it yourself. Music has the capacity to make us feel. We don't have a choice. Besides  s";
  }

  preload() {}

  setup() {}

  draw() {
    background(209);
    fill(255);
    textSize(60);
    text(this.title, windowWidth / 2, 80);
    textSize(18);
    text(this.text, windowWidth / 2, windowHeight / 2, windowWidth / 2);
  }

  mousePressed() {
    this.chapterManager.next();
  }
}
