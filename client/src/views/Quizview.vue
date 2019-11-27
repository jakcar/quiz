<template>
  <div class="quizview">
    <h1>{{$store.state.quizname}}</h1>
    <Quiz />
  </div>
</template>

<script>
import Quiz from "@/components/Quiz.vue"

export default {
  name: "Quizview",
  components: {
    Quiz
  }
}
</script>