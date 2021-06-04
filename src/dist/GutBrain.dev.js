"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GutBrain =
/*#__PURE__*/
function () {
  function GutBrain(images) {
    _classCallCheck(this, GutBrain);

    this.text = ["There is growing evidence showing a relation between the gut microbiota and anxiety and depressive-like behaviors (1-3).", "Some neuroscientists call the gut the second brain.The gut itself holds a complex network of neurons and glia, collectively called the enteric nervous system (ENS). The amount of neurons that this system holds is comparable to the amount of neurons in a cat’s brain. Besides, it is the only organ that can act autonomously from the brain (6).", "Serotonin, an important brain neurotransmitter that is relevant to depression and other neuropsychiatric illnesses, is not only synthesized in the gut, 95% is located in the digestive track, compared to the remaining 5% located in the brain. (7).", "There is growing evidence showing a relation between the gut microbiota and anxiety and depressive-like behaviors (1-3).", "Some neuroscientists call the gut the second brain.The gut itself holds a complex network of neurons and glia, collectively called the enteric nervous system (ENS). The amount of neurons that this system holds is comparable to the amount of neurons in a cat’s brain. Besides, it is the only organ that can act autonomously from the brain (6).", "Serotonin, an important brain neurotransmitter that is relevant to depression and other neuropsychiatric illnesses, is not only synthesized in the gut, 95% is located in the digestive track, compared to the remaining 5% located in the brain. (7).", "There is growing evidence showing a relation between the gut microbiota and anxiety and depressive-like behaviors (1-3).", "Some neuroscientists call the gut the second brain.The gut itself holds a complex network of neurons and glia, collectively called the enteric nervous system (ENS). The amount of neurons that this system holds is comparable to the amount of neurons in a cat’s brain. Besides, it is the only organ that can act autonomously from the brain (6).", "Serotonin, an important brain neurotransmitter that is relevant to depression and other neuropsychiatric illnesses, is not only synthesized in the gut, 95% is located in the digestive track, compared to the remaining 5% located in the brain. (7).", "There is growing evidence showing a relation between the gut microbiota and anxiety and depressive-like behaviors (1-3).", "Some neuroscientists call the gut the second brain.The gut itself holds a complex network of neurons and glia, collectively called the enteric nervous system (ENS). The amount of neurons that this system holds is comparable to the amount of neurons in a cat’s brain. Besides, it is the only organ that can act autonomously from the brain (6).", "Serotonin, an important brain neurotransmitter that is relevant to depression and other neuropsychiatric illnesses, is not only synthesized in the gut, 95% is located in the digestive track, compared to the remaining 5% located in the brain. (7)."];
    this.images = images;
    this.posX = 0;
    this.posY = 0;
    this.posXStart = 500;
    this.posYPlus = 100;
  }

  _createClass(GutBrain, [{
    key: "setup",
    value: function setup() {
      textSize(25);
      textAlign(CENTER, CENTER);
    }
  }, {
    key: "draw",
    value: function draw(i) {
      background(209);

      if (i % 3 > 0) {
        text(this.text[i], windowWidth / 15, windowHeight / 4, 300);
      } else {
        text(this.text[i], windowWidth / 1.5, windowHeight / 4, 300);
      }

      image(this.images[i], this.posXStart - this.posX, this.posY + this.posYPlus);
      push(); // tint(255, 255);
      // image(this.images[11], 500 - this.posX, this.posY + 50);

      pop();

      if (i === 1) {
        push();
        tint(255, 100);
        image(this.images[3], mouseX, mouseY);
        pop();
      }

      this.posX += random(-1, 1);
      this.posY += random(-1, 1);
    }
  }]);

  return GutBrain;
}();