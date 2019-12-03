<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Neucha|Open+Sans&display=swap");

@mixin button-bg($bg) {
  background: $bg;
  &:hover {
    background: darken($bg, 8%);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  &:active {
    background: darken($bg, 25%);
  }
}

#app {
  margin: 0 auto;
  width: 400px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.largebtn {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;
  font-family: "Neucha";
  font-size: 2em;
  margin-bottom: 7px;
  border: 0;
}

.smallbtn {
  color: white;
  text-decoration: none;
  padding: 2px 5px;
  border-radius: 3px;
  font-family: "Neucha";
  font-size: 1.2em;
  border: 0;
  margin-right: 5px;
}

.answerbtn {
  color: white;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 3px;
  width: 190px;
  font-family: "Open Sans";
  font-size: 1em;
  border: 0;
  margin-right: 5px;
  margin-bottom: 5px;
}

.btn-green {
  @include button-bg(#2ecc71);
}

.btn-darkgreen {
  @include button-bg(#198145);
}

.btn-blue {
  @include button-bg(#3498db);
}

.btn-yellow {
  @include button-bg(#f1c40f);
}

.btn-red {
  @include button-bg(#e74c3c);
}

h1 {
  font-family: "Neucha";
  font-size: 4em;
  margin: 40px 0px 15px 0px;
}

a {
  text-decoration: none;
}

#nav {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 200px;
}
</style>

<script>
export default {}
</script>
