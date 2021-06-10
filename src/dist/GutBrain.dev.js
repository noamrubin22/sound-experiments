"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GutBrain =
/*#__PURE__*/
function () {
  function GutBrain() {
    _classCallCheck(this, GutBrain);

    this.text = ["There is growing evidence showing a relation between the gut microbiota and anxiety and depressive-like behaviors (1-3).", "Some neuroscientists call the gut the second brain.The gut itself holds a complex network of neurons and glia, collectively called the enteric nervous system (ENS). The amount of neurons that this system holds is comparable to the amount of neurons in a cat’s brain. Besides, it is the only organ that can act autonomously from the brain (6).", "Serotonin, an important brain neurotransmitter that is relevant to depression and other neuropsychiatric illnesses, is not only synthesized in the gut, 95% is located in the digestive track, compared to the remaining 5% located in the brain. (7).", "The gut is in constant bidirectional communication with the brain. (2-6). One of the key players here is the vagus nerve. It consists of 80% afferent (going towards the brain), and 20% efferent nerves (from the brain to the gut). The stimulation of the afferent nerves influences systems in the brainstem that play crucial roles in major psychiatric conditions, such as mood and anxiety disorders. Interestingly, the beneficial effect on mood and anxiety by gut bacteria is found to be caused by affecting the activity of the vagus nerve. Additionally the activity in the vagus nerve is correlated with the capacity to regulate stress responses (8, 9).", "There is growing evidence that nutritional components, such as probiotics (12, 13), gluten (14), as well as drugs, such as anti-oxidative agents (15) and antibiotics (16), have a high impact on the vagus nerve activity through the interaction with the gut microbiota and that this effect varies greatly between individuals.", "Personally, I believe that the gut-brain axis could be a key player in fighting the global mental health pandemic. Awareness about the symbiotic relationship that we have with our gut microbiota is necessary for understanding the influence of food intake on mental health.", "One way to reach awareness among people would be through education. Nowadays, people generally know that food intake influences their physical health. However, although research is showing evidence on the relation between food intake, gut microbiota and mental health, this has not reached the public yet. On the other hand, it is almost an universal human experience for stress or anxiety to alter the gut function and cause symptoms like diarrhoea, nausea and discomfort.", "To become aware that this phenomena can be used the other way around (one could decrease anxiety and stress by changing food intake and altering the population of gut bacteria), but also in order to understand how one's own body responds to certain foods and certain moods/ stress levels, clear data of oneself would be of great help.", "I was thinking of creating an application, where users’ can track their mood, food intake and digestion. Users’ will be asked to answer a daily questionnaire about their mood, food intake and characteristics/activity of their digestion. Optional* could be to use image recognition and in this way categorize “happy”, “depressed” and “anxious” feces. A statistical analysis will be performed with the data, giving the users’ a higher awareness of how their mood is connected to what they eat and how they digest. A higher awareness would help individuals to recognize certain characteristics / behavior / and help prevent degradation of mental health in the future. I am saying optional because even though the idea sounds good in my mind, I am just not sure how willing people would be to take daily pictures of their feces and upload it to an application. ", "Ok, so coming back to the vagus nerve. The vagus nerve represents the main component of the parasympathetic nervous system, which regulates crucial bodily functions, including control of mood, immune response, digestion, and heart rate. It is in communication with the brain and sends important information about the state of inner organs via afferent nerves. It has the capacity to regulate stress responses, mood and anxiety. This can be influenced by stimulation or by gut bacteria. Another, in my opinion, very interesting finding is that the activity in the vagus nerve can be regulated by breathing.(8)", "btn"];
    this.index = 0;
  }

  _createClass(GutBrain, [{
    key: "preload",
    value: function preload() {
      this.brainImages = [loadImage("../assets/gutBrain/brainScan.png"), loadImage("../assets/gutBrain/brainScan1.png"), loadImage("../assets/gutBrain/brainScanWhole.png")];
      this.gutImages = [loadImage("../assets/gutBrain/gut.png"), loadImage("../assets/gutBrain/gut1.png"), loadImage("../assets/gutBrain/gut2.png"), loadImage("../assets/gutBrain/gut3.png"), loadImage("../assets/gutBrain/gut4.png")];
      this.flowerImages = [loadImage("../assets/gutBrain/flowers1.png"), loadImage("../assets/gutBrain/flowers2.png"), loadImage("../assets/gutBrain/flowers3.png"), loadImage("../assets/gutBrain/flowers4.png")];
      this.allImages = [].concat(_toConsumableArray(this.brainImages), _toConsumableArray(this.gutImages), _toConsumableArray(this.flowerImages));
    }
  }, {
    key: "setup",
    value: function setup() {
      textSize(20);
      textAlign(CENTER, CENTER);
      this.posX = 0;
      this.posY = 0;
      this.posXStart = 500;
      this.posYPlus = 100;
    }
  }, {
    key: "draw",
    value: function draw() {
      background(209);

      if (this.index < 12) {
        if (this.index % 3 > 0) {
          text(this.text[this.index], windowWidth / 15, windowHeight / 4, 300);
        } else {
          text(this.text[this.index], windowWidth / 1.5, windowHeight / 4, 300);
        }
      }

      image(this.allImages[this.index], this.posXStart - this.posX, this.posY + this.posYPlus);
      push();
      pop();

      if (this.index === 1) {
        push();
        tint(255, 100);
        image(this.brainImages[1], mouseX, mouseY);
        pop();
      }

      this.posX += random(-1, 1);
      this.posY += random(-1, 1);
    }
  }, {
    key: "mousePressed",
    value: function mousePressed() {
      this.index++;
    }
  }]);

  return GutBrain;
}();