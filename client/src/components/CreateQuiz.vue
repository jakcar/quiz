<template>
  <div class="wrapper">
    <form v-on:submit.prevent="$store.dispatch('postQuiz', {quizname, questions})">
      Namn:
      <br />
      <input v-model="quizname" required />
      <div class="questions" v-for="(question, index) in questions" :key="question.index">
        <div class="questions">
          Fråga:
          <input v-model="questions[index].question" required />
          Svar 1:
          <input v-model="questions[index].a1" required />
          Svar 2:
          <input v-model="questions[index].a2" required />
          Svar 3:
          <input v-model="questions[index].a3" required />
          Svar 4:
          <input v-model="questions[index].a4" required />
          Rätt svar:
          <input v-model="questions[index].rightanswer" required />
        </div>
      </div>
      <div class="form-buttons">
        <input type="button" value="Ny fråga" v-on:click="addQuestion" />
        <input type="submit" value="Skicka" />
      </div>
    </form>
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

//Gör rightanswer till radioknappar
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