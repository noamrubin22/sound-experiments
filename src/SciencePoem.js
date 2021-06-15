class SciencePoem {
  constructor(chapterManager) {
    this.poem = [
      "to agree that we don't know",
      "isn't that the beauty of science?",
      "i am trying to understand",
      "in the hope of making more sense",
      "of everything that is happening",
      "around me",
      "inside me",
      "the more i know the more i question",
      "and i agree to never truly know",
      "",
      "but i am just curious",
    ];
    this.clickToContinue = ["", "", "", "", "click to continue"];
    this.chapterManager = chapterManager;
  }

  preload() {
    this.mySound = loadSound("assets/songs/ecrusader.mp3");
    this.soundVisual = new SoundVisual(this.mySound, "darkgreen", "purple");
  }

  setup() {
    fill("black");
    textSize(20);
    textAlign(CENTER, CENTER);
    this.text = [...this.poem, ...this.clickToContinue];
    this.y = 300;
    this.x = windowWidth / 2;
  }

  draw() {
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }
    background(255);
    this.text.map((sentence, index) => {
      text(sentence, this.x, this.y + 100 * index);
    });
    this.y += random(-1.8, 0.1);
  }

  mousePressed() {
    this.mySound.fade(0, 1.5);
    this.chapterManager.next();
  }
}
