<template>
      <div class="wrap_home">
        <main-menu></main-menu>
        <div class="home_content">
          <div class="home_content_h_text1">
            <div
              v-bind:class="myclass"
              v-on:mouseover="rubber"
              v-on:mouseleave="myclass='none'"
            >Hi,
            </div>
          </div>
          <div class="home_content_h_text2">
            <div>I'm Dmitry,</div>
          </div>
          <div class="home_content_h_text3">
            <div>web developer.</div>
          </div>
          <div class="home_content_h_smalltxt">
            <div>Frontend web developer / React / Vue / Angular JS</div>
          </div>
          <Button></Button>
        </div>
      </div>
</template>

<script>
  import MainMenu from './MainMenu';
  import Button from './Button';

  export default {
    name: 'Home',
    data () {
      return {
        myclass: 'none'
      }
    },
    components: {
      'main-menu': MainMenu,
      'Button': Button 
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
    background: $background;
    width: 100%;
    display: flex;

      .home_content {
        display: inherit;
        flex-direction: column;
        justify-content: center;
        padding-left: 5%;
        font-size: $font-size-large;
        letter-spacing: 0.001em;
        line-height: 1em;
        width: 38%;
        font-weight: bolder;

          & span {
            font-size: $font-size-large;
          }

          .home_content_h_smalltxt {
            color: $stack;
            font-size: $font-size-small;
            letter-spacing: inherit;
            font-weight: 100;
          }

          & button {
            background-color: $dark;
          }
      }
  }
</style>
