"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Depressed =
/*#__PURE__*/
function () {
  function Depressed() {
    _classCallCheck(this, Depressed);

    this.text = ["one on the 4 people is depressed", "mental health is a problem", "the mental health pandemic is bigger than ever", "a solution is necesarry", "mental health hasn't been improved in 70 years", "people need it more than ever"];
    this.x = 40;
    this.y = 100;
    this.file = "assets/subnautica.mp3";
  }

  _createClass(Depressed, [{
    key: "preload",
    value: function preload() {
      mySound = loadSound(this.file);
    }
  }, {
    key: "display",
    value: function display() {
      var _this = this;

      if (!mySound.isPlaying) {
        mySound.play();
      }

      var peaks = mySound.getPeaks();
      this.text.map(function (sentence, index) {
        text(sentence, _this.x + peak, _this.y);
      });
    }
  }]);

  return Depressed;
}();