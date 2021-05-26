"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Level =
/*#__PURE__*/
function () {
  function Level(index, levelData) {
    _classCallCheck(this, Level);

    this.index = index;
    this.levelData = levelData;
    this.destroyedStatus = false;
  }

  _createClass(Level, [{
    key: "start",
    value: function start() {
      this.levelData.start();
    }
  }, {
    key: "mouseClicked",
    value: function mouseClicked() {
      if (this.levelData.mouseClicked) {
        this.levelData.mouseClicked();
      }
    }
  }, {
    key: "mousePressed",
    value: function mousePressed() {
      if (this.levelData.mousePressed) {
        this.levelData.mousePressed();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroeyedStatus = true;
      this.cleanup();
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.levelData.cleanup();
    }
  }, {
    key: "isDestroyed",
    value: function isDestroyed() {
      return this.destroyedStatus;
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this.destroyedStatus) return;
      this.levelData.draw();
    }
  }]);

  return Level;
}();