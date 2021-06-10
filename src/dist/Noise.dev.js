"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Noise =
/*#__PURE__*/
function () {
  function Noise() {
    _classCallCheck(this, Noise);

    this.xoff = 0;
    this.yoff = 0;
    this.incr = 0.001;
    this.scl = 20;
    this.cols = 0;
    this.rows = 0;
    this.fr = 0;
    this.poem = new Poem();
  }

  _createClass(Noise, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "setup",
    value: function setup() {
      this.cols = floor(width / this.scl);
      this.rows = floor(height / this.scl);
      this.fr = createP("");
      background("white");
      textAlign(CENTER, CENTER);
      textFont("Roboto Mono, monospace");
      fill("black"); // this.poem.display();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.xoff = 0;
      loadPixels();

      for (var x = 0; x < width / 2; x++) {
        for (var y = 0; y < height / 2; y++) {
          var index = (x + y * width) * 4;
          var r = noise(this.xoff) * 255;
          pixels[index + 0] = r;
          pixels[index + 1] = r;
          pixels[index + 2] = r;
          pixels[index + 3] = 255;
          this.xoff += 0.1;
        }

        updatePixels();
      }
    } // draw() {
    //   this.yoff = 0;
    //   for (let x = 0; x < width; x++) {
    //     this.xoff = 0;
    //     for (let y = 0; y < height; y++) {
    //       let index = (x + y * width) * 4;
    //       // let r = noise(this.xoff) * 255;
    //       let r = random(255);
    //       this.xoff += this.incr;
    //       fill(random(255));
    //       // rect(x * this.scl, 4 * this.scl, this.scl, this.scl);
    //       vertex(x, y);
    //     }
    //   }
    //   // this.yoff += this.incr;
    //   this.fr.html(floor(frameRate()));
    //   // push();
    //   fill("black");
    //   // this.poem.display();
    //   // pop();
    // }

  }]);

  return Noise;
}();