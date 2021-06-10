"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChapterManager =
/*#__PURE__*/
function () {
  function ChapterManager(chapters) {
    _classCallCheck(this, ChapterManager);

    this.chapters = chapters;
    this.currentChapter = null;
  }

  _createClass(ChapterManager, [{
    key: "next",
    value: function next() {
      if (this.currentChapter) {
        // this.currentChapter.destroy();
        this.currentChapter = null;
      }

      if (this.length > 0) {
        this.currentChapter = this.chapters.shift();
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.next();
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this.currentChapter) {
        this.currentChapter.draw();
      }
    }
  }]);

  return ChapterManager;
}();