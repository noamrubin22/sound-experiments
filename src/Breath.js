class Breath {
  constructor() {
    this.title = "The Breath";
    this.text = [
      "Studies show that individuals suffering from depression, anxiety, and chronic pain are benefiting from regular mindfulness meditation training. This shows itself in extreme improvement in symptom severity (1).",
      "Besides, yoga-based interventions are found to be effective in treating depression ranging from mild depressive symptoms to major depressive disorder (2). Those practices seem to stimulate the vagus nerve directly, by increasing the vagal tone (3,4). This leads to an improvement of mood, cognitive functions, stress coping, autonomic regulation and bowel function (4,5).",
      "A recent study showed that even patients who did not respond to antidepressants showed a significant reduction of depressive and anxiety symptoms compared to the control group after practicing an ancient breathing technique, Sudarshan Kriya Yoga, for 8 weeks (6).",
    ];
    this.chapterManager = chapterManager;
    this.index = 0;
  }

  preload() {
    this.image = loadImage("../assets/Breath/circuit.png");
    this.mySound = loadSound("../assets/songs/sit.mp3");
  }

  setup() {
    this.soundVisual = new SoundVisual(
      this.mySound,
      "darkgreen",
      "orange",
      "gray"
    );
    this.y = windowHeight / 3.5;
    this.textWidth = 500;
    // this.video = createVideo("../assets/Breath/singingrobot.mp4");
    // this.video.size(300, 500);
  }

  draw() {
    textSize(60);
    background(255);
    fill("black");
    // noStroke();
    text(this.title, windowWidth / 2, 80);
    push();
    textSize(18);
    this.text.map((sentence, index) => {
      text(
        sentence,
        (windowWidth - this.textWidth) / 2,
        this.y + index * 800,
        this.textWidth
      );
    });

    pop();
    if (this.mySound.isPlaying()) {
      this.soundVisual.circleGraph();
    }

    // text(
    //   "electricity circuit of the Tibetan Singing Robot",
    //   windowWidth / 2,
    //   100
    // );
  }
  mouseWheel(event) {
    if (event.deltaY > 0) {
      this.y -= 8;
    } else {
      this.y += 8;
    }
    if (!this.mySound.isPlaying()) {
      this.mySound.loop();
    }
  }

  mousePressed() {
    if (!this.mySound.isPlaying()) {
      this.mySound.loop();
    }
    // } else {
    //   this.chapterManager.next();
    //   this.mySound.fade(0, 1.5);
  }
}
