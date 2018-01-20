
<template>
	<div class="wrap_about">
		<main-menu></main-menu>
		<div class="about_content">
			<div class="about_content_h">About me</div>
			<div class="about_content_txt">
				<p>Lorem ipsum dolor sit amet, eam stet elit explicari in, ei sit aperiam expetenda. Laboramus appellantur contentiones pro ut, ad mentitum laboramus elaboraret cum.</p>
				<p>Habeo timeam scribentur at pri, eam solum impedit et. Ea vidisse minimum nec, ei causae scribentur mel, quo dictas vituperatoribus an. Per ea erant munere assueverit.</p>
				<p>Cu saepe euripidis cum, eum suas postulant consectetuer ea, id mea facilis accusata. At est verterem dissentias, adhuc error posidonium quo cu.</p>
				<p>Pri ea nostro denique luptatum, saperet recteque ea sea. Sea ex percipit reformidans, eu quidam quodsi tincidunt eam. Ex per ferri pericula.</p>
			</div>
		</div>
	</div>
</template>

<script>
	import MainMenu from './MainMenu';

	export default {
		name: 'About',
		components: {
			'main-menu': MainMenu
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
			}

			.about_content_txt {
				@include content-txt;
				width: 45%;

				p {
					margin: 10px 0 10px;
				}
			}
		}
	}
</style>
