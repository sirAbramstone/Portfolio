<template>
  	<div id="main-skills">
      <main-menu></main-menu>
		<div class="wrap-skills">
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

  #main-skills {
    display: flex;
  }

	.wrap-skills {
		width: 100%;

		.skills-content {
			display: flex;
			flex-direction: column;
		}
	}

</style>
