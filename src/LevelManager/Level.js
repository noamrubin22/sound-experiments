class Level {
  constructor(index, levelData) {
    this.index = index;
    this.levelData = levelData;
    this.destroyedStatus = false;
  }

  start() {
    this.levelData.start();
  }

  mouseClicked() {
    if (this.levelData.mouseClicked) {
      this.levelData.mouseClicked();
    }
  }

  mousePressed() {
    if (this.levelData.mousePressed) {
      this.levelData.mousePressed();
    }
  }

  destroy() {
    this.destroeyedStatus = true;
    this.cleanup();
  }

  cleanup() {
    this.levelData.cleanup();
  }

  isDestroyed() {
    return this.destroyedStatus;
  }

  draw() {
    if (this.destroyedStatus) return;
    this.levelData.draw();
  }
}
