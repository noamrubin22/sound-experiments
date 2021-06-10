class Noise {
  constructor() {
    this.xoff = 0;
    this.yoff = 0;
    this.incr = 0.001;
    this.scl = 20;
    this.cols = 0;
    this.rows = 0;
    this.fr = 0;
    this.poem = new Poem();
  }

  preload() {}

  setup() {
    this.cols = floor(width / this.scl);
    this.rows = floor(height / this.scl);
    this.fr = createP("");
    background("white");
    textAlign(CENTER, CENTER);
    textFont("Roboto Mono, monospace");
    fill("black");
    // this.poem.display();
  }

  draw() {
    this.xoff = 0;
    loadPixels();
    for (let x = 0; x < width / 2; x++) {
      for (let y = 0; y < height / 2; y++) {
        let index = (x + y * width) * 4;
        let r = noise(this.xoff) * 255;
        pixels[index + 0] = r;
        pixels[index + 1] = r;
        pixels[index + 2] = r;
        pixels[index + 3] = 255;
        this.xoff += 0.1;
      }
      updatePixels();
    }
  }
  // draw() {
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
}
