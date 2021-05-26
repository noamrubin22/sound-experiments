class Depressed {
  constructor() {
    this.text = [
      "one on the 4 people is depressed",
      "mental health is a problem",
      "the mental health pandemic is bigger than ever",
      "a solution is necesarry",
      "mental health hasn't been improved in 70 years",
      "people need it more than ever",
    ];
    this.x = 40;
    this.y = 100;
    this.file = "assets/subnautica.mp3";
  }

  preload() {
    mySound = loadSound(this.file);
  }

  display() {
    if (!mySound.isPlaying) {
      mySound.play();
    }
    let peaks = mySound.getPeaks();
    this.text.map((sentence, index) => {
      text(sentence, this.x + peak, this.y);
    });
  }
}
