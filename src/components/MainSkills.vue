<template>
  	<div id="main-skills">
  		<div class="wrap-content">
  		<div class="nav-bar"></div>
		<div class="container-skills">
			<div class="skills-content">
				<div class="h_1"><h2>Skills & Experience</h2></div>
				<div class="text_1">
					<p>Main area of my expertise is front end development and everything related with this side of web.   HTML,CSS, JS (ES5,ES6), building small & medium Web Apps, Angular , Vue.js, building custom plugins, features, animations and just coding layouts.</p>
					<p>Often I work as a full-stack develeoper  – mainly in Lamp environment, PHP and open source CMS’s like (WordPress, Drupal, Magento, Typo 3 etc..) .</p>
					<p>I have also some experience with Node.js,  Mongo DB (Keystone.JS).</p>
					<p>Would like to know more? Please check my LinkedIn profile or just contact me.</p>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	/*import Menu from './MainMenu.vue';*/

  	export default {
    	name: 'Skills'
  	}
</script>

<style lang="scss">
	@import "../main.scss"; 

	.wrap-content {
		display: flex;
		
	}

	.nav-bar {
		display: flex;
		flex-direction: column;
    	justify-content: space-between;
    	position: relative;
		background-color: $menu-bg;
    	height: $height;
		width: 60px;
	}
	
	.container-skills {
		position: relative;
		width: 100%;
		height: $height;
		top: 10%;
		background-color: $dark;

		.skills-content {
			display: flex;
			flex-direction: column;
			position: relative;
			left: 5%;
			top: 10%;
			width: 30%;

			.h_1 {
				color: $acid;

				.h2 {
					color: $acid;
				}
			}
		}
	}

</style>
