// let poem = [
//   "pain pain pain escaping the pain by spending more money by eating more food by taking more drugs to forget about the pain",
//   "i have pain",
//   "i want to feel better so i misuse my power, dominate, manipulate, causing others more pain",
//   "i am in pain",
//   "why would i be nice to you or the nature, in my mind i am not even nice to myself",
//   "pain",
//   "i am constantly looking for short-term solutions but nothing outside me is able to get rid of the pain",
//   "we are in pain",
//   "emotions and feelings, overwhelming and scary i am rather distracted so i don't feel my pain",
//   "oh, pain",
//   "suppressing emotions, hurting exploding how can i act different than causing more pain",
// ];
let poem;
let soundVisual;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/unfinished.mp3");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  textSize(24);
  textAlign(CENTER, CENTER);
  background("white");
  poem = new Poem();
  soundVisual = new SongVisual();
}

function draw() {
  poem.display();
  if (mySound.isPlaying()) {
    poem.remove();
    push();
    // soundVisual.displayFrequency();
    soundVisual.displayWavelength();
    pop();
    setTimeout(function () {
      soundVisual.displayFrequency();
    }, 1000);
  }
}

function mousePressed() {
  if (!mySound.isPlaying()) {
    mySound.play();
  }
}

class SongVisual {
  constructor() {
    this.fft = new p5.FFT();
    this.sound = mySound;
    this.spectrum = 0;
    this.waveform = 0;
  }

  displayFrequency() {
    this.spectrum = this.fft.analyze();
    noStroke();
    fill("blue");
    for (let i = 0; i < this.spectrum.length; i++) {
      let x = map(i, 0, this.spectrum.length / 2, 0, width);
      let h = -height + map(this.spectrum[i], 0, 255, height, 0);
      rect(x, height, width / this.spectrum.length, h * 2);
    }
  }

  displayWavelength() {
    this.waveform = this.fft.waveform();
    noFill();
    stroke("orange");
    beginShape();
    // stroke(20);
    for (let i = 0; i < this.waveform.length; i++) {
      let x = map(i, 0, this.waveform.length, 0, width);
      let y = map(this.waveform[i] * 2, -1, 1, 0, height);
      vertex(x, y);
    }
    endShape();
  }
}

class Poem {
  constructor() {
    this.poem = [
      "pain pain pain escaping the pain by spending more money by eating more food by taking more drugs to forget about the pain",
      "i have pain",
      "i want to feel better so i misuse my power, dominate, manipulate, causing others more pain",
      "i am in pain",
      "why would i be nice to you or the nature, in my mind i am not even nice to myself",
      "pain",
      "i am constantly looking for short-term solutions but nothing outside me can get get rid of the pain",
      "stupid pain",
      "emotions and feelings, overwhelming and scary i am rather distracted so i don't feel my pain",
      "oh, pain",
      "suppressing emotions, hurting exploding how can i act different than causing more pain",
    ];
    this.x = width / 2;
    this.y = 40;
  }

  display() {
    fill("black");
    this.poem.map((sentence, index) => {
      text(sentence, this.x, this.y + 70 * index);
    });
  }

  remove() {
    this.y = this.y + 0.5;
  }
}
