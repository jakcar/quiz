<template>
  <div class="wrapper">
    <form v-on:submit.prevent="$store.dispatch('postQuiz', {quizname, questions}), $router.push('/quizzez')">
      <h4>Quiz name:</h4>
      <input class="text" v-model="quizname" required />
      <div v-for="(question, index) in questions" :key="index">
          <h4>Question {{index + 1}}:</h4>
          <input class="text"  v-model="questions[index].question" required />
          <h5>First answer:</h5>
          <input class="text" v-model="questions[index].a1" /> <br>
          <input class="text" v-if="questions[index].a1" type="radio" id="one" v-model="questions[index].rightanswer" v-bind:value="questions[index].a1" />
         <h5>Second answer:</h5>
          <input class="text" v-model="questions[index].a2" required /> <br>
          <input class="text" v-if="questions[index].a2" type="radio" id="two" v-model="questions[index].rightanswer" v-bind:value="questions[index].a2" />
         <h5>Third answer:</h5>
          <input class="text" v-model="questions[index].a3" required /> <br>
          <input class="text" v-if="questions[index].a3" type="radio" id="three" v-model="questions[index].rightanswer" v-bind:value="questions[index].a3" />
         <h5>Fourth answer:</h5>
          <input class="text" v-model="questions[index].a4" required /> <br>
          <input class="text" v-if="questions[index].a4" type="radio" id="four" v-model="questions[index].rightanswer" v-bind:value="questions[index].a4" /> <br>
          Please mark the correct answer.<br> The correct answer is: <br>
          {{questions[index].rightanswer}}<br>
      </div> <br>
      <div class="form-buttons">
        <input class="smallbtn btn-blue" type="button" value="Add question" v-on:click="addQuestion" />
        <input class="smallbtn btn-green" type="submit" value="Submit quiz" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateQuiz",
  data() {
    return {
      quizname: '',
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
      this.i++
      this.questions.push({})
    }
  }
}

</script>

<style scoped>

.text {
  margin-bottom: 10px;
  width: 200px;
}
</style>