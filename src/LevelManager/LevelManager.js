class LevelManager {
  constructor(levels) {
    this.levels = levels;
    this.currentLevel = null;
  }

  next() {
    if (this.currentLevel) {
      this.currentLevel.destroy();
      this.currentLevel = null;
    }
    if (this.length > 0) {
      this.currentLevel = this.levels.shift();
      this.currentLevel.start(0, 0, 1280, 720);
    } else {
    }
  }

  start() {
    this.next();
  }

  draw() {
    if (this.currentLevel) {
      if (this.currentLevel.isDestroyed()) {
        this.next();
      } else {
        this.currentLevel.draw();
      }
    }
  }
}
