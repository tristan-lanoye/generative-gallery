<template>
	<div class="__layout-wrapper main">
		<loading/>
		<nuxt/>
	</div>
</template>

<script>
	import loading from '~/components/loading'

	export default {
		components: {
			loading
		}
	}
</script>

<style lang="stylus">
	html {
		font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
		font-size 16px
		word-spacing 1px
		-ms-text-size-adjust 100%
		-webkit-text-size-adjust 100%
		-moz-osx-font-smoothing grayscale
		-webkit-font-smoothing antialiased
		box-sizing border-box
	}

	body {
		overflow hidden
	}

	.__layout-wrapper {}

	*,
	*:before,
	*:after {
		box-sizing border-box
		margin 0
	}
</style>
