<template>
	<div class="wrap_skills">
      <main-menu></main-menu>	
		<div class="skills_content">
			<div class="skills_content_h2"><h2>Skills & Experience</h2></div>
			<div class="skills_content_txt">
				<p>Main area of my expertise is front end development and everything related with this side of web. HTML, CSS, JS (ES5,ES6), building small & medium Web Apps, Angular, Vue.js, building custom plugins, features, animations and just coding layouts.</p>
				<p>Often I work as a full-stack develeloper – mainly in Lamp environment, PHP and open source CMS’s like (WordPress, Drupal, Magento, Typo 3 etc..) .</p>
				<p>I have also some experience with Node.js, Mongo DB (Keystone.JS).</p>
				<p>Would like to know more? Please check my <a href="www.google.com">LinkedIn</a> profile or just <a href="www.google.com">contact</a> me.</p>
			</div>
		</div>
	</div>
</template>

<script>
  import MainMenu from './MainMenu';

  export default {
    name: 'Skills',
    components: {
      'main-menu': MainMenu
    }
  }
</script>

<style lang="scss">
	@import "../main.scss";

	* {
		margin: 0;
    	padding: 0;
	}
	
	.wrap_skills {
		display: flex;
    	width: 100%;
    	background-color: $dark;
    	height: $height;
		
		.skills_content {
			@include flex-content;
			padding-top: 5%;
			padding-left: 5%;
			letter-spacing: 0.001em;		
		}

			.skills_content_h2 {
				display: inherit;
				color: $acid;
				font-size: $font-size-large;
				font-weigth: normal;
				width: 33%;
				line-height: 1.5em;
				margin-bottom: 20px;
			}

			.skills_content_txt {
				display: inherit;
				flex-direction: column;
				color: $white;
				font-size: $font-size-small;
				width: 33%;
				line-height: 1.3em;

				p {
					margin: 10px 0 10px;
				}

				a {
					color: $acid;
				}
			}
	}

</style>
