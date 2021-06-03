class Poem {
  constructor() {
    this.poem = [
      "pain",
      "escaping the pain by spending more money, by eating more food, by taking more drugs",
      "to forget about the pain",
      "i want to feel better so i misuse my power, dominate, manipulate,",
      "causing others more pain",
      "why would i be nice to you or the nature?",
      " in my mind i am not even nice to myself",
      "i am constantly looking for short-term solutions but nothing outside me",
      "can get rid of the pain",
      "emotions and feelings, overwhelming and scary i am rather distracted",
      "so i don't feel my pain",
      "suppressing emotions, hurting, exploding, how can i act different than",
      "causing more pain?",
    ];
    this.x = windowWidth / 2;
    this.y = 40;
  }

  display() {
    print("poem display");
    fill("darkblue");
    textSize(20);
    textAlign(CENTER, CENTER);
    this.poem.map((sentence, index) => {
      text(sentence, this.x, this.y + 40 * index);
    });
  }

  remove() {
    this.y = this.y + 0.5;
  }
}
