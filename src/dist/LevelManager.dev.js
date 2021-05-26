"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LevelManager =
/*#__PURE__*/
function () {
  function LevelManager(levels) {
    _classCallCheck(this, LevelManager);

    this.levels = levels;
    this.currentLevel = null;
  }

  _createClass(LevelManager, [{
    key: "next",
    value: function next() {
      if (this.currentLevel) {
        this.currentLevel.destroy();
        this.currentLevel = null;
      }

      if (this.length > 0) {
        this.currentLevel = this.levels.shift();
        this.currentLevel.start(0, 0, 1280, 720);
      } else {}
    }
  }, {
    key: "start",
    value: function start() {
      this.next();
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this.currentLevel) {
        if (this.currentLevel.isDestroyed()) {
          this.next();
        } else {
          this.currentLevel.draw();
        }
      }
    }
  }]);

  return LevelManager;
}();