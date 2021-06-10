"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Poem =
/*#__PURE__*/
function () {
  function Poem(chapterManager) {
    _classCallCheck(this, Poem);

    this.poem1 = ["pain", "escaping the pain by spending more money, by eating more food, by taking more drugs", "to forget about the pain", "i want to feel better so i misuse my power, dominate, manipulate,", "causing others more pain", "why would i be nice to you or the nature?", " in my mind i am not even nice to myself", "i am constantly looking for short-term solutions but nothing outside me", "can get rid of the pain", "emotions and feelings, overwhelming and scary i am rather distracted", "so i don't feel my pain", "suppressing emotions, hurting, exploding, how can i act different than", "causing more pain?"];
    this.poem2 = ["to agree that we don't know", "isn't that the beauty of science?", "i am trying to understand", "in the hope of making more sense", "of everything that is happening", "around me", "inside me", "every answer brings a question", "the mysteries of life", "they are never ending", "and i agree to never truly know", "", "but i am just curious"];
    this.chapterManager = chapterManager;
  }

  _createClass(Poem, [{
    key: "preload",
    value: function preload() {
      this.mySound = loadSound("assets/unfinished.mp3"); // this.mySound = loadSound("assets/test.wav");

      this.soundVisual = new SoundVisual(this.mySound, "darkblue", "orange");
    }
  }, {
    key: "setup",
    value: function setup() {
      var _this = this;

      print("poem setup");
      fill("darkblue");
      textSize(20);
      textAlign(CENTER, CENTER);
      background(255);
      this.y = 40;
      this.x = windowWidth / 2;
      this.mySound.onended(function () {
        _this.chapterManager.next();
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      if (!this.mySound.isPlaying()) {
        background(255);
      }

      this.poem1.map(function (sentence, index) {
        text(sentence, _this2.x, _this2.y + 40 * index);
      });

      if (this.mySound.isPlaying()) {
        this._remove();

        this.soundVisual.displayWavelength("horizontal", 2.5, 1);
        this.soundVisual.displayFrequency("horizontal");
      }

      if (this.mySound.currentTime() > 1) {
        push();
        textSize(14);
        text("can you allow yourself to feel?", width / 5, height / 2);
        pop();
      }
    }
  }, {
    key: "_remove",
    value: function _remove() {
      this.y = this.y + 0.5;
    }
  }, {
    key: "mousePressed",
    value: function mousePressed() {
      if (!this.mySound.isPlaying()) {
        this.mySound.play();
      }
    }
  }]);

  return Poem;
}();