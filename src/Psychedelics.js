class Psychedelics {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "Psychedelics";
    this.tree = [];
    this.counter = 0;
  }

  preload() {
    this.mySound = loadSound("assets/songs/softsea.mp3");
  }

  setup() {
    textAlign(CENTER);
    textSize(60);
    this.a = createVector(windowWidth / 2, windowHeight);
    this.b = createVector(windowWidth / 2, windowHeight - 100);
    this.root = new Branch(this.a, this.b);
    this.tree[0] = this.root;
  }

  draw() {
    background(GRAY);
    fill("black");
    text(this.title, windowWidth / 2, 80);

    for (let i = 0; i < this.tree.length; i++) {
      this.tree[i].show();
    }
  }

  mousePressed() {
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }

    for (let i = this.tree.length - 1; i >= 0; i--) {
      if (this.counter < 200) {
        if (!this.tree[i].finished) {
          this.tree.push(this.tree[i].branchA());
          this.tree.push(this.tree[i].branchB());
        }
        this.counter++;
        this.tree[i].finished = true;
      } else {
        this.chapterManager.next();
      }
    }
  }
}
