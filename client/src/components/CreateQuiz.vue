<template>
  <div class="wrapper">
    Namn:
    <br />
    <input v-model="quizname" />
    <div class="questions" v-for="(question, index) in questions" :key="question.index">
      <div class="questions">
        Fråga:
        <input v-model="questions[index].question" />
        Svar 1:
        <input v-model="questions[index].a1" />
        Svar 2:
        <input v-model="questions[index].a2" />
        Svar 3:
        <input v-model="questions[index].a3" />
        Svar 4:
        <input v-model="questions[index].a4" />
        Rätt svar:
        <input v-model="questions[index].rightanswer" />
      </div>
    </div>
    <div class="form-buttons">
      <input type="button" value="Ny fråga" v-on:click="addQuestion" />
      <input
        type="button"
        value="Skicka"
        v-on:click="$store.dispatch('postQuiz', {quizname, questions})"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateQuiz",
  data() {
    return {
      quizname: "",
      questions: [
        {
          question: "",
          a1: "",
          a2: "",
          a3: "",
          a4: "",
          rightanswer: ""
        }
      ]
    }
  },

  methods: {
    addQuestion() {
      this.questions.push({})
    }
  }
}
</script>

<style scoped>
.questions {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
  text-align: left;
}

input {
  margin-bottom: 10px;
}
</style>