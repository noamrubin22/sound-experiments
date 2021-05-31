class Poem {
  constructor() {
    this.poem = [
      "pain pain pain escaping the pain by spending more money by eating more food by taking more drugs to forget about the pain",
      "i have pain",
      "i want to feel better so i misuse my power, dominate, manipulate, causing others more pain",
      "i am in pain",
      "why would i be nice to you or the nature, in my mind i am not even nice to myself",
      "pain",
      "i am constantly looking for short-term solutions but nothing outside me can get rid of the pain",
      "stupid pain",
      "emotions and feelings, overwhelming and scary i am rather distracted so i don't feel my pain",
      "oh, pain",
      "suppressing emotions, hurting, exploding how can i act different than causing more pain",
    ];
    this.x = width / 2;
    this.y = 40;
  }

  display() {
    fill("darkblue");
    this.poem.map((sentence, index) => {
      text(sentence, this.x, this.y + 70 * index);
    });
  }

  remove() {
    this.y = this.y + 0.5;
  }
}
