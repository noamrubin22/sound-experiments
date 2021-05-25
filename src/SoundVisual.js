class SoundVisual {
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
