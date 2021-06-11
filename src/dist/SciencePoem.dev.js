"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SciencePoem =
/*#__PURE__*/
function () {
  function SciencePoem(chapterManager) {
    _classCallCheck(this, SciencePoem);

    this.text = ["to agree that we don't know", "isn't that the beauty of science?", "i am trying to understand", "in the hope of making more sense", "of everything that is happening", "around me", "inside me", "the more i know the more i question", "and i agree to never truly know", "", "but i am just curious"];
    this.chapterManager = chapterManager;
  }

  _createClass(SciencePoem, [{
    key: "preload",
    value: function preload() {
      this.mySound = loadSound("assets/songs/softsea.mp3");
      this.soundVisual = new SoundVisual(this.mySound, "darkgreen", "purple");
    }
  }, {
    key: "setup",
    value: function setup() {
      fill("gray");
      textSize(20);
      textAlign(CENTER, CENTER);
      this.y = 300;
      this.x = windowWidth / 2;
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;

      if (!this.mySound.isPlaying()) {
        this.mySound.play();
      }

      background(255);
      this.text.map(function (sentence, index) {
        text(sentence, _this.x, _this.y + 100 * index);
      });
      this.y += random(-1.8, 0.1);
    }
  }, {
    key: "mousePressed",
    value: function mousePressed() {
      this.mySound.fade(0, 1.5);
      this.chapterManager.next();
    }
  }]);

  return SciencePoem;
}();