class Depressed {
  constructor(chapterManager) {
    this.startText =
      "the world was already suffering from a mental health crisis before the global pandemic hit us in 2019(1). we are facing a pandemic of mental health, and the impact of COVID-19 has only increased our need for new solutions(2). mental health treatment needs to be improved and reach those in need, for the future health of individuals and societies to be secured.";
    this.text = [
      "m every 40 seconds, a person dies from suicied(3)",
      "the amount of people dieying from opiod overdose has increased dramatically in the past years(4)",
      "each year, 1 in 5 is experiencing mental health illness(5)",
      "the lockdowns have increased the amount of people suffering from anxiety, depression and PTSD, due to social isolation(2)",
      "in 93% of the countries, COVID-19 has disrupted or stopped mental health services.(6)",
      "it is estimated that by 2030 €16 trillion will be needed to cover the costs of the growing mental health crisis(7)",
      "mental health disorders are influencing our physical state.. they are among the leading causes of disability and long term health conditions causing people that suffer from them to sometimes die prematurely(8)",
      "the efficacy of mental health treatment did not improve for the past 70 years(9)",
      "30% of people that is suffering from depression is not responding to any treatment at all(10)",
      "66% may respond but are suffering from symptoms that keep coming back(11)",
      "the physical health was our main focus for such a long time..",
      "did we forgot about the importance of a healthy mental and emotional state?",
      "we need to evolve on all fonts to reach an healthy society",
      "new ways of thinking are needed in order to find a solution",
      " ",
    ];
    this.textEnd = false;
    this.chapterManager = chapterManager;
    this.counter = 0;
  }

  preload() {
    this.mySound = loadSound("assets/songs/subnautica.mp3");
  }

  setup() {
    this.x = windowWidth - windowWidth / 4;
    this.y = windowHeight - windowWidth / 7;
    this.xStartText = windowWidth * 10;
    this.yStartText = windowHeight / 3;
    this.mode = 0;
    this.soundVisual = new SoundVisual(this.mySound, "black", "black");
    this.fft = new p5.FFT();
    this.peakDetect = new p5.PeakDetect(700, 1500, 0.6);

    this.allWords = [];
    this.text.map((sentence) => {
      this.words = sentence.split(" ");
      this.words.push("");
      this.allWords.push(...this.words);
    });

    this.mySound.onended(() => {
      this.chapterManager.next();
    });
  }

  draw() {
    background(255);
    fill(0);
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }
    this.fft.analyze();
    this.peakDetect.update(this.fft);
    this.soundVisual.displayWavelength("horizontal", 1.5, 6);
    if (this.mode === 0) {
      textSize(111);
      fill(0);
      this.xStartText = this.xStartText - 9;
      text(this.startText, this.xStartText, this.yStartText);
    } else {
      textSize(50);
      fill("black");
      this.allWords.map((word, index) => {
        text(
          word,
          (index + 1) * windowWidth - this.x,
          this.y / 2.5,
          windowWidth / 2
        );
        this.counter++;
      });
    }
    if (this.peakDetect.isDetected) {
      this.mode = 1;
      this.xStartText = this.xStartText + windowWidth;
      this.x = this.x + windowWidth;
    }
  }
  mousePressed() {
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }
    if (this.counter >= 5000) {
      this.chapterManager.next();
      this.mySound.fade(0, 1);
    }
  }
}
