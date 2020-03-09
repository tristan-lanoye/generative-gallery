<template>
	<div class="container-page container-index">
		<div class="content">
			<topbar/>
			<description/>
			<gallery/>
			<bottom/>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-index {
		max-width 1920px
		margin 0 auto

		.content {
			padding 60px 70px
			text-align center
		}
	}
</style>

<script>
	import inViewport from 'in-viewport'
	import { TimelineLite } from 'gsap'

	import topbar from '~/components/topbar'
	import description from '~/components/description'
	import gallery from '~/components/gallery'
	import bottom from '~/components/bottom'

	export default {
		components: {
			topbar,
			description,
			gallery,
			bottom
		},
		data() {
			return {
				current: 0
			}
		},
		mounted() {
			const tl = new TimelineLite({
				paused: true
			})

			tl.fromTo('.name', 0.75, { opacity: 0 }, { opacity: 0.4 }, 0)
			tl.staggerFromTo('.socials-container .link', 0.75, { opacity: 0 }, { opacity: 0.4 }, 0.1, 0)
			tl.fromTo('.title', 0.75, { opacity: 0 }, { opacity: 1 }, 0)
			tl.fromTo('.description', 0.75, { opacity: 0 }, { opacity: 0.8 }, 0.2)

			this.$nuxt.$on('FINISHED_LOADING', () => {
				const revealElements = Array.from(document.querySelectorAll('.grid-item img'))

				revealElements.forEach((el, i) => {
					let dataset = el.dataset
					let opacity = dataset.opacity ? parseFloat(dataset.opacity).toFixed(1) : 1
					let delay = dataset.delay ? parseFloat(dataset.delay).toFixed(1) : 0
					let distance = dataset.distance ? parseFloat(dataset.distance).toFixed(1) : 80

					inViewport(el, () => {
						this.current++

						delay = this.current % 3 * 0.1

						const tl = new TimelineLite()
						tl.fromTo(el, 1.2, {y: distance, autoAlpha: 0}, {y: 0, autoAlpha: opacity, ease: Power3.easeOut}, delay)
					})
				})

				tl.play()
			})
		}
	}
</script>
