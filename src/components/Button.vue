<template>
	<button>{{ button }}</button>
</template>

<script>
	export default {
		name: 'Button',
		data () {
			return {
				button: 'contact me'
			}
		}
	}
</script>

<style lang="scss">
	@import "../styles/main.scss";

	button {
		@include luxury-button;
	}
</style>