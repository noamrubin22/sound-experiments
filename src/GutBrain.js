class GutBrain {
  constructor(chapterManager) {
    this.text = [
      "More and more studies are finding a relation between the gut microbiota and anxiety and depressive-like behaviors (1-3).",
      "Some neuroscientists call the gut the second brain.The gut itself holds a complex network of neurons and glia, collectively called the enteric nervous system (ENS). The amount of neurons that this system holds is comparable to the amount of neurons in a cat’s brain. Besides, it is the only organ that can act autonomously from the brain (6).",
      "Serotonin, an important brain neurotransmitter that is relevant to depression and other neuropsychiatric illnesses, is not only synthesized in the gut, 95% is located in the digestive track, compared to the remaining 5% located in the brain. (7).",
      "The gut is in constant bidirectional communication with the brain. (2-6). One of the key players here is the vagus nerve. It consists of 90% afferent nerves(going towards the brain), and 10% efferent nerves (from the brain to the gut). The stimulation of the afferent nerves influences systems in the brainstem that play crucial roles in major psychiatric conditions, such as mood and anxiety disorders.",
      "Interestingly, the beneficial effect on mood and anxiety by gut bacteria is found to be caused by affecting the activity of the vagus nerve. Additionally the activity in the vagus nerve is correlated with the capacity to regulate stress responses (8, 9).",
      "There is growing evidence that nutritional components, such as probiotics (12, 13), gluten (14), as well as drugs, such as anti-oxidative agents (15) and antibiotics (16), have a high impact on the vagus nerve activity through the interaction with the gut microbiota and that this effect varies greatly between individuals.",
      "Personally, I believe that the gut-brain axis could be a key player in fighting the global mental health pandemic. Awareness about the symbiotic relationship between us and our gut microbiota is necessary for understanding the influence of food intake on mental health.",
      "One way to reach awareness among people would be through education. Nowadays, people generally know that food intake influences their physical health. However, although research is showing evidence on the relation between food intake, gut microbiota and mental health, this has not fully reached the public yet.",
      "On the other hand, it is almost an universal human experience for stress or anxiety to alter the gut function and cause symptoms like diarrhoea, nausea and discomfort.",
      "To understand that this phenomena can be used the other way around (by changing food intake and therefore  altering the population of gut bacteria and decreasing anxiety and stress), but also in order to understand how one's own body responds to certain foods and certain moods/ stress levels, it would be helpful to have an overview of .",
      "In order to become aware of the way our individual body works and responds to certain foods, stressors, and how our mood is influenced by that, I think we need to start observing our bodies",
      "For that reason, I was thinking of creating an application, where users’ could collect information about their mood, food intake and digestion with a daily questionariy. Optional* would be to use image recognition and in this way categorize “happy”, “depressed” and “anxious” feces. (*since I am not sure how willing people would be taking daily pictures of their ..poop ;))",
      "A statistical analysis will be performed with the data, giving the users’ a higher awareness of how their mood is connected to what they eat and how they digest. Knowing more would help individuals to recognize certain characteristics/behavior/responses of their body and help prevent degradation of mental health.",
      "I would like to come back to the vagus nerve. The vagus nerve represents the main component of the parasympathetic nervous system, which regulates crucial bodily functions, including control of mood, immune response, digestion, and heart rate. It is in communication with the brain and sends important information about the state of inner organs via afferent nerves. It has the capacity to regulate stress responses, mood and anxiety. This can be influenced by stimulation or by gut bacteria. Another, in my opinion, very interesting finding is that the activity in the vagus nerve can be regulated by breathing(8). This finding leads us to the next topic, namely.. ",
    ];
    this.index = 0;
    this.title = "The Gut - Brain axis";
    this.chapterManager = chapterManager;
  }

  preload() {
    this.brainImages = [
      loadImage("./assets/gutBrain/brainScanWhole.png"),
      loadImage("./assets/gutBrain/brainScan.png"),
      loadImage("./assets/gutBrain/brainScan1.png"),
      loadImage("./assets/gutBrain/brainWhole.png"),
    ];
    this.gutImages = [
      loadImage("./assets/gutBrain/gut1.png"),
      loadImage("./assets/gutBrain/gut2.png"),
      loadImage("./assets/gutBrain/gut.png"),
      loadImage("./assets/gutBrain/gut3.png"),
      loadImage("./assets/gutBrain/gut4.png"),
    ];
    this.flowerImages = [
      loadImage("./assets/gutBrain/flowers1.png"),
      loadImage("./assets/gutBrain/flowers2.png"),
      loadImage("./assets/gutBrain/flowers3.png"),
      loadImage("./assets/gutBrain/flowers4.png"),
    ];
    this.vagusNerveImages = [
      loadImage("./assets/gutBrain/vagusNerve.png"),
      loadImage("./assets/gutBrain/vagusNerve1.png"),
      loadImage("./assets/gutBrain/vagusNerve2.png"),
      loadImage("./assets/gutBrain/vagusNerve3.jpeg"),
      loadImage("./assets/gutBrain/vagusNerve4.png"),
      loadImage("./assets/gutBrain/vagusNerve5.png"),
    ];
    this.allImages = [
      ...this.gutImages,
      ...this.brainImages,
      ...this.flowerImages,
      ...this.vagusNerveImages,
    ];
    this.mySound = loadSound("./assets/songs/vaporware.mp3");
  }

  setup() {
    textAlign(CENTER, CENTER);
    this.posX = 0;
    this.posY = 0;
    this.posXStart = 500;
    this.posYPlus = 150;
    this.imageWidth = 500;
  }

  draw() {
    background(230);
    textSize(60);
    fill(10);
    text(this.title, windowWidth / 2, 80);
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }

    // text display
    if (this.index < 12) {
      textSize(20);
      if (this.index % 3 > 0) {
        text(this.text[this.index], windowWidth / 15, windowHeight / 3.5, 300);
      } else {
        text(this.text[this.index], windowWidth / 1.5, windowHeight / 3.5, 300);
      }
    }

    // image display

    if (this.index < 3) {
      image(
        this.gutImages[0],
        windowWidth / 2 - this.imageWidth / 2 + this.posX,
        this.posY + this.posYPlus
      );
      if (this.index === 1) {
        push();
        tint(255, 100);
        image(this.brainImages[0], mouseX, mouseY);
        pop();
      } else if (this.index === 2) {
        push();
        tint(255, 200);
        image(
          this.flowerImages[0],
          windowWidth / 2 - this.imageWidth / 2,
          this.posYPlus - 40
        );
        pop();
      }
    } else if (this.index === 3) {
      push();
      tint(255, 200);
      image(this.vagusNerveImages[3], 10, this.posYPlus - 15, 850, 600);
      pop();
      textSize(15);
      text("from this article blalbabla", 200, windowHeight - 40);
    } else if (this.index === 4) {
      image(
        this.brainImages[1],
        windowWidth / 2 - this.imageWidth / 2 + this.posX,
        this.posY + this.posYPlus
      );
      push();
      tint(255, 100);
      image(this.vagusNerveImages[2], mouseX, mouseY);
      pop();
    } else if (this.index === 5) {
      image(
        this.gutImages[2],
        windowWidth / 2 - this.imageWidth / 2 + this.posX,
        this.posY + this.posYPlus
      );
    } else if (this.index === 6) {
      image(
        this.gutImages[3],
        windowWidth / 2 - this.imageWidth / 2 + this.posX,
        this.posY + this.posYPlus
      );
    } else if (this.index === 7) {
      image(
        this.gutImages[3],
        windowWidth / 2 - this.imageWidth / 2 + this.posX,
        this.posY + this.posYPlus
      );

      push();
      tint(255, 200);
      image(
        this.flowerImages[3],
        windowWidth / 2 - this.imageWidth / 2,
        this.posYPlus - 40
      );
      pop();
    }

    this.posX += random(-1, 1);
    this.posY += random(-1, 1);
  }

  mousePressed() {
    if (this.index < this.text.length) {
      this.index++;
    } else {
      this.chapterManager.next();
      this.mySound.fade(0, 1.5);
    }
  }
}

// let centeredImage;
// let flowerImage;
// let tintImage;
// if (this.index < 3) {
//   centeredImage = this.gutImages[0]

// }
// image(
//   centeredImage,
//   windowWidth / 2 - this.imageWidth / 2 + this.posX,
//   this.posY + this.posYPlus
// );

// push();
// tint(255, 100);
// image(tintImage, mouseX, mouseY);
// pop();

// push();
// tint(255, 200);
// image(
//   flowerImage,
//   windowWidth / 2 - this.imageWidth / 2,
//   this.posYPlus - 40
// );
// pop();
