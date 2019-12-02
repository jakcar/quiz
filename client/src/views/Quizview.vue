<template>
  <div class="quizview">
    <Quiz />
  </div>
</template>

<script>
import Quiz from "@/components/Quiz.vue"

export default {
  name: "Quizview",
  components: {
    Quiz
  },
  data() {
    return {
      name: this.$route.params.name
    }
  },
  created() {
    this.$store.commit("setQuizName", this.name)
  }
}
</script>