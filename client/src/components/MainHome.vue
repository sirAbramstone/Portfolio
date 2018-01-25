<template>
      <div class="wrap_home">
        <main-menu></main-menu>
        <div class="home_content">
          <div class="wrap_home_content_text">
            <transition-group @after-enter="enter"
                              name="item"
                              @after-leave="leave"
                              tag="div">
              <span class="home_content_text item" v-if="i < idx" v-for="(text, i) in fullText.split('')" :key="i">
                {{charSpan(text)}}
              </span>
            </transition-group>
            <div class="home_content_text_small str">React / Vue / And many other stuff</div>
          </div>
          <Button v-bind:class="btnCls" btn_msg="contact me" v-on:click="run" :disabled="idx > 0 && idx < fullText.split('').length"></Button>
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
        idx: 0,
        btnCls: {
          button: true,
          btn_home: true
        },
        fullText: "Hi, I'm Danil, web developer",
        texts: [
          'Hi,',
          'I`m Danil,',
          'web developer.'
        ],

      }
    },
    components: {
      'main-menu': MainMenu,
      'neon': NeonBg,
      'Button': Button
    },
    methods: {
      charSpan: function (text) {
        return text.split('').map(function (s) {
          return s}).join('')
      },
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
          display: inline-block;
          font-size: $font-size-large;
          line-height: 1em;
          font-family:'Raleway';

          &:nth-child(2) .char:nth-child(4), &:nth-child(3) .char:nth-child(4) {
            padding-left: 15px;
          }
        }
        .home_content_text_small {
          font-size: $font-size-small;
          font-family: 'Open Sans', sans-serif;
          color: $icon;
          margin-top: 10px;
          margin-bottom: 30px;
          letter-spacing: 0.1em;
        }
      }
    .char {
      display: inline-block;
      transition: transform 1s ease-in-out;
      font-family:'Raleway';

      &:hover {
        animation-name: rubberBand;
        animation-duration: 1.6s;
        animation-fill-mode: both;
        color: $acid;
      }
    }
  }


  .item-enter-active,
  .item-leave-active {
    transition: opacity .1s;
  }

  .item-enter,
  .item-leave-to {
    opacity: 0;
  }
</style>
