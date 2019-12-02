<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Neucha|Open+Sans&display=swap');

@mixin button-bg($bg) {
  background: $bg;
  &:hover {
    background:darken($bg,8%);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  &:active {
    background:darken($bg,25%);
  } 
}

#app {
  margin:0 auto;
  width:800px;
  text-align:center;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.largebtn {
 color:white;
 text-decoration:none;
 padding:5px 10px;
 border-radius:3px;
 font-family: 'Neucha';
 font-size:2em;
 margin-bottom: 7px;
}

.smallbtn {
 color:white;
 text-decoration:none;
 padding:2px 5px;
 border-radius:3px;
 font-family: 'Neucha';
 font-size:1.2em;
}

.answerbtn {
 color:white;
 text-decoration:none;
 padding:4px 8px;
 border-radius:3px;
 font-family: 'Open Sans';
 font-size:1em;
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

.btn-yellow{
   @include button-bg(#f1c40f);
}

.btn-red {
   @include button-bg(#e74c3c);
}

h1 {
  font-family: 'Neucha';
  font-size:4em;
}

a {
  text-decoration: none;
}


</style>

<script>
export default {
}
</script>
