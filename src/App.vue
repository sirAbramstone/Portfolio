<template>
  <div id="app">
      <Preloader v-if="loading"></Preloader>
      <router-view v-else="loading"></router-view>
  </div>
</template>

<script>
  import Preloader from './components/Preloader';

  export default {
    name: 'app',
    components: {
      Preloader
    },
    data: function () {
      return {
        loading: true
      }
   },
    mounted: function () {
      window.setInterval(function () {
        this.loading = false
      }.bind(this), 750)
    }
  }
</script>

<style lang="scss">
  @import "styles/main";

  body {
    margin: 0;
    padding: 0;
    background-color: $dark;
    color: $white;
  }

  nav li {
    list-style-type: none;
  }
</style>
