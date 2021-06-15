class Conclusion {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "Some thoughts";
    this.text = [
      "It feels like I just touched the surface of the amount of information that can be found around this topic. There is still so much I would like to immerse myself in, for example: finding out about the way music is forcing me feel or, by exploring the effects of sport and sex on mental health.",
      "If it is really the experience, more than the drug, that is causing improvement of mental health, are there ways for me as a creative individual to conduct such an transformative experience for people that need it? Is there a way to include technology into this process?",
      "As far as I have learned, the underlying mechanisms for relief of depressive symptoms or anxiety are concerning serotonin (receptors), or an altered state of consciousness where the activity of the DMN is decreased which allows us to think less and be more in the now.",
      "That serotonin, a neurotransmitter that makes us happy, is involved in mechanisms for enhancement of mental health is not surprising. Noticeble is, that serotonin (receptors) are involved in all the topics that I discussed before.",
      "Something I would be curious about is, if the alteration of the activity in the vagus nerve can modulate the amount of serotonin receptors, by downregulating them. If that's the case this would show similar mechanisms as in a psychedelic state.",
      "On the other hand, the decrease in the activity in the DMN is more surprising to me. What does it mean to have less activity in the DMN? If we are not in our mind, where are we? Why can’t we find relief of symptoms when we are in the thinking mind?",
      "These findings suggest that we can’t “think our mental problems away”, but that we need to activate other parts of the brain in order to feel relief.  ",
      "It fascinates me to think about the possibility that the brain is merely a reducing valve, filtering the infinitely larger input we are receiving from the cosmos, as Aldous Huxley hypothesized in “The Doors of Perception” after his first psychedelic experience.",
      "Is it possible that in order to reduce mental suffering around the globe, we need to change our mindset about how we perceive mental health or the mind in general? In Eastern philosophies of Buddhism, Taoism and traditional Chinese medicine, for example, it is believed that physical, mental and emotional health is interconnected with each other.",
      "Could it be that we, in the Western world, are misperceiving the way our health works, by treating mental, emotional and physical health separately?",
      "I find it interesting to observe how we as humans see our mind, that which distinguishes ourselves from animals, as our biggest pride. I can understand why it is useful, but I can also see it as a burden. Mental health disorders are a typical example on how the mind can be so out of control that it takes over lifes.",
      "The mental health pandemic is forcing us to ask other questions than we did before, which consequently, lead us to new roads. Personally I am very curious where these roads will lead us. As a species, we are evolving, and I believe that gaining knowledge on how our mind works is an important step in our evolution.",
      "I envision a future where humankind takes mental and emotional health as seriously as the physical. A place where we will live in peace with ourselves and our surroundings. A place where suppression of emotions won’t be the norm anymore, but where instead, everyone is allowed and encouraged to feel, express and learn more about him/herself.",
      "I believe that the increase of empathy can lead to major changes in our society.",
    ];
  }

  preload() {
    this.mySound = loadSound("assets/songs/light.mp3");
  }

  setup() {
    textSize(60);
    this.y = windowHeight / 3;
    this.textWidth = 500;
  }

  draw() {
    background(255);
    fill(0);
    text(this.title, windowWidth / 2, 80);
    if (!this.mySound.isPlaying()) {
      this.mySound.play();
    }

    push();
    textSize(20);
    this.text.map((sentence, index) => {
      text(
        sentence,
        (windowWidth - this.textWidth) / 2,
        this.y + index * 300,
        this.textWidth
      );
    });
    pop();
  }

  mouseWheel(event) {
    if (event.deltaY > 0) {
      this.y -= 8;
    } else {
      this.y += 8;
    }
  }

  mousePressed() {
    this.mySound.fade(0, 3);
    this.chapterManager.next();
  }
}
