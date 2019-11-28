<template>
  <div>
    <div v-if="counter < $store.state.testquiz[$store.state.quizname].length">
      {{$store.state.testquiz[$store.state.quizname][counter].rightanswer}}
      <h2>Fråga {{counter+1}} av {{$store.state.testquiz[$store.state.quizname].length}}</h2>
      <div>
        <div>{{$store.state.testquiz[$store.state.quizname][counter].question}}</div>
        <div>
          <input
            type="button"
            :value="$store.state.testquiz[$store.state.quizname][counter].a1"
            v-on:click="nextQuestion"
          />
          <input
            type="button"
            :value="$store.state.testquiz[$store.state.quizname][counter].a2"
            v-on:click="nextQuestion"
          />
          <input
            type="button"
            :value="$store.state.testquiz[$store.state.quizname][counter].a3"
            v-on:click="nextQuestion"
          />
          <input
            type="button"
            :value="$store.state.testquiz[$store.state.quizname][counter].a4"
            v-on:click="nextQuestion"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Du fick {{points}} av {{$store.state.testquiz[$store.state.quizname].length}} rätt!</h2>
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
    }
  },
  methods: {
    nextQuestion(e) {
      const answerValue = e.target.value
      const correct = this.$store.state.testquiz[this.$store.state.quizname][
        this.counter
      ].rightanswer
      if (answerValue === correct) {
        this.points++
        console.log(this.points)
      }
      this.counter++
    }
  }
}
</script>

<style scoped>
.answers {
  margin-bottom: 15px;
  margin-top: 5px;
}
</style>
