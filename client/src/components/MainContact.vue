<template>
  <div class="wrap_contact">
    <main-menu></main-menu>

    <div class="contact_content">
      <div class="wrap_contact_content_text">
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
          </template>
        </div>
        <div class="contact_content_text_small">If you have any questions, I don`t give a fuck…
        </div>
      </div>
      <Button v-bind:class="btnCls" btn_msg="send"></Button>
    </div>
  </div>
</template>

<script>
  import MainMenu from './MainMenu';
  import Button from './Button';

  export default {
    name: 'Contact',

    data() {
      return {
        btnCls: {
          button: true,
          btn_contact: true
        },
        fullText: "Contact me"
      }
    },

    components: {
      'main-menu': MainMenu,
      'Button': Button
    },

    computed: {
      chars: function () {
        return this.fullText.split('')
      }
    },

    mounted() {
      setTimeout(() => this.init(), 300)
    },

    methods: {

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

  .wrap_contact {
    background: $gradient;
    width: 100%;
    display: flex;

    .contact_content {
      display: inherit;
      flex-direction: column;
      justify-content: center;
      padding-left: 5%;

      .blast {
        display: inline-flex;
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
      }
      .contact_content_text_small {
        font-size: $font-size-small;
        font-family: 'Open Sans', sans-serif;
        color: $white;
        margin-top: 10px;
        margin-bottom: 30px;
      }
    }
  }
</style>
