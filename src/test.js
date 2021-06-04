let gutBrain, brain1;
let gutBrainImages = [];
let i = 0;

function preload() {
  brain1 = loadImage("../assets/gutBrain/brainScan.png");
  brain2 = loadImage("../assets/gutBrain/brainScan1.png");
  brain3 = loadImage("../assets/gutBrain/brainScanWhole.png");
  gut = loadImage("../assets/gutBrain/gut.png");
  gut1 = loadImage("../assets/gutBrain/gut1.png");
  gut2 = loadImage("../assets/gutBrain/gut2.png");
  gut3 = loadImage("../assets/gutBrain/gut3.png");
  gut4 = loadImage("../assets/gutBrain/gut4.png");
  flowers1 = loadImage("../assets/gutBrain/flowers1.png");
  flowers2 = loadImage("../assets/gutBrain/flowers2.png");
  flowers3 = loadImage("../assets/gutBrain/flowers3.png");
  flowers4 = loadImage("../assets/gutBrain/flowers4.png");
  gutBrainImages.push(
    gut1,
    gut2,
    gut4,
    brain3,
    gut1,
    gut3,
    brain1,
    brain2,
    flowers1,
    flowers2,
    flowers3,
    flowers4
  );
  gutBrain = new GutBrain(gutBrainImages);
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  gutBrain.setup();
}

function draw() {
  gutBrain.draw(i);
}

function mousePressed() {
  i++;
}
