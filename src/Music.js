class Music {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "Sound";
    this.text = [
      "music, the language of no words",
      "It is a universal human experience to be able to control our emotions by choosing a song, and at the same time not having a choice of what to feel when a certain type of song is heard.",
      "Since music seems to play a central role in experiencing mental health benefits from psychedelic experiences (1), it is not surprising that music by itself can be used as a therapy. In fact, music can be used to induce an altered state of consciousness.",
      "Studies show that during music therapy, the significance of a monotonous repetition of sounds is crucial to induce an altered state of consciousness and the duration of sounds to be decisive for the effects.",
      "The main effect of the sounds is the induction of a trance that reduces the noise of thought and more or less removes the normal and pathological frame of beliefs and references. By changing the focus of attention, the contents of the memory can be emptied, which is allowing new information to enter(2).",
      "I would have to do more research to understand the underlying mechanisms of music, and I am wondering if they are similar to the states I discussed before.",
      "What I do know, is that it is influencing me",
    ];
    this.index = 0;
  }

  preload() {
    this.mySound = loadSound("assets/songs/waterlife.mp3");
    this.soundVisual = new SoundVisual(this.mySound, "red", "green");
  }

  setup() {
    textAlign(CENTER);
    this.textWidth = 600;
    this.x = (windowWidth - this.textWidth) / 2;
    this.y = windowHeight / 3;
    this.fft = new p5.FFT();
    this.textEnd = false;
  }

  draw() {
    background(255);
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }
    this.fft.analyze();
    this.soundVisual.displayWavelength("vertical", 2, 3);
    fill(0);
    textSize(60);
    text(this.title, windowWidth / 2, 80);
    textSize(20);
    fill(0);
    this.text.forEach((sentence, index) => {
      text(sentence, this.x + index * windowWidth, this.y, this.textWidth);
    });
  }

  mousePressed() {
    this.x -= windowWidth;
    this.index++;
    if (this.index == this.text.length + 1) {
      this.chapterManager.next();
    }
  }
}
