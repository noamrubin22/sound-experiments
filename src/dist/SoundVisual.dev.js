"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SoundVisual =
/*#__PURE__*/
function () {
  function SoundVisual() {
    _classCallCheck(this, SoundVisual);

    this.fft = new p5.FFT();
    this.sound = mySound;
    this.spectrum = 0;
    this.waveform = 0;
  }

  _createClass(SoundVisual, [{
    key: "displayFrequency",
    value: function displayFrequency() {
      this.spectrum = this.fft.analyze();
      noStroke();
      fill("blue");

      for (var i = 0; i < this.spectrum.length; i++) {
        var x = map(i, 0, this.spectrum.length / 2, 0, width);
        var h = -height + map(this.spectrum[i], 0, 255, height, 0);
        rect(x, height, width / this.spectrum.length, h * 2);
      }
    }
  }, {
    key: "displayWavelength",
    value: function displayWavelength() {
      this.waveform = this.fft.waveform();
      noFill();
      stroke("orange");
      beginShape();

      for (var i = 0; i < this.waveform.length; i++) {
        var x = map(i, 0, this.waveform.length, 0, width);
        var y = map(this.waveform[i] * 2, -1, 1, 0, height);
        vertex(x, y);
      }

      endShape();
    }
  }]);

  return SoundVisual;
}();