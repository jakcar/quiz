<template>
  <div class="home">
    <h1>Quizd!</h1>
    <p v-if="$store.state.quiznames === null">Loading...</p>
    <div v-else id="nav">
      <router-link to="/create" class="largebtn btn-blue">Create quiz</router-link>
      <router-link to="/quizzez" class="largebtn btn-blue">All quizzez</router-link>
      <a class="largebtn btn-blue" v-on:click="randomizeName">Random quiz</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    randomizeName() {
      const randomQuizNumber = Math.floor(
        Math.random() * this.$store.state.quiznames.length
      )
      const randomQuizName = this.$store.state.quiznames[randomQuizNumber]
      this.$router.push("/quiz/" + randomQuizName)
    }
  },
  created() {
    this.$store.dispatch("fetchTestquiz")
  }
}
</script>

<style>
</style>
