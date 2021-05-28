"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Depressed =
/*#__PURE__*/
function () {
  function Depressed() {
    _classCallCheck(this, Depressed);

    this.startText = "the world was already facing a mental health crisis before the global pandemic hit us in 2019.¹ the impact of COVID-19 only increased our need for new solutions facing a pandemic of mental health.² the future health of individuals and societies depends upon improving the efficacy of mental health treatment and making sure access will reach those in need.";
    this.text = ["", "mental health disorders are among the leading causes of long term health conditions and disability worldwide¹⁰", "mental health disorders are among the leading causes of long term health conditions and disability worldwide¹⁰", "mental health disorders are among the leading causes of long term health conditions and disability worldwide¹⁰", "each year, 1 in 5 adults is experiencing mental illness⁵", "each year, 1 in 5 adults is experiencing mental illness⁵", "the lockdowns have led to increased social isolation, anxiety, depression and PTSD", "the lockdowns have led to increased social isolation, anxiety, depression and PTSD", "in 93% of countries worldwide, COVID-19 has disrupted or stopped mental health services.", "in 93% of countries worldwide, COVID-19 has disrupted or stopped mental health services.", "in 93% of countries worldwide, COVID-19 has disrupted or stopped mental health services.", "the growing mental health crisis is estimated to cost the world €16 trillion by 2030", "the growing mental health crisis is estimated to cost the world €16 trillion by 2030", "the growing mental health crisis is estimated to cost the world €16 trillion by 2030", "people with mood disorders are at higher risk of developing long term medical conditions and die prematurely", "people with mood disorders are at higher risk of developing long term medical conditions and die prematurely", "people with mood disorders are at higher risk of developing long term medical conditions and die prematurely", "in recent years, the amount of people dieying from opiod overdose has increased dramatically", "in recent years, the amount of people dieying from opiod overdose has increased dramatically", "in recent years, the amount of people dieying from opiod overdose has increased dramatically", "every 40 seconds, a person dies by suicied¹¹", "every 40 seconds, a person dies by suicied¹¹", "the efficacy of mental health treatment has not been improved for the past 70 years", "the efficacy of mental health treatment has not been improved for the past 70 years", "66% of patients remain having symptoms after treatment⁶", "66% of patients remain having symptoms after treatment⁶", "30% of patients do not respond to any treatment at all⁷", "30% of patients do not respond to any treatment at all⁷", "we need to think in different ways to find a solution", "we need to think in different ways to find a solution", ""];
    this.x = windowWidth - windowWidth / 4;
    this.y = windowHeight - windowWidth / 7;
    this.xStartText = windowWidth * 10;
    this.yStartText = windowHeight / 2;
    this.file = "assets/subnautica.mp3";
    this.mySound = null;
    this.fft = null;
    this.peakDetect = null;
    this.mode = 0;
    this.button = null;
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
      this.peakDetect.update(this.fft); // this.mySound.rate(5);

      if (this.mode === 0) {
        textSize(111);
        this.xStartText = this.xStartText - 10;
        text(this.startText, this.xStartText, this.yStartText);
      } else {
        textSize(55);
        this.text.map(function (sentence, index) {
          text(sentence, (index + 1) * windowWidth - _this.x, _this.y / 2.5, windowWidth / 2);
        });
      }

      if (this.peakDetect.isDetected) {
        this.mode = 1;
        this.xStartText = this.xStartText + windowWidth;
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