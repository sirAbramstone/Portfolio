
<template>
	<div class="wrap_about">
		<main-menu></main-menu>
		<div class="about_content">
			<div class="about_content_h" v-html="charSpan(textH)"></div>
			<div class="about_content_txt" v-for="(text, i) in texts" :key="i" v-html="wordSpan(text)">
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
		    textH: 'About me',
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
    methods: {
      wordSpan: function (text) {
        return text.split(' ').map(function (s) {
          return '<div class = "word">' + s + '</div>'}).join(' ');
      },
      charSpan: function (textH) {
        return textH.split('').map(function (s) {
        return '<div class = "char">' + s + '</div>'}).join('');
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

			.about_content_h {
				@include content-h2;
				width: 38%;
				margin-bottom: 20px;

        .char {
          display: inline-block;
          transition: transform 1s ease-in-out;
          font-family:'Raleway';

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
			}

			.about_content_txt {
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
