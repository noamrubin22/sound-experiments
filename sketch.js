let pos = 50;
let mySound;
let textAlinea =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus voluptatibus, repellat veniam itaque officia culpa tenetur a! Ullam possimus, itaque ipsam sapiente eveniet explicabo animi doloribus. Exercitationem, maiores eaque!";

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/cyanure.mp3");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  textSize(26);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("grey");
  fill(0);
  text(textAlinea, width * 2 - pos, height / 2);
}

let isScrolling = 0;
function mouseWheel(event) {
  if (!mySound.isPlaying()) {
    mySound.play();
  }
  clearTimeout(isScrolling);

  isScrolling = setTimeout(function () {
    mySound.fade(0, 0.6);
    mySound.pause();
    print("music should pause");
  }, 1000);
  print(event);
  pos += event.delta;
}
