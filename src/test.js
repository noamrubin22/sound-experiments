let brain1, brain2, brain3, gut, gut1, gut2, gut3, gut4;
let posX = 0;
let brainPosX = 0;
let posY = 0;
let brainPosY = 0;
let size = 200;
let x = 0;
let increment = 0.4;
let resize = 10;

function preload() {
  brain1 = loadImage("../assets/gutBrain/brainScan.png");
  brain2 = loadImage("../assets/gutBrain/brainScan1.png");
  brain3 = loadImage("../assets/gutBrain/brainScanWhole.png");
  gut = loadImage("../assets/gutBrain/gut.png");
  gut1 = loadImage("../assets/gutBrain/gut1.png");
  gut2 = loadImage("../assets/gutBrain/gut2.png");
  gut3 = loadImage("../assets/gutBrain/gut3.png");
  gut4 = loadImage("../assets/gutBrain/gut4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(209);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(
    "studied show that there is a connection between the gut and the brain",
    windowWidth / 2,
    20
  );
  image(gut3, posX + 30, posY + 100);
  image(gut1, 470 - posX, posY + 100);
  image(gut4, 920 - posX, posY + 100);
  push();
  tint(255, 100);
  image(brain3, mouseX, mouseY, 500, 500);
  pop();
  push();
  tint(255, 100);
  pop();

  posX += random(-1, 1);
  posY += random(-1, 1);

  //   if (size < 0.2) {
  //     resize = 1 / resize;
  //   } else {
  //     size = size - increment;
  //   }
}

function mousePressed() {
  print("Mouseclicked");
  posX = 1000;
  posY = 1000;
  fill(0);
  stroke("black");
  resize = 5.5;
  increment = 0;
  image(gut4, 100, 100);
}
