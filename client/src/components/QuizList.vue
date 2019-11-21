<template>
  <div>
    <div v-for="quiz in $store.state.quiz" :key="quiz.ID">{{quiz.name}}{{quiz.ID}}</div>
    <div v-for="question in $store.state.questions" :key="question.question">
      <ul>
        {{question.question}}
        <li>{{question.a1}}</li>
        <li>{{question.a2}}</li>
        <li>{{question.a3}}</li>
        <li>{{question.a4}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizList"
}
</script>

<style scoped>
</style>
