<template>
	<div class="topbar-container">
		<div class="line"></div>
		<div class="left">
			<a href="https://tristan-lanoye.com" target="_blank" class="name">tristan lanoye</a>
		</div>
		<div class="middle">
			<h1 class="title">generative gallery</h1>
		</div>
		<div class="right">
			<socials/>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.topbar-container {
		position relative
		display	flex
		justify-content space-between
		align-items center
		font-family 'Circular Book'

		@media screen and (max-width: 500px) {
			flex-direction column
			justify-content center
			align-items center
		}

		.line {
			position absolute
			top calc(100% + 20px)
			left 0
			width 100%
			height 2px
			background black
			transform scaleX(0)
			transform-origin 0 50%
			opacity 0.3
			z-index 10000
		}

		.left {
			display flex
			justify-content flex-start
			flex 1

			@media screen and (max-width: 500px) {
				margin-bottom 20px
			}
		}

		.middle {
			flex 1

			@media screen and (max-width: 500px) {
				margin-bottom 35px
			}
		}

		.right {
			display flex
			justify-content flex-end
			flex 1

			@media screen and (max-width: 500px) {
				// margin-bottom 20px
			}
		}

		.name {
			font-size 14px
			opacity 0.4
			transition 0.1s opacity ease
			cursor pointer

			&:hover {
				opacity 0.75
			}
		}

		.title {
			font-size 14px
			font-family 'Circular Medium'
			cursor pointer
		}
	}
</style>

<script>
	import socials from '~/components/socials'

	export default {
		name: 'topbar',
		components: {
			socials
		}
	}
</script>

