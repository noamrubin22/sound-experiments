"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Introduction =
/*#__PURE__*/
function () {
  function Introduction(chapterManager) {
    _classCallCheck(this, Introduction);

    this.text = ["a parallel pandemic", "with this project I would like to shed some light on a problem that requires urgent attention in our society: the global mental health crisis. the research that I have done shows ways that in my opinion have potential in improving mental health around the globe. all references can be found at the end.", "most of the story is guided by music. please turn on your sound and enjoy the music for the full experience.", "by Noam Rubin"];
    this.chapterManager = chapterManager;
  }

  _createClass(Introduction, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "setup",
    value: function setup() {
      var _this = this;

      background(0);
      fill("gray");
      textSize(18);
      this.x = windowWidth / 5.5;
      this.y = 120;
      this.text.forEach(function (sentence, index) {
        text(sentence, _this.x, _this.y + 120 * index, windowWidth / 1.5);
      });
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

  return Introduction;
}();