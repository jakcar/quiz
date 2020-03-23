<template>
  <div class="wrapper">
    <div v-if="counter < $store.state.quiz[$store.state.quizname].length">
      <p>{{$store.state.quizname}}, Question {{counter+1}} of {{$store.state.quiz[$store.state.quizname].length}}</p>
      <div class="question">{{$store.state.quiz[$store.state.quizname][counter].question}}</div>
      <div class="answers">
        <input
          type="button"
          class="answerbtn btn-darkgreen"
          :value="$store.state.quiz[$store.state.quizname][counter].a1"
          v-on:click="nextQuestion"
        />
        <input
          type="button"
          class="answerbtn btn-darkgreen"
          :value="$store.state.quiz[$store.state.quizname][counter].a2"
          v-on:click="nextQuestion"
        />
        <input
          type="button"
          class="answerbtn btn-darkgreen"
          :value="$store.state.quiz[$store.state.quizname][counter].a3"
          v-on:click="nextQuestion"
        />
        <input
          type="button"
          class="answerbtn btn-darkgreen"
          :value="$store.state.quiz[$store.state.quizname][counter].a4"
          v-on:click="nextQuestion"
        />
      </div>
    </div>
    <div v-else>
      <h1>Your score:</h1>
      <h2>{{points}} / {{$store.state.quiz[$store.state.quizname].length}} correct answers</h2>
      <div id="nav">
        <router-link to="/" class="largebtn btn-green">Ok</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      counter: 0,
      points: 0
    };
  },
  methods: {
    nextQuestion(e) {
      const answerValue = e.target.value;
      const correct = this.$store.state.quiz[this.$store.state.quizname][
        this.counter
      ].rightanswer;
      if (answerValue === correct) {
        this.points++;
      }
      this.counter++;
    }
  }
};
</script>

<style scoped>
.answers {
  margin-bottom: 15px;
  margin-top: 15px;
}

.question {
  font-weight: bold;
}

.wrapper {
  margin-top: 50px;
}
</style>
