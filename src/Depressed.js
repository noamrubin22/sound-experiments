class Depressed {
  constructor() {
    this.startText =
      "we were already facing a mental health crisis before the global pandemic hit us in 2019.¹ the impact of COVID-19 only increased our need for new solutions facing  a   p a n d e m i c   o f   m e n t a l   h e a l t h..............² the future health of individuals and societies depends on whether we are able to improve the efficiancy of mental health treatment and make sure it is accesible for those in need..........";
    this.text = [
      "",
      // "mental health disorders are among the leading causes of long term health conditions and disability worldwide¹⁰",
      // "mental health disorders are among the leading causes of long term health conditions and disability worldwide¹⁰",
      "mental health disorders are among the leading causes of long term health conditions and disability worldwide¹⁰",
      // "each year, 1 in 5 adults is experiencing mental illness⁵",
      "each year, 1 in 5 adults is experiencing mental illness⁵",
      // "the lockdowns have led to increased social isolation, anxiety, depression and PTSD",
      "the lockdowns have led to increased social isolation, anxiety, depression and PTSD",
      // "in 93% of countries worldwide, COVID-19 has disrupted or stopped mental health services.",
      // "in 93% of countries worldwide, COVID-19 has disrupted or stopped mental health services.",
      "in 93% of countries worldwide, COVID-19 has disrupted or stopped mental health services.",
      // "the growing mental health crisis is estimated to cost the world €16 trillion by 2030",
      // "the growing mental health crisis is estimated to cost the world €16 trillion by 2030",
      "the growing mental health crisis is estimated to cost the world €16 trillion by 2030",
      // "people with mood disorders are at higher risk of developing long term medical conditions and die prematurely",
      // "people with mood disorders are at higher risk of developing long term medical conditions and die prematurely",
      "people with mood disorders are at higher risk of developing long term medical conditions and die prematurely",
      // "in recent years, the amount of people dieying from opiod overdose has increased dramatically",
      // "in recent years, the amount of people dieying from opiod overdose has increased dramatically",
      "in recent years, the amount of people dieying from opiod overdose has increased dramatically",
      // "every 40 seconds, a person dies by suicied¹¹",
      "every 40 seconds, a person dies by suicied¹¹",
      // "the efficacy of mental health treatment has not been improved for the past 70 years",
      "the efficacy of mental health treatment has not been improved for the past 70 years",
      // "66% of patients remain having symptoms after treatment⁶",
      "66% of patients remain having symptoms after treatment⁶",
      // "30% of patients do not respond to any treatment at all⁷",
      "30% of patients do not respond to any treatment at all⁷",
      // "we need to think in different ways to find a solution",
      "we need to think in different ways to find a solution",
      "",
    ];
    // this.x = windowWidth - windowWidth / 4;
    // this.y = windowHeight - windowWidth / 7;
    this.x = 0;
    this.y = 40;
    this.xStartText = windowWidth * 12;
    this.yStartText = windowHeight / 3;
    this.file = "assets/subnautica.mp3";
    this.mySound = null;
    this.fft = null;
    this.peakDetect = null;
    this.mode = 0;
    this.button = null;
    this.randomNumber = random(0, windowWidth);
    this.sentence = 0;
  }

  preload() {
    print("depressed preload");
    this.mySound = loadSound(this.file);
  }

  setup() {
    print("depressed setup");
    background(0);
    noStroke();
    fill(255);
    textSize(15);
    textAlign(CENTER);

    this.fft = new p5.FFT();
    this.peakDetect = new p5.PeakDetect();
  }

  draw() {
    background(255);
    fill(0);
    this.fft.analyze();
    this.peakDetect.update(this.fft);
    // this.mySound.rate(5);
    if (this.mode === 0) {
      textSize(111);
      this.xStartText = this.xStartText - 10;
      text(this.startText, this.xStartText, this.yStartText);
    }
    // this.detectPeak();
    text(this.text[0], this.x, this.y, 200, 200);
    // this.text(map)
    // detectPeak();
    // } else {
    //   this.y = this.y + 0.5;
    //   textSize(25);
    //   this.text.map((sentence, index) => {
    //     // text(
    //     //   sentence,
    //     //   (index + 1) * windowWidth - this.x,
    //     //   this.y / 2.5,
    //     //   windowWidth / 2
    //     // );
    //     if (this.peakDetect.isDetected) {
    //       text(sentence, this.x, this.y, 200, 200);
    //     }
    //   });
    // }
    // if (this.peakDetect.isDetected) {
    //   print("peak");
    //   this.mode = 1;
    //   // this.x = this.x + 10;
    // }
  }

  detectPeak() {
    if (this.peakDetect.isDetected) {
      // this.sentence++;
      this.mode = 1;
      //   this.text.map((sentence, index) => {
      //     this.text(sentence, this.x, this.y, 200, 200);
      // });
    }
    print("peak");
  }
  playMusic() {
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }
  }
}
