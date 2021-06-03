"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Poem =
/*#__PURE__*/
function () {
  function Poem() {
    _classCallCheck(this, Poem);

    this.poem = ["pain", "escaping the pain by spending more money, by eating more food, by taking more drugs", "to forget about the pain", "i want to feel better so i misuse my power, dominate, manipulate,", "causing others more pain", "why would i be nice to you or the nature?", " in my mind i am not even nice to myself", "i am constantly looking for short-term solutions but nothing outside me", "can get rid of the pain", "emotions and feelings, overwhelming and scary i am rather distracted", "so i don't feel my pain", "suppressing emotions, hurting, exploding, how can i act different than", "causing more pain?"];
    this.x = windowWidth / 2;
    this.y = 40;
  }

  _createClass(Poem, [{
    key: "display",
    value: function display() {
      var _this = this;

      print("poem display");
      fill("darkblue");
      textSize(20);
      textAlign(CENTER, CENTER);
      this.poem.map(function (sentence, index) {
        text(sentence, _this.x, _this.y + 40 * index);
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      this.y = this.y + 0.5;
    }
  }]);

  return Poem;
}();