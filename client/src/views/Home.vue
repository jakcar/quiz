<template>
  <div class="home">
    <h1>Quizd!</h1>
    <div id="nav">
      <router-link to="/create" class="largebtn btn-blue">Create quiz</router-link>
      <router-link to="/quizzez" class="largebtn btn-blue">All quizzez</router-link>
      <router-link to="/quizzez" class="largebtn btn-blue">Random quiz</router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: "home",
  components: {}
}
</script>

<style>

</style>
