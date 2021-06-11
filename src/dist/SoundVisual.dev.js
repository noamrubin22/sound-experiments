"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SoundVisual =
/*#__PURE__*/
function () {
  function SoundVisual(soundFile, frequencyColor, wavelengthColor, circleGraphColor) {
    _classCallCheck(this, SoundVisual);

    this.fft = new p5.FFT();
    this.sound = soundFile;
    this.spectrum = 0;
    this.waveform = 0;
    this.frequencyColor = frequencyColor;
    this.wavelengthColor = wavelengthColor;
    this.circleGraphColor = circleGraphColor;
    this.amplitude = new p5.Amplitude();
    this.volhistory = [];
  }

  _createClass(SoundVisual, [{
    key: "displayFrequency",
    value: function displayFrequency(position) {
      this.spectrum = this.fft.analyze();
      noStroke();
      fill(this.frequencyColor);

      for (var i = 0; i < this.spectrum.length; i++) {
        var x = map(i, 0, this.spectrum.length / 1.9, 0, width);
        var h = -height + map(this.spectrum[i], 0, 255, height, 0);

        if (position === "vertical") {
          rect(height, x, width / 100, h * 2);
        } else {
          rect(x, height, width / this.spectrum.length, h * 2);
        }
      }
    }
  }, {
    key: "displayWavelength",
    value: function displayWavelength(position, amplitude, yPosition) {
      this.waveform = this.fft.waveform();
      noFill();
      stroke(this.wavelengthColor);
      beginShape();

      for (var i = 0; i < this.waveform.length; i++) {
        var x = map(i, 0, this.waveform.length, 0, width);
        var y = map(this.waveform[i] * amplitude, -1 * yPosition, 1, 0, height);

        if (position === "vertical") {
          vertex(y, x);
        } else {
          vertex(x, y);
        }
      }

      endShape();
    }
  }, {
    key: "circleGraph",
    value: function circleGraph() {
      angleMode(DEGREES);
      var vol = this.amplitude.getLevel();
      this.volhistory.push(vol);
      stroke(this.circleGraphColor);
      noFill();
      translate(width / 2, height / 2);
      beginShape();

      for (var i = 0; i < 360; i++) {
        var r = map(this.volhistory[i], 0, 1, 10, 100);
        var x = r * 5 * cos(i);
        var y = r * 5 * sin(i);
        vertex(x, y);
      }

      endShape();

      if (this.volhistory.length > 360) {
        this.volhistory.splice(0, 1);
      }
    } //  credits for code: https://github.com/CodingTrain/website/blob/main/Tutorials/P5JS/p5.js_sound/17.10_radialGraph/sketch.js

  }]);

  return SoundVisual;
}();