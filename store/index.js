export const state = () => ({
	works: [
		{
			series: 'lines',
			title: 'Lines 0',
			src: '/images/lines-0.png',
			alt: 'lines 0'
		},
		{
			series: 'lines',
			title: 'Lines 1',
			src: '/images/lines-1.png',
			alt: 'lines 1'
		},
		{
			series: 'lines',
			title: 'Lines 2',
			src: '/images/lines-2.png',
			alt: 'lines 2'
		},
		{
			series: 'lines',
			title: 'Lines 3',
			src: '/images/lines-3.png',
			alt: 'lines 3'
		},
		{
			series: 'lines',
			title: 'Lines 4',
			src: '/images/lines-4.png',
			alt: 'lines 4'
		},
		{
			series: 'Watercolor',
			title: 'Watercolor 1',
			src: '/images/watercolor-1.jpg',
			alt: 'watercolor 1'
		},
		{
			series: 'Smoke',
			title: 'Smoke 1',
			src: '/images/smoke-1.png',
			alt: 'smoke 1'
		},
		{
			series: 'Smoke',
			title: 'Smoke 2',
			src: '/images/smoke-2.png',
			alt: 'smoke 2'
		},
		{
			series: 'Smoke',
			title: 'Smoke 3',
			src: '/images/smoke-3.gif',
			alt: 'smoke 3'
		},
		{
			series: 'Smoke',
			title: 'Smoke 4',
			src: '/images/smoke-4.gif',
			alt: 'smoke 4'
		},
		{
			series: 'Smoke',
			title: 'Smoke 5',
			src: '/images/smoke-5.gif',
			alt: 'smoke 5'
		},
		{
			series: 'Tears',
			title: 'Tears 1',
			src: '/images/tears-1.png',
			alt: 'tears 1'
		},
		{
			series: 'Tears',
			title: 'Tears 2',
			src: '/images/tears-2.png',
			alt: 'tears 2'
		},
		{
			series: 'Tears',
			title: 'Tears 3',
			src: '/images/tears-3.png',
			alt: 'tears 3'
		},
		{
			series: 'Tears',
			title: 'Tears 4',
			src: '/images/tears-4.png',
			alt: 'tears 4'
		},
		{
			series: 'Tears',
			title: 'Tears 5',
			src: '/images/tears-5.png',
			alt: 'tears 5'
		},
		{
			series: 'Cards',
			title: 'Cards 1',
			src: '/images/card-1.jpg',
			alt: 'cards 1'
		},
		{
			series: 'Cards',
			title: 'Cards 2',
			src: '/images/card-2.jpg',
			alt: 'cards 2'
		},
		{
			series: 'Cards',
			title: 'Cards 3',
			src: '/images/card-3.jpg',
			alt: 'cards 3'
		},
		{
			series: 'Cards',
			title: 'Cards 4',
			src: '/images/card-4.jpg',
			alt: 'cards 4'
		},
	],
	socials: [
		{
			label: 'website',
			link: 'https://tristan-lanoye.com',
			class: 'social-website',
			icon: '/icons/social-website.svg',
			alt: 'Portfolio'
		},
		{
			label: 'github',
			link: 'https://github.com/tristan-lanoye',
			class: 'social-github',
			icon: '/icons/social-github.svg',
			alt: 'Github'
		},
		{
			label: 'twitter',
			link: 'https://twitter.com/tristan_yj',
			class: 'social-twitter',
			icon: '/icons/social-twitter.svg',
			alt: 'Twitter'
		},
		{
			label: 'linkedin',
			link: 'https://linkedin.com/in/tristan-lanoye-84518b157',
			class: 'social-linkedin',
			icon: '/icons/social-linkedin.svg',
			alt: 'Linkedin'
		},
		{
			label: 'mail',
			link: 'mailto:contact@tristan-lanoye.com',
			class: 'social-mail',
			icon: '/icons/social-mail.svg',
			alt: 'Mail'
		}
	]
})

export const getters = {
	GET_WORKS(state) {
		return state.works
	},
	GET_SOCIALS(state) {
		return state.socials
	}
}
