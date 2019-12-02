<template>
  <div>
    <ul class="quizlist" v-for="names in $store.state.quiznames" :key="names.id">
      <li><router-link v-bind:to ="'/quiz/' + names">{{names}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QuizList",
  data() {
    return {}
  },
    created() {
    this.$store.dispatch("fetchTestquiz")
  }
}
</script>

<style scoped>
.quizlist:hover {
  cursor: pointer;
}

.quizlist {
  list-style-type: none;
}

a:visited, a {
  color: #000;
}

a:hover {
  color: darkgrey;
}
</style>


