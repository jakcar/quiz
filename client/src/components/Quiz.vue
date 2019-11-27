<template>
  <div>
        <div v-for="question in $store.state.testquiz[$store.state.quizname]" :key="question.id">
            {{question.question}}
            <div>
                <button v-on:click="nextQuestion">
                {{question.a1}}
                </button>
                <button>
                {{question.a2}}
                </button>
                <button>
                {{question.a3}}
                </button>
                <button>
                {{question.a4}}
                </button>
            </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Quiz",
   data() {
    return {
        hello: false
    }
  },
  methods: {
    nextQuestion() {
        this.$store.state.testquiz[this.$store.state.quizname].splice(0, 1)
    }
  }
}

</script>

<style scoped>
</style>
