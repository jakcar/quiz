<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="nav">
      <button><router-link to="/">Home</router-link></button>
      <button><router-link to="/create">Create quiz</router-link></button>
      <button><router-link to="/quizzez">All quizzez</router-link></button>
    </div>
  </div>
</template>

<script>


export default {
  name: "home",
  components: {}
}
</script>

<style scoped>
  #nav {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: auto;
  }

</style>
