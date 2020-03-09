<template>
	<div class="description-container">
		<div class="description">
			This is some of the work I've done while learning about generative art.
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.description-container {
		margin-top 120px
		font-family 'Circular Book'
		font-size 14px
		opacity 0.8

		@media screen and (max-width: 500px) {
			margin-top 80px
			padding 0 30px
			line-height 180%
		}
	}
</style>

<script>
	export default {
		name: 'description'
	}
</script>
