<template>
  <div>
    {{$store.state.testquiz}}
    <!-- <div v-for="quiz in $store.state.quiz" :key="quiz.ID">{{quiz.name}}{{quiz.ID}}</div>
    <div v-for="question in $store.state.questions" :key="question.question">
      <ul></ul>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "QuizList"
}
</script>

<style scoped>
</style>
