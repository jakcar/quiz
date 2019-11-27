<template>
  <div class="quizzez">
    <h1>This is the quizlist page</h1>
    <QuizList />
  </div>
</template>

<script>
import QuizList from "@/components/QuizList.vue"

export default {
  name: "Quizzez",
  components: {
    QuizList
  }
}
</script>