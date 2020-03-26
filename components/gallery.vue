<template>
	<div class="gallery-container">
		<div class="grid">
			<div class="grid-item" v-for="(image, i) in images" :key="i + Math.random()">
				<img :src="$router.options.base + image.src" :alt="image.alt">
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.gallery-container {
		margin-top 100px
		font-family 'Circular Book'
		font-size 14px

		@media screen and (max-width: 500px) {
			margin-top 60px
		}

		.grid {
			width 75%
			margin 0 auto
			text-align center

			@media screen and (max-width: 600px) {
				width 100%
			}

			.grid-item {
				padding 10px
				width calc(100% / 3)

				@media screen and (max-width: 1096px) {
					width calc(100% / 2)
				}

				@media screen and (max-width: 768px) {
					width calc(100% / 1)
				}

				img {
					width 100%
					opacity 0
					border 3px solid rgba(0, 0, 0, 0.065)
				}
			}
		}
	}
</style>

<script>
	let Masonry
	if(process.client) {
		Masonry = require('masonry-layout')
	}

	import { mapGetters } from 'vuex'

	export default {
		name: 'gallery-container',
		computed: {
			...mapGetters({
				works: 'GET_WORKS',
			}),
			images() {
				return this.works.slice().reverse()
			}
		},
		mounted() {
			new Masonry(document.querySelector('.grid'), {
				itemSelector: '.grid-item'
			})
		}
	}
</script>
