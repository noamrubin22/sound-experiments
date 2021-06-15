class Breath {
  constructor() {
    this.title = "The Breath";
    this.text = [
      "Studies show that individuals suffering from depression, anxiety, and chronic pain are benefiting from regular mindfulness meditation training. This shows itself in extreme improvement in symptom severity (1).",
      "Besides, yoga-based interventions are found to be effective in treating depression ranging from mild depressive symptoms to major depressive disorder (2). Those practices seem to stimulate the vagus nerve directly, by increasing the vagal tone (3,4). This leads to an improvement of mood, cognitive functions, stress coping, autonomic regulation and bowel function (4,5).",
      "A recent study showed that even patients who did not respond to antidepressants showed a significant reduction of depressive and anxiety symptoms compared to the control group after practicing an ancient breathing technique, Sudarshan Kriya Yoga, for 8 weeks (6).",
      "On the other hand, studies show that people suffering from chronic respiratory conditions like COPD are found to have depression up to four times more frequently than control subjects. The occurrence of anxiety disorders was also found to be higher in patients compared to healthy subjects (7).",
      "Reading these studies makes me tend to believe that working with the breath could be a powerful tool for enhancing well-being. Before we continue to the next topic I would like to talk about a novel breathing technique that has intrigued my interest. It’s called Holotropic Breathwork (HB).",
      "HB is a psychotherapeutic procedure that involves putting the body in a state of voluntary hyperventilation by breathing deeply and mindfully, with the support of music, touch, and elective bodywork (ie., releasing muscular tension or spasm by manual pressure) (8). Sessions, ranging from 1 to 3 hours, usually last much longer than talk-based psychotherapy sessions.",
      "The inventor of HB, Grof states: “We have seen over the years numerous instances when participants in the workshops and the training were able to break out of depression that had lasted several years, overcome various phobias, free themselves from consuming irrational feelings, and radically improve their self-confidence and self-esteem. We have also witnessed on many occasions disappearance of severe psychosomatic pains, including migraine headaches, and radical and lasting improvements or even complete clearing of psychogenic asthma.",
      "Though HB hasn’t been researched that much yet, I found some other articles that may help understand the mechanisms behind this mysterious breathing technique.",
      "So, what is happening in the body during hyperventilation is that it increases the amount of oxygen in the lungs, and at the same time slows down the blood flow by narrowing the blood vessels in certain parts of the body. Besides, it eliminates carbon dioxide (CO2) which causes the pH of the blood to increase. The blood becomes more alkaline and that is why it is bringing relatively less oxygen to other tissues (11). Less oxygen causes the body to enter “the fight or flight mode”, a state wherein the sympathetic nervous system is activated and releases adrenaline and noradrenaline (8). (Wim Hof, the Iceman is demonstrating this as well).",
      "Besides physiological changes, hyperventilation is found to cause cognitive changes (12), and inducing subjectively altered consciousness when lengthened in duration (13, 14). Subjects have experienced ringing/roaring in the ears, clouded vision, and feelings of astonishment, euphoria and lightness. Others have reported to experience distorted perception and subjective “visions”(13). Such phenomena may be due to the short period of unusually low activity in the frontal cortex, a “transient hypofrontality”. EEG studies demonstrate that during hyperventilation, the brain activation rhythms slow down, with strong increases in lower frequency activity (up to 4Hz and 4-8Hz) (10). Transient hypofrontality has been hypnotized to underlie a number of other altered states of consciousness, such as half-asleep states, meditation, and some drug-induced states (15,16).",
      "So what do these physiological and cognitive changes mean? and how do  they enhance well-being? Is it somehow related to the vagus nerve? Does the activation of the sympathetic nervous system play a role?",
      "I think it’s good to state that there is still a very mysterious side to why HB is found to relieve depressive symptoms in people and that more research needs to be done for HB to be considered as a useful alternative treatment for common mental health disorders (17). One thing that I can assume is that it could be related to the altered state of consciousness that it evokes. Prof. Grof invented this breathing technique because he found improved mental health after the use of psychedelics and wanted to induce a state without them.. This brings us to the next topic I want to discuss…",
    ];
    this.chapterManager = chapterManager;
    this.index = 0;
  }

  preload() {
    this.mySound = loadSound("assets/songs/sit.mp3");
  }

  setup() {
    textAlign(CENTER, CENTER);
    this.soundVisual = new SoundVisual(
      this.mySound,
      "darkgreen",
      "orange",
      "orange"
    );
    this.y = windowHeight / 3.5;
    this.textWidth = 500;
  }

  draw() {
    textSize(60);
    background(255);
    fill("black");
    text(this.title, windowWidth / 2, 80);
    push();
    textSize(18);
    this.text.map((sentence, index) => {
      text(
        sentence,
        (windowWidth - this.textWidth) / 2,
        this.y + index * 800,
        this.textWidth
      );
    });
    pop();
    if (this.mySound.isPlaying()) {
      this.soundVisual.circleGraph();
    }
  }

  mouseWheel(event) {
    if (event.deltaY > 0) {
      this.y -= 8;
    } else {
      this.y += 8;
    }
    if (!this.mySound.isPlaying()) {
      this.mySound.loop();
    }
  }

  mousePressed() {
    if (this.mySound.isPlaying()) {
      this.chapterManager.next();
      this.mySound.fade(0, 1.5);
    }
  }
}
