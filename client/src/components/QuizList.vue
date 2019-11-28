<template>
  <div>
    <div v-for="names in $store.state.quiznames" :key="names.id">
      <p class="quizlist" :value="names" v-on:click="getQuiz(names)">{{names}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizList",
  data() {
    return {}
  },
  methods: {
    getQuiz(names) {
      console.log(names)
      this.$store.commit("setQuizName", names)
      this.$router.push("/quiz")
    }
  }
}

//path parameter
</script>

<style scoped>
.quizlist:hover {
  cursor: pointer;
}
</style>


