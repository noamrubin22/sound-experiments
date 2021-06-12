class Sound {
  constructor() {
    this.isScrolling = 0;
    this.sound = 0;
  }

  preload() {
    soundFormats("mp3", "ogg");
    this.sound = loadSound("./assets/songs/cyanure.mp3");
  }

  onScroll(event) {
    if (!this.sound.isPlaying()) {
      console.log("sound should play");
      this.sound.play();
    }
    clearTimeout(this.isScrolling);

    this.isScrolling = setTimeout(function () {
      //   this.sound.fade(2, 0.5);
      print("music should pause");
      print(this.sound);
      this.sound.pause();
    }, 1000);
    print(event);
  }
}
