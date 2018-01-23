<template>
      <div class="wrap_home">
        <main-menu></main-menu>
        <div class="home_content">
          <div class="wrap_home_content_text">
            <div v-for="text in texts">
              <div class="home_content_text"
                   v-bind:class="myclass"
                   v-on:mouseover="rubber"
                   v-on:mouseleave="myclass='none'"
                   v-html="spanChar(text)"></div>
            </div>
            <div class="home_content_text_small str">React / Vue / And many other stuff</div>
          </div>
          <Button v-bind:class="btnCls" btn_msg="contact me"></Button>
        </div>
        <neon></neon>
      </div>
</template>

<script>
  import MainMenu from './MainMenu';
  import NeonBg from './NeonBg';
  import Button from './Button';

  export default {
    name: 'Home',
    data () {
      return {
        myclass: 'none',
        btnCls: {
          button: true,
          btn_home: true
        },
      }
    },
    components: {
      'main-menu': MainMenu,
      'neon': NeonBg,
      'Button': Button
    },
    methods: {
      spanChar: function (text) {
        return text.split('').map(function (char) {
          return '<span>' + char + '</span>'}).join('');
      }
    }
  }

  ///Функция для ебаной анимации буковъ




</script>

<style lang="scss">
  @import "../styles/main.scss";

  .wrap_home {
    background: $gradient;
    width: 100%;
    display: flex;

      .home_content {
        display: inherit;
        flex-direction: column;
        justify-content: center;
        padding-left: 5%;

        .home_content_text {
          font-size: $font-size-large;
        }
        .home_content_text_small {
          font-size: $font-size-small;
        }
      }
  }
</style>
