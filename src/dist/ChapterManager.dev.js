"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChapterManager =
/*#__PURE__*/
function () {
  function ChapterManager() {
    _classCallCheck(this, ChapterManager);

    this.chapters = [];
    this.currentChapter = null;
  }

  _createClass(ChapterManager, [{
    key: "preload",
    value: function preload() {
      this.chapters.forEach(function (chapter) {
        chapter.preload();
      });
    }
  }, {
    key: "setup",
    value: function setup() {
      this.chapters.forEach(function (chapter) {
        chapter.setup();
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this.currentChapter) {
        this.currentChapter.draw();
      }
    }
  }, {
    key: "mousePressed",
    value: function mousePressed() {
      if (this.currentChapter) {
        this.currentChapter.mousePressed();
      }
    }
  }, {
    key: "mouseWheel",
    value: function mouseWheel() {
      if (this.currentChapter === new Breath()) {
        this.currentChapter.mouseWheel();
      }
    }
  }, {
    key: "addChapter",
    value: function addChapter(chapter) {
      this.chapters.push(chapter);
    }
  }, {
    key: "next",
    value: function next() {
      if (this.currentChapter) {
        // this.currentChapter.destroy();
        this.currentChapter = null;
      }

      if (this.chapters.length > 0) {
        this.currentChapter = this.chapters.shift();
        this.currentChapter.setup();
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.next();
    }
  }]);

  return ChapterManager;
}();