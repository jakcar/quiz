<template>
  <div class="create">
    <h1>This is the create page</h1>
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