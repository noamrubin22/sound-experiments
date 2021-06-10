class Breath {
  constructor() {}

  preload() {
    this.image = loadImage("../assets/Breath/circuit.png");
    this.mySound = loadSound("../assets/songs/sit.mp3");
  }

  setup() {
    this.soundVisual = new SoundVisual(this.mySound, "darkgreen", "orange");
    this.video = createVideo("../assets/Breath/singingrobot.mp4");
    // this.video.size(300, 500);
  }

  draw() {
    textSize(20);
    background(255);
    if (this.mySound.isPlaying()) {
      this.soundVisual.displayFrequency("vertical");
    }
    image(this.image, 50, 50, 600, 450);
    text(
      "electricity circuit of the Tibetan Singing Robot",
      windowWidth / 2,
      100
    );
  }

  mousePressed() {
    this.video.play();
    if (!this.mySound.isPlaying()) {
      this.mySound.loop();
      print("sound should play");
    }
  }
}
