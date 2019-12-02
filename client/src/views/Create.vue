<template>
  <div class="create">
    <h1>Create a quiz</h1>
    <CreateQuiz />
  </div>
</template>

<script>
import CreateQuiz from "@/components/CreateQuiz.vue"
export default {
  name: "Create",
  components: {
    CreateQuiz
  }
}
</script>