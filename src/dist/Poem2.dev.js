"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SciencePoem =
/*#__PURE__*/
function () {
  function SciencePoem(chapterManager) {
    _classCallCheck(this, SciencePoem);

    this.text = ["to agree that we don't know", "isn't that the beauty of science?", "i am trying to understand", "in the hope of making more sense", "of everything that is happening", "around me", "inside me", "every answer brings a question", "the mysteries of life", "they are never ending", "and i agree to never truly know", "", "but i am just curious"];
    this.chapterManager = chapterManager;
  }

  _createClass(SciencePoem, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "setup",
    value: function setup() {
      fill("darkgreen");
      textSize(20);
      textAlign(CENTER, CENTER);
      background(255);
      this.y = 40;
      this.x = windowWidth / 2;
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;

      this.text.map(function (sentence, index) {
        text(sentence, _this.x, _this.y + 40 * index);
      });
    }
  }, {
    key: "mousePressed",
    value: function mousePressed() {
      this.chapterManager.next();
    }
  }]);

  return SciencePoem;
}();