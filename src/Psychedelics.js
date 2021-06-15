class Psychedelics {
  constructor(chapterManager) {
    this.chapterManager = chapterManager;
    this.title = "Psychedelics";
    this.tree = [];
    this.counter = 0;
    this.text = [
      "Psychedelic drugs are a mystery. Their capacity to induce an altered state of consciousness where one experiences hallucinations or visions, ecstasy, dissolution of self boundaries, distortions of perception and union with the world, is deeply fascinating.  As plant-derived materials, they have been used traditionally by many indigenous cultures in medical and religious practices for centuries, if not millenia (1).",
      "Throughout the 1960s and 1970s LSD and related psychedelic drugs started to become increasingly associated with cultural rebellion and were therefore depicted as highly dangerous in the media. By about 1970, psychedelic drugs became prohibited and research on the effects in humans severely restricted. The interests in the therapeutic use of these drugs faded, leaving many areas unexplored and questions unanswered (2).",
      "These days, things have changed. The therapeutic benefits of psychedelics are getting more recognition and consequently, as funding becomes available, research is experiencing a renaissance after years of stagnation.",
      "An increasing number of clinical studies are providing evidence for quick and sustained relief from addiction (3,4,5), PTSD (5,6,7,8), depression (9,10) and end-of-life anxiety after already one or two psychedelic drug experiences (11, 12, 13, 14).",
      "The common mechanism of psychedelic drugs is the activation of serotonin (5-HT2A) receptors (15). Administration of psychedelic drugs can lead to a decrease of those receptors, by being internalized into the cell. This is called downregulation. The amount of serotonin receptors seems to be correlated with anxiety and the difficulties in coping with stress (16). These findings suggest that the effects of hallucinogens on depression and anxiety could be related to the downregulation of the serotonin receptors (2).",
      "Another consequence of the activation of serotonin receptors is an increase in glutamate levels in the prefrontal cortex. Current models of emotion regulation show that the prefrontal cortex is connected to the amygdala (region associated with emotional processes) and the dorsal raphe (region where serotonin receptors are located), and is able to control emotional and stress responses through this circuitry (17, 18).",
      "Patients with depression or high trait anxiety have shown reduced prefrontal glutamate levels in response to emotional stimuli. Besides, studies suggest that they might suffer from a decreased inhibition of amygdala activity (19, 20).",
      "Additionally, treatment with selective serotonin reuptake inhibitors (SSRIs) increases the functional connectivity between the prefrontal cortex and amygdala, demonstrating that normalization of this dysregulated connection could be important in recovering from depression (21).",
      "Another remarkable finding is that the Default Mode Network (DMN), a network of hub regions that are activated during mental introspection (involved in thinking about the past, future, daydreaming) is decreasing in activity while taking psychedelics (28, 29). This could be explained by the increased glutamate levels in the deep-layer neurons, which are known to be rich in 5-HT2a receptors (29).",
      "Furthermore, the increase of glutamate levels is found to enhance neuroplasticity, which is found to be dysfunctional in depressed patients (22). It is proposed that a normalization of the prefrontal - limbic circuitry through the increase of glutamaat and neuroplasticity is the common therapeutic mechanism of psychedelics, although this hypothesis still needs to be validated (2).",
      "Another interesting finding is that drugs that increase neuroplasticity, such as psychedelics, seem to be particularly efficient in combination with psychotherapeutic interventions (23). It seems like it is not the drug, but the experience that the drug can facilitate, that results in positive therapeutic outcomes (24, 25, 26, 27).",
      "Remarkably, the use of psychedelic drugs goes hand in hand with music. This is a constant feature practiced within indigineous cultures and therapy (30, 31). Studies have shown that psychedelics are significantly regulating music-evoked imagination (32), music-evoked emotion (33), and perceived personal meaningfulness of music (34).",
      "Patients undergoing psychedelic therapy often indicate that music has influenced their experience significantly (35). Music is shown to have a central role in psychedelic therapy by providing guidance, support, direction and intensifying emotions. Moreover, the experience of music, and not drug intensity, is found to be predictive for reductions in depression 1 week after the experience (36).",
    ];
  }

  preload() {
    this.mySound = loadSound("assets/songs/light.mp3");
  }

  setup() {
    textAlign(CENTER);
    textSize(60);
    this.a = createVector(windowWidth / 2, windowHeight);
    this.b = createVector(windowWidth / 2, windowHeight - 100);
    this.root = new Branch(this.a, this.b);
    this.tree[0] = this.root;
    this.textWidth = 600;
    this.x = (windowWidth - this.textWidth) / 2;
    this.y = windowHeight / 3;
  }

  draw() {
    background(255);
    fill(10);
    text(this.title, windowWidth / 2, 80);

    if (!this.mySound.isPlaying()) {
      this.mySound.loop();
    }

    for (let i = 0; i < this.tree.length; i++) {
      this.tree[i].show();
    }

    push();
    textSize(18);
    this.text.map((sentence, index) => {
      text(sentence, this.x + index * windowWidth, this.y, this.textWidth);
    });
    pop();
  }

  mousePressed() {
    this.x -= windowWidth;
    this.counter++;

    if (this.counter >= this.text.length) {
      this.mySound.fade(0, 1.5);
      this.chapterManager.next();
    }

    for (let i = this.tree.length - 1; i >= 0; i--) {
      if (!this.tree[i].finished) {
        this.tree.push(this.tree[i].branchA());
        this.tree.push(this.tree[i].branchB());
      }
      this.tree[i].finished = true;
    }
  }
}
