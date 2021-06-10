"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Breath =
/*#__PURE__*/
function () {
  function Breath() {
    _classCallCheck(this, Breath);
  }

  _createClass(Breath, [{
    key: "preload",
    value: function preload() {
      this.image = loadImage("../assets/Breath/circuit.png");
      this.mySound = loadSound("../assets/songs/sit.mp3");
    }
  }, {
    key: "setup",
    value: function setup() {
      this.soundVisual = new SoundVisual(this.mySound, "darkgreen", "orange");
      this.video = createVideo("../assets/Breath/singingrobot.mp4"); // this.video.size(300, 500);
    }
  }, {
    key: "draw",
    value: function draw() {
      textSize(20);
      background(255);

      if (this.mySound.isPlaying()) {
        this.soundVisual.displayFrequency("vertical");
      }

      image(this.image, 50, 50, 600, 450);
      text("electricity circuit of the Tibetan Singing Robot", windowWidth / 2, 100);
    }
  }, {
    key: "mousePressed",
    value: function mousePressed() {
      this.video.play();

      if (!this.mySound.isPlaying()) {
        this.mySound.loop();
        print("sound should play");
      }
    }
  }]);

  return Breath;
}();