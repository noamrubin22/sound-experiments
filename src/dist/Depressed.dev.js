"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Depressed =
/*#__PURE__*/
function () {
  function Depressed() {
    _classCallCheck(this, Depressed);

    this.text = ["The world has been facing a huge mental health crisis before the global pandemic struck us in 2020(1). The need for new solutions has only increased as the impact of COVID-19 leaves a pandemic of mental health in its wake(2). The future health of individuals and societies depends upon improving the efficacy of mental health treatment and ensuring broad access for those in need", "1 in 4 people will be affected by mental or neurological disorders at some point in their lives (4)", "1 in 5 adults experience mental illness each year (5)", "66% of patients remain symptomatic (6)", "33% of patients are treatment-resistant (7)", "30% of patients do not respond to any treatment at all", "the efficacy of treatment has not improved for 70 years", "the growing crisis will cost the world €16 trillion by 2030", "COVID-19 has disrupted or halted mental health services in 93% of countries worldwide", "mental health disorders are among the leading causes of ill-health and disability worldwide", "one person dies by suiced every 40 seconds", "people with mood disorders are at higher risk of developing long term medical conditions and die prematurely", "in recent years, the amount of people dieying from opiod overdose has increased dramatically", "the covid lockdowns have led to increased social isolation, increased anxiety, depression and PTSD"];
    this.x = windowWidth - windowWidth / 4;
    this.y = windowHeight - windowWidth / 7;
    this.file = "assets/subnautica.mp3";
    this.mySound = null;
    this.fft = null;
    this.peakDetect = null;
  }

  _createClass(Depressed, [{
    key: "preload",
    value: function preload() {
      print("depressed preload");
      this.mySound = loadSound(this.file);
    }
  }, {
    key: "setup",
    value: function setup() {
      print("depressed setup");
      background(0);
      noStroke();
      fill(255);
      textSize(15);
      textAlign(CENTER);
      this.fft = new p5.FFT();
      this.peakDetect = new p5.PeakDetect();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;

      background(255);
      fill(0);
      this.fft.analyze();
      this.peakDetect.update(this.fft);
      this.text.map(function (sentence, index) {
        text(sentence, (index + 1) * windowWidth - _this.x, _this.y / 2, windowWidth / 2, windowHeight);
      });

      if (this.peakDetect.isDetected) {
        this.x = this.x + windowWidth;
      }
    }
  }, {
    key: "playMusic",
    value: function playMusic() {
      if (!this.mySound.isPlaying()) {
        this.mySound.play();
      }
    }
  }]);

  return Depressed;
}();