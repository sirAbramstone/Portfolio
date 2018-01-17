<template>
  <div id="app">
      <main-menu></main-menu>
      <main-home></main-home>
      <main-skills></main-skills>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu.vue';
  import MainHome from './components/MainHome.vue';
  import MainSkills from './components/MainSkills.vue';

  export default {
    name: 'app',
    components: {
      'main-menu': MainMenu,
      'main-home': MainHome,
      'main-skills': MainSkills
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
