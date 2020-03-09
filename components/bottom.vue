<template>
	<div class="bottom-container">
		<div class="back-to-top" @click="backToTop">
			<img src="~/assets/images/arrow-up.svg" alt="">
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.bottom-container {
		margin-top 160px
		margin-bottom 60px

		@media screen and (max-width: 500px) {
			margin-top 80px
			margin-bottom 30px
		}

		.back-to-top {
			font-size 14px

			img {
				cursor pointer
				opacity 0.5
				transition 0.3s opacity ease

				&:hover {
					opacity 0.8
				}
			}
		}
	}
</style>

<script>
	import smoothscroll from 'smoothscroll-polyfill'

	export default {
		name: 'bottom',
		methods: {
			backToTop() {
				window.scroll({ top: 0, behavior: 'smooth' })
			}
		},
		mounted() {
			smoothscroll.polyfill()
		}
	}
</script>
