function preload() {
  sound = new Sound();
  sound.preload();
}

function setup() {
  createCanvas(1400, 5400);
}

function draw() {
  background("grey");
  fill(0);
}

function mouseWheel(event) {
  sound.onScroll(event);
}
