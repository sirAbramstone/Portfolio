<template>
  <div id="app">
      <main-menu></main-menu>
      <main-home></main-home>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu.vue';
  import MainHome from './components/MainHome';

  export default {
    name: 'app',
    components: {
      'main-menu': MainMenu,
      'main-home': MainHome
    }
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
