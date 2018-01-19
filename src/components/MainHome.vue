<template>
      <div class="wrap_home">
        <main-menu></main-menu>
        <div class="home_content">
          <div class="h_text1"><span>Hi,</span></div>
          <div class="h_text2"><span>I'm Dmitry,</span></div>
          <div class="h_text3"><span>web developer.</span></div>
          <div class="h_smalltxt"><span>Frontend web developer / React / Vue / Angular JS</span></div>
          <button>contact me</button>
        </div>
      </div>
</template>

<script>
  import MainMenu from './MainMenu';

  export default {
    name: 'Home',
    components: {
      'main-menu': MainMenu
    }
  }
</script>

<style lang="scss">
  @import "../main.scss";

  .wrap_home {
    background-color: $dark;
    width: 100%;
    display: flex;

      .home_content {
        @include flex-content;
        padding-left: 5%;

          & span {
            font-size: 54px;
          }
          .h_smalltxt span{
            font-size: 14px;
          }
          & button {
            background-color: $dark;
          }
      }
  }
</style>
