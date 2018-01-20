<template>
      <div class="wrap_home">
        <main-menu></main-menu>
        <div class="home_content">
          <div v-for="text in texts">
            <div v-bind:class="myclass" v-on:mouseover="rubber" v-on:mouseleave="myclass='none'">{{ text }}</div>
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
        texts: [
          'Hi,',
          'Im Dmitry',
          'web developer.',
          'Frontend web developer / React / Vue / Angular JS'
        ]
      }
    },
    components: {
      'main-menu': MainMenu,
      'neon': NeonBg,
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
    background: $gradient;
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
