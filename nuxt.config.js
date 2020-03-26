const pkg = require('./package')

module.exports = {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: 'Generative Gallery | Tristan Lanoye',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/generative-gallery/favicon/favicon.ico' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/generative-gallery/favicon/favicon-16x16.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/generative-gallery/favicon/favicon-32x32.png' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/generative-gallery/favicon/apple-touch-icon.png' },
			{ rel: 'manifest', href: '/generative-gallery/favicon/site.webmanifest' },
			{ rel: 'mask-icon', href: '/generative-gallery/favicon/safari-pinned-tab.svg', color: '#5bbad5' }
		],
		script: [
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.5/scrollreveal.min.js' }
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },

	/*
	** Global CSS
	*/
	css: [
		'~/assets/styles/main.styl'
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
	],

	router: {
		base: '/generative-gallery/'
	},

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {

		}
	}
}
