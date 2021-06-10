class PainPoem {
  constructor(chapterManager) {
    this.text = [
      "pain",
      "escaping the pain by spending more money, by eating more food, by taking more drugs",
      "to forget about the pain",
      "i want to feel better so i misuse my power, dominate, manipulate,",
      "causing others more pain",
      "why would i be nice to you or the nature?",
      " in my mind i am not even nice to myself",
      "i am constantly looking for short-term solutions but nothing outside me",
      "can get rid of the pain",
      "emotions and feelings, overwhelming and scary i am rather distracted",
      "so i don't feel my pain",
      "suppressing emotions, hurting, exploding, how can i act different than",
      "causing more pain?",
    ];
    this.chapterManager = chapterManager;
  }

  preload() {
    // this.mySound = loadSound("assets/songs/unfinished.mp3");
    this.mySound = loadSound("assets/songs/test.wav");
    print(this.mySound);
    this.soundVisual = new SoundVisual(this.mySound, "darkblue", "orange");
  }

  setup() {
    fill("darkblue");
    textSize(20);
    textAlign(CENTER, CENTER);
    background(255);
    this.y = 40;
    this.x = windowWidth / 2;

    this.mySound.onended(() => {
      this.chapterManager.next();
    });
  }

  draw() {
    if (!this.mySound.isPlaying()) {
      background(255);
    }
    this.text.map((sentence, index) => {
      text(sentence, this.x, this.y + 40 * index);
    });
    if (this.mySound.isPlaying()) {
      this._remove();
      this.soundVisual.displayWavelength("horizontal", 2.5, 1);
      this.soundVisual.displayFrequency("horizontal");
    }
  }

  _remove() {
    this.y = this.y + 0.5;
  }

  mousePressed() {
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }
  }
}
