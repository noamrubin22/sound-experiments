class Breath2 {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "Tibetan Singing Robot";
    this.text =
      "This singing bowl can play itself. The timer only needs to be set. Created in Arduino (C++).";
    this.footer = "in collaboration with Maan Albalkhi";
    this.hasPlayed = false;
  }

  preload() {
    this.image = loadImage("../assets/Breath/circuit.png");
  }

  setup() {
    this.video = createVideo("../assets/Breath/singingrobot.mp4");
    this.video.size(400, 600);
    background(255);
    textSize(60);
    fill("black");
    text(this.title, windowWidth / 2, 0);
    textSize(20);
    image(this.image, windowWidth / 5, windowHeight / 2, 700, 400);
    text(this.text, 800, 200, 400);
    text(this.footer, windowWidth - 500, 10);
  }

  draw() {}

  mousePressed() {
    if (!this.hasPlayed) {
      this.video.play();
      this.hasPlayed = true;
    } else {
      this.chapterManager.next();
      this.video.remove();
    }
  }
}
