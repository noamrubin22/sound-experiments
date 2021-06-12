class References {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "References";
    this.refGutBrain = ["blashflajlfjaa", "kajhflkahskfhaskfh", "ashfkajsf"];
    this.refBreath = ["blashflajlfjaa", "kajhflkahskfhaskfh", "ashfkajsf"];
    this.refPsychedelics = [
      "blashflajlfjaa",
      "kajhflkahskfhaskfh",
      "ashfkajsf",
    ];
    this.refMusic = ["blashflajlfjaa", "kajhflkahskfhaskfh", "ashfkajsf"];
    this.music = ["nthng -unfinished ", "kajhflkahskfhaskfh", "ashfkajsf"];
  }

  preload() {}

  setup() {}

  draw() {
    background(13);
    fill(230);
    textSize(60);
    textAlign(CENTER, CENTER);
    text(this.title, windowWidth / 2, 80);
    textSize(18);
    text(this.refGutBrain, windowWidth / 2, 300);
  }

  mousePressed() {
    // this.chapterManager.next();
    print("should stop");
  }
}
