class References {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "References";
    this.refGutBrain = {
      title: "the gut- brain connection",
      refs: ["blashflajlfjaa", "kajhflkahskfhaskfh", "ashfkajsf"],
    };
    this.refIntro = {
      title: "introduction",
      refs: ["blashflajlfjaa", "kajhflkahskfhaskfh", "ashfkajsf"],
    };
    this.refBreath = {
      title: "the breath",
      refs: [
        "Rod K. Observing the effects of mindfulness-based meditation on anxiety and depression in chronic pain patients. Psychiatr Danub (2015) 27(Suppl 1):S209–11",
        "Pilkington K, Kirkwood G, Rampes H, Richardson J. Yoga for depression: the research evidence. J Affect Disord (2005) 89:13–24. doi:10.1016/j.jad.2005.08.013",
        "hu I-H, Wu W-L, Lin I-M, Chang Y-K, Lin Y-J, Yang P-C. Effects of yoga on heart rate variability and depressive symptoms in women: a randomized controlled trial. J Altern Complement Med (2017) 23:310–6. doi:10.1089/acm.2016.0135",
      ],
    };
    this.refPsychedelics = {
      title: "psychedelics",
      refs: ["blashflajlfjaa", "kajhflkahskfhaskfh", "ashfkajsf"],
    };
    this.refMusic = {
      title: "music",
      refs: ["blashflajlfjaa", "kajhflkahskfhaskfh", "ashfkajsf"],
    };
    this.songs = {
      title: "songs",
      refs: ["nthng -unfinished ", "kajhflkahskfhaskfh", "ashfkajsf"],
    };
    this.goodbye = {
      title: "thank for your attention",
      refs: [
        "this project was created in p5.js",
        "keep spreading the love",
        "take care of yourself and each other",
        "www.noam-rubin.com",
      ],
    };
    this.references = [
      this.refGutBrain,
      this.refIntro,
      this.refBreath,
      this.refPsychedelics,
      this.refMusic,
      this.songs,
      this.goodbye,
    ];
    this.y = 200;
  }

  preload() {
    this.mySound = loadSound("assets/songs/waterlife.mp3");
  }

  setup() {
    this.textWidth = 200;
  }

  draw() {
    background(13);
    fill("gray");
    textSize(60);
    textAlign(CENTER, CENTER);
    text(this.title, windowWidth / 2, 80);
    this.references.forEach((topic, index) => {
      textSize(21);
      this.titlePosY = this.y + index * 900;
      text(topic.title, windowWidth / 2, this.titlePosY);
      textSize(15);
      topic.refs.forEach((ref, index) => {
        return text(
          ref,
          windowWidth / 2 - windowWidth / 2.4,
          this.titlePosY + 50 + index * 50,
          windowWidth / 1.2
        );
      });
    });
  }

  mouseWheel(event) {
    //  move text
    if (event.deltaY > 0) {
      this.y -= 2;
    } else {
      this.y += 2;
    }

    //  play music
    if (!this.mySound.isPlaying()) {
      print("sound should play");
      this.mySound.play();
    }
    clearTimeout(this.isScrolling);

    // pause music on stop scroll
    this.isScrolling = setTimeout(function () {
      // this.mySound.fade(0, 0.6);
      // this.mySound.pause();
      print(this.mySound);
      print("music should pause");
    }, 1000);

    this.pos += event.delta;
  }

  mousePressed() {
    // this.chapterManager.next();
    print("should stop");
  }
}
