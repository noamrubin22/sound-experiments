class SoundVisual {
  constructor(soundFile, frequencyColor, wavelengthColor) {
    this.fft = new p5.FFT();
    this.sound = soundFile;
    this.spectrum = 0;
    this.waveform = 0;
    this.colorFrequency = frequencyColor;
    this.wavelengthColor = wavelengthColor;
  }

  displayFrequency() {
    this.spectrum = this.fft.analyze();
    noStroke();
    fill(this.colorFrequency);
    for (let i = 0; i < this.spectrum.length; i++) {
      let x = map(i, 0, this.spectrum.length / 2, 0, width);
      let h = -height + map(this.spectrum[i], 0, 255, height, 0);
      rect(x, height, width / this.spectrum.length, h * 2);
    }
  }

  displayWavelength(position, amplitude) {
    this.waveform = this.fft.waveform();
    noFill();
    stroke(this.wavelengthColor);
    beginShape();
    for (let i = 0; i < this.waveform.length; i++) {
      let x = map(i, 0, this.waveform.length, 0, width);
      let y = map(this.waveform[i] * amplitude, -6, 1, 0, height);
      if (position === "vertical") {
        vertex(y, x);
      } else {
        vertex(x, y);
      }
    }
    endShape();
  }
}
