<template>
  <div class="wrap_contact">
    <main-menu></main-menu>
    <div class="wrap_form">
      <div class="contact_content">
        <div class="wrap_contact_content_text">
          <!--text animation-->
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
          <div class="contact_content_text_small">If you have any questions, please don’t hesitate to contact using form below…
          </div>
        </div>
      </div>
<!--      contact form-->
      <Form></Form>
    </div>
<!--    google maps api-->
    <!--todo resize map-->
    <div class="wrap_google">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.2464401408356!2d39.00952081521264!3d45.060511668310156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04573624ccb7d%3A0x74acdd15ab9f53c8!2z0YPQuy4g0JfQuNC_0L7QstGB0LrQsNGPLCA0Miwg0JrRgNCw0YHQvdC-0LTQsNGALCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwgMzUwMDAw!5e0!3m2!1sru!2sru!4v1517402523657" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  import MainMenu from './MainMenu';
  import Form from './Form';

  export default {
    name: 'Contact',
    components: {
      'main-menu': MainMenu,
      'Form': Form
    },

    data() {
      return {
        fullText: "Contact me"
      }
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
      // Methods for char animation
      // todo format code
      init() {
        const chars = document.querySelectorAll('.blast-root .blast');
        let a = 0;
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
            e.target.classList.add('animated', 'rubberBand');

            const events = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            for (event of events.split(' ')) {
              e.target.addEventListener(event, function handler() {
                e.target.classList.remove('animated', 'rubberBand');
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

  @import "../styles/main";
  /*todo доделать адаптив*/
  iframe {
    height: 100%;
    filter: opacity(.5) saturate(30%);;
  }

  .wrap_google{
    width: 40%;
  }

  .wrap_contact {
    display: flex;
    height: 100vh;
    background: $gradient;
    overflow: hidden;

    .wrap_form {
      display: inherit;
      padding-left: $pad-l;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 5%;
    }

    .form {
      @include flex-box;
      @import "../styles/main.scss";
    }
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
