<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">

  body {
    margin: 0;
    padding: 0;
  }
  #app {
    display: flex;
  }
  nav li {
    list-style-type: none;
  }
</style>
