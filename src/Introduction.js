class Introduction {
  constructor(chapterManager) {
    this.text = [
      "a parallel pandemic",
      "with this project I would like to shed some light on a problem that requires urgent attention in our society: the global mental health crisis. the research that I have done shows ways that in my opinion have potential in improving mental health around the globe. all references can be found at the end.",
      "most of the story is guided by music. please turn on your sound and enjoy the music for the full experience.",
      "by Noam Rubin",
    ];
    this.chapterManager = chapterManager;
  }

  preload() {}

  setup() {
    background(0);
    fill("gray");
    textSize(18);
    this.x = windowWidth / 5.5;
    this.y = 120;
    this.text.forEach((sentence, index) => {
      text(sentence, this.x, this.y + 120 * index, windowWidth / 1.5);
    });
  }

  draw() {}

  mousePressed() {
    this.chapterManager.next();
  }
}
