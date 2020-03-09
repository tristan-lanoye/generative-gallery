<template>
	<div class="loading-container" ref="loading"></div>
</template>

<style lang="stylus" scoped>
	.loading-container {
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		background #fff
		z-index 1000
	}
</style>

<script>
	import { TweenLite } from 'gsap'
	import { mapGetters } from 'vuex'

	import imagesLoaded from 'imagesloaded'

	export default {
		name: 'loading-container',
		computed: {
			...mapGetters({
				images: 'GET_WORKS'
			})
		},
		data() {
			return {
				loaded: 0,
				progress: {
					to: 0,
					current: 0
				}
			}
		},
		methods: {
			emitEvent() {
				this.$refs.loading.style.display = 'none'
				document.body.style.overflow = 'scroll'

				this.$nuxt.$emit('FINISHED_LOADING')
			},
			loop() {
				this.progress.current += (this.progress.to - this.progress.current) / 10

				if(this.progress.current > 0.95) {
					TweenLite.to(this.line, 0.9, { scale: 1, opacity: 0.04, ease: Power3.easeOut })

					this.emitEvent()
				} else {
					this.line.style.transform = `scaleX(${this.progress.current})`

					window.requestAnimationFrame(this.loop)
				}
			}
		},
		mounted() {
			const imgLoad = imagesLoaded('.gallery-container')

			imgLoad.on('progress', (instance, image) => {
				this.loaded++
				this.progress.to = this.loaded / this.images.length
			})

			this.line = document.querySelector('.line')

			this.loop()
		}
	}
</script>
