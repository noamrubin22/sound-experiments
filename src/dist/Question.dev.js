"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Question =
/*#__PURE__*/
function () {
  function Question(chapterManager) {
    _classCallCheck(this, Question);

    this.text = "are you allowing yourself to feel?";
    this.chapterManager = chapterManager;
  }

  _createClass(Question, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "setup",
    value: function setup() {
      background(0);
      fill("gray");
      textSize(22);
      text(this.text, width / 2, height / 2);
    }
  }, {
    key: "draw",
    value: function draw() {}
  }, {
    key: "mousePressed",
    value: function mousePressed() {
      this.chapterManager.next();
    }
  }]);

  return Question;
}();