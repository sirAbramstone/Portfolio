<template>
	<div class="wrap_about">
		<main-menu></main-menu>

		<div class="about_content">
			<div class="wrap_about_content_text">
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
        <div class="about_content_text"></div>
      </div>
		</div>
	</div>
</template>

<script>
	import MainMenu from './MainMenu';

	export default {
    name: 'About',
    data() {
      return {
        fullText: 'About me',
        texts: [
          'Lorem ipsum dolor sit amet, eam stet elit explicari in, ei sit aperiam expetenda. Laboramus appellantur contentiones pro ut, ad mentitum laboramus elaboraret cum.',
          'Habeo timeam scribentur at pri, eam solum impedit et. Ea vidisse minimum nec, ei causae scribentur mel, quo dictas vituperatoribus an. Per ea erant munere assueverit.',
          'Cu saepe euripidis cum, eum suas postulant consectetuer ea, id mea facilis accusata. At est verterem dissentias, adhuc error posidonium quo cu.',
          'Pri ea nostro denique luptatum, saperet recteque ea sea. Sea ex percipit reformidans, eu quidam quodsi tincidunt eam. Ex per ferri pericula.'
        ]
      }
    },
    computed: {
      chars: function () {
        return this.fullText.split('')
      }
    },

    components: {
      'main-menu': MainMenu
    },

    mounted () {
      setTimeout(() => this.init(), 300)
    },

    methods: {
      init () {
        const chars = document.querySelectorAll('.blast-root .blast')
        let a = 0
        document.querySelector('.blast-root').style.pointerEvents = 'none'
        for (let char of chars) {
          setTimeout(() => char.classList.add('animated', 'bounceIn'), a)
          if (a < 1200) {
            a += 100
          } else {
            a += 80
          }
        }
        setTimeout(() => this.initHoverEffects(chars), a + 400)
      },

      initHoverEffects (chars) {
        for (let char of chars) {
          char.classList.remove('animated', 'bounceIn')
          char.style.opacity = 1
          document.querySelector('.blast-root').style.pointerEvents = ''

          char.addEventListener('mouseenter', (e) => {
            e.target.classList.add('animated', 'rubberBand')

            const events = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

            for (event of events.split(' ')) {
              e.target.addEventListener(event, function handler () {
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
	@import "../styles/main";

	.wrap_about {
		display: flex;
		width: 100%;
		background: $gradient;
		height: $height;

		.about_content {
			@include flex-content;
			letter-spacing: .5px;
			padding-top: 5%;
			padding-left: 5%;

			.blast-root {
        word-spacing: 10px;
      }

      .blast {
        display: inline-block;
        font-size: $font-size-large;
        line-height: 1em;
        font-family: 'Raleway';
        transition: all .3s ease-out;
        opacity: 0;

          &:nth-child(6) {
            padding-left: 15px;
          }

          &:hover {
            animation-name: rubberBand;
            animation-duration: 1s;
            animation-fill-mode: both;
            color: $acid;
          }
        }

			.about_content_text_small {
				@include content-txt;
        margin-top: 10px;
        margin-bottom: 10px;
				width: 45%;

				.word {
          display: inline-block;
          transition: transform 1s ease-in-out;
          color: $white;

          &:hover {
            animation-name: rubberBand;
            animation-duration: 1s;
            animation-fill-mode: both;
            color: $white;
          }
        }
			}
		}
	}
</style>
