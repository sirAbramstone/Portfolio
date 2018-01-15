<template>
  <div id="app">
      <main-menu></main-menu>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu.vue';

  export default {
    name: 'app',
    components: {
      'main-menu': MainMenu
    }
  }
</script>

<style lang="scss">

  body {
    margin: 0;
    padding: 0;
  }
  nav li {
    list-style-type: none;
  }
</style>
