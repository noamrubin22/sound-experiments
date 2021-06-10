"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sound =
/*#__PURE__*/
function () {
  function Sound() {
    _classCallCheck(this, Sound);

    this.isScrolling = 0;
    this.sound = 0;
  }

  _createClass(Sound, [{
    key: "preload",
    value: function preload() {
      soundFormats("mp3", "ogg");
      this.sound = loadSound("assets/songs/cyanure.mp3");
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {
      if (!this.sound.isPlaying()) {
        console.log("sound should play");
        this.sound.play();
      }

      clearTimeout(this.isScrolling);
      this.isScrolling = setTimeout(function () {
        //   this.sound.fade(2, 0.5);
        print("music should pause");
        print(this.sound);
        this.sound.pause();
      }, 1000);
      print(event);
    }
  }]);

  return Sound;
}();