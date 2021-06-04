let brain2, brain3, gut, gut1, gut2, gut3, gut4;

class GutBrain {
  constructor(images) {
    this.text = [
      "There is growing evidence showing a relation between the gut microbiota and anxiety and depressive-like behaviors (1-3).",
      "Some neuroscientists call the gut the second brain.The gut itself holds a complex network of neurons and glia, collectively called the enteric nervous system (ENS). The amount of neurons that this system holds is comparable to the amount of neurons in a cat’s brain. Besides, it is the only organ that can act autonomously from the brain (6).",
      "Serotonin, an important brain neurotransmitter that is relevant to depression and other neuropsychiatric illnesses, is not only synthesized in the gut, 95% is located in the digestive track, compared to the remaining 5% located in the brain. (7).",
    ];
    this.images = images;
    this.posX = 0;
    this.posY = 0;
    this.size = 200;
    this.increment = 0.4;
    this.resize = 10;
  }

  setup() {
    textSize(25);
    textAlign(CENTER, CENTER);
  }

  draw(i) {
    background(209);
    text(this.text[i], windowWidth / 15, windowHeight / 4, 300);
    image(this.images[i], 500 - this.posX, this.posY + 100);
    push();
    // tint(255, 255);
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

  next() {
    print("Mouseclicked");
    this.posX = 1000;
    this.posY = 1000;
    fill(0);
    stroke("black");
    this.resize = 5.5;
    this.increment = 0;
  }
}
