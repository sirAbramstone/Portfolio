<template>
      <div class="wrap_home">
        <main-menu></main-menu>
        <div class="home_content">
          <div class="h_text1">
            <div
              v-bind:class="myclass"
              v-on:mouseover="rubber"
              v-on:mouseleave="myclass='none'"
            >Hi,
            </div>
          </div>
          <div class="h_text2">
            <div>I'm Dmitry,</div>
          </div>
          <div class="h_text3">
            <div>web developer.</div>
          </div>
          <div class="h_smalltxt">
            <div>Frontend web developer / React / Vue / Angular JS</div>
          </div>
          <button>contact me</button>
        </div>
      </div>
</template>

<script>
  import MainMenu from './MainMenu';

  export default {
    name: 'Home',
    data () {
      return {
        myclass: 'none'
      }
    },
    components: {
      'main-menu': MainMenu
    },
    methods: {
      rubber: function () {
        this.myclass = 'rubberBand'
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .wrap_home {
    background-color: $dark;
    width: 100%;
    display: flex;

      .home_content {
        display: inherit;
        flex-direction: column;
        justify-content: center;
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
