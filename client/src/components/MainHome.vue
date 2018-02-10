<template>
  <div class="wrap_home">
    <main-menu/>
    <div class="home_content">
      <div class="wrap_home_content_text">
        <div class="blast-root">
          <template v-for="(char, i) in chars">
            <span
              class="blast"
              aria-hidden="true"
              :key="'span-' + i"
              v-html="char"
              v-bind:class="{ space: char === ' ' }"
            >
            </span>
            <br v-if="char === ' ' && chars[i - 1] === ','" :key="'br-' + i"/>
          </template>
        </div>
        <div class="home_content_text_small str"><p>React / Vue / And many other stuff</p></div>
      </div>
      <router-link class="flat-button" v-bind:to="'/contact'">
        <Button v-bind:class="btnCls" btn_msg="contact me"></Button>
      </router-link>
    </div>
    <neon-bg/>
  </div>
</template>

<script>

  import MainMenu from './MainMenu';
  import NeonBg from './NeonBg';
  import Button from './Button';

  export default {
    name: 'Home',

    data() {
      return {
        myclass: 'none',
        btnCls: {
          button: true,
          btn_home: true
        },
        fullText: "Hi, I'm Danil, web developer"
      };
    },

    computed: {
      chars: function () {
        return this.fullText.split('')
      }
    },

    components: {
      'main-menu': MainMenu,
      'neon-bg': NeonBg,
      'Button': Button
    },

    mounted() {
      setTimeout(() => this.init(), 300)
    },

    methods: {

      /**
       * Initialization animation of fullText
       */
      init() {
        const chars = document.querySelectorAll('.blast-root .blast')
        let a = 0
        document.querySelector('.blast-root').style.pointerEvents = 'none';
        for (let char of chars) {
          setTimeout(() => char.classList.add('animated', 'bounceIn'), a);
          if (a < 1200) {
            a += 100
          } else {
            a += 80
          }
        }
        setTimeout(() => this.initHoverEffects(chars), a + 400)
      },

      /**
       * Initialization of hover effects, after animation.
       */
      initHoverEffects(chars) {
        for (let char of chars) {
          char.classList.remove('animated', 'bounceIn');
          char.style.opacity = 1;
          document.querySelector('.blast-root').style.pointerEvents = '';

          char.addEventListener('mouseenter', (e) => {
            e.target.classList.add('animated', 'rubberBand')

            const events = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

            for (event of events.split(' ')) {
              e.target.addEventListener(event, function handler() {
                e.target.classList.remove('animated', 'rubberBand')
                e.target.removeEventListener(event, handler)
              })
            }
          })
        }
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
      padding-left: $pad-l;
      .wrap_home_content_text {
        padding-bottom: 3%;
        min-width: 480px;
      }
      .blast {
        display: inline-block;
        font-size: $font-size-large;
        line-height: 1em;
        font-family: 'Raleway', serif;
        transition: all .3s ease-out;
        opacity: 0;
        &.space {
          width: 15px;
        }
        &:hover {
          color: $acid;
        }

        .blast {
          display: inline-block;
          font-size: $font-size-large;
          line-height: 1em;
          font-family: 'Raleway', serif;
          transition: all .3s ease-out;
          opacity: 0;
          &.space {
            width: 15px;
          }
          &:hover {
            color: $acid;
          }
          .home_content_text_small {
            font-size: $font-size-small;
            font-family: 'Open Sans', sans-serif;
            color: $icon;
            margin-top: 10px;
            margin-bottom: 30px;
          }
        }
      }
      .flat-button {
        width: 150px;
      }
    }
  }
</style>
