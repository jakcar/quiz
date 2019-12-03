<template>
  <div class="quizview">
    <p v-if="$store.state.quiznames === null">Loading...</p>
    <Quiz v-else />
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
    this.$store.dispatch("fetchTestquiz")
    this.$store.commit("setQuizName", this.name)
  }
}
</script>