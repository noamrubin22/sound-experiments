class ChapterManager {
  constructor() {
    this.chapters = [];
    this.currentChapter = null;
  }

  preload() {
    this.chapters.forEach((chapter) => {
      chapter.preload();
    });
  }

  setup() {
    this.chapters.forEach((chapter) => {
      chapter.setup();
    });
  }

  draw() {
    if (this.currentChapter) {
      this.currentChapter.draw();
    }
  }

  mousePressed() {
    if (this.currentChapter) {
      this.currentChapter.mousePressed();
    }
  }

  mouseWheel(event) {
    if (this.currentChapter) {
      if (this.currentChapter.mouseWheel) {
        this.currentChapter.mouseWheel(event);
      }
    }
  }

  addChapter(chapter) {
    this.chapters.push(chapter);
  }

  next() {
    if (this.currentChapter) {
      // this.currentChapter.destroy();
      this.currentChapter = null;
    }
    if (this.chapters.length > 0) {
      this.currentChapter = this.chapters.shift();
      this.currentChapter.setup();
    }
  }

  start() {
    this.next();
  }
}
