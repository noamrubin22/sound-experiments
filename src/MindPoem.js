class MindPoem {
  constructor(chapterManager) {
    this.poem = [
      "and i realize that i cannot always believe my thoughts,",
      "but if i am not the one that is controlling my mind, then where is it that “i” am?",
    ];
    this.chapterManager = chapterManager;
  }

  preload() {
    this.mySound = loadSound("assets/songs/bowl.mp3");
  }

  setup() {
    fill("gray");
    textSize(19);
    textAlign(CENTER);
    this.y = 300;
    this.x = windowWidth / 2;
  }

  draw() {
    background(0);
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }
    this.poem.forEach((sentence, index) => {
      text(sentence, windowWidth / 2, windowHeight / 2 + 50 * index);
    });
  }

  mousePressed() {
    this.chapterManager.next();
    this.mySound.fade(0, 1);
  }
}
