let pos = 50;
let mySound;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/cyanure.mp3");
}

function setup() {
  createCanvas(1400, 5400);
}

function draw() {
  background("grey");
  fill(0);
  ellipse(50, pos, 80, 80);
}

let isScrolling = 0;
function mouseWheel(event) {
  print(event.delta);
  if (!mySound.isPlaying()) {
    mySound.play();
  }
  clearTimeout(isScrolling);

  isScrolling = setTimeout(function () {
    mySound.pause();
    print("music should pause");
  }, 1000);
  print(event);
  pos += event.delta;
  //uncomment to block page scrolling
  // return false;
}
