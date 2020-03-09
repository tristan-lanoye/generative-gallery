<template>
	<div class="socials-container">
		<a :href="social.link" v-for="(social, i) in socials" :key="Math.random() * i" target="_blank" :class="['link', social.class]" :title="social.alt">
			<img :src="social.icon" :alt="social.label">
		</a>
	</div>
</template>

<style lang="stylus" scoped>
	.socials-container {
		display flex
		align-items flex-end

		.link {
			font-size 13px
			font-family 'Circular Book'
			margin-left 20px
			text-align right
			overflow hidden
			opacity 0.4
			transition 0.1s all ease

			&:hover {
				opacity 0.75
			}

			img {
				width 13px
			}

			&.social-website {
				img {
					position relative
					top 1px
					width 14px
				}
			}

			&.social-linkedin {
				img {
					position relative
					top 1px
				}
			}

			&.social-mail {
				img {
					position relative
					top 2px
					width 15px
				}
			}
		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'socials',
		props: [],
		computed: {
			...mapGetters({
				socials: 'GET_SOCIALS'
			})
		}
	}
</script>

