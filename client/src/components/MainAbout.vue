<template>
	<div class="wrap_about">
		<main-menu></main-menu>

		<div class="about_content">
			<div class="wrap_about_content_text">

        <div class="blast-root" v-html="fullText"></div>

        <div class="about_content_text_small" v-for="text in texts">{{ text }}</div>
      </div>
		</div>
	</div>
</template>

<script>
	import MainMenu from './MainMenu';

	export default {
		name: 'About',
    data () {
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
		components: {
			'main-menu': MainMenu
		},

    mounted () {

        $(".blast-root").blast({
          delimiter: "character",
          tag: "span"
        })

        let a = 0

        $(".blast-root .blast").each(function () {

          let el = $(this);

          setTimeout(function () {
            el.addClass('animated bounceIn')
          }, a)

          if (a < 800) a += 50;
        });

        setTimeout( () => {
          $(".blast-root .blast").removeClass('animated bounceIn')
          $(".blast-root .blast").css('opacity', 1);
          $(".blast-root .blast").mouseenter(function () {
            var el = $(this)
            $(this).addClass('animated rubberBand');
            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend enimationend', function () {
              el.removeClass('animated rubberBand')
            })
          })
        }, 800)
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
