const MathUtils = {
	map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
	lerp: (a, b, n) => (1 - n) * a + n * b,
	getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
}

export default class SmoothScroll {
	constructor() {
		this.DOM = {main: document.querySelector('.main')}
		this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]')

		this.winsize = {
			width: 0,
			height: 0
		}

		this.docScroll = 0
		this.lastScroll = 0
		this.scrollingSpeed = 0

		this.renderedStyles = {
			translationY: {
				previous: 0,
				current: 0,
				ease: 0.1,
				setValue: () => this.docScroll
			}
		}

		this.init()
		this.setSize()
		this.update()
		this.style()
		requestAnimationFrame(() => this.render())
	}
	calcWinsize() {
		this.winsize.width = window.innerWidth
		this.winsize.height = window.innerHeight
	}
	getPageYScroll() {
		this.docScroll = window.pageYOffset || document.documentElement.scrollTop
	}
	init() {
		this.calcWinsize()
		this.getPageYScroll()

		window.addEventListener('resize', () => {
			this.calcWinsize()
			this.setSize()
		})
		window.addEventListener('scroll', () => {
			this.getPageYScroll()
		})
	}
	update() {
		for (const key in this.renderedStyles ) {
			this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue()
		}
		this.layout()
	}
	layout() {
		this.DOM.scrollable.style.transform = `translate3d(0,${-1*this.renderedStyles.translationY.previous.toFixed(1)}px,0)`
	}
	setSize() {
		document.body.style.height = `${this.DOM.scrollable.scrollHeight}px`
	}
	style() {
		this.DOM.main.style.position = 'fixed'
		this.DOM.main.style.width = this.DOM.main.style.height = '100%'
		this.DOM.main.style.top = this.DOM.main.style.left = 0
		this.DOM.main.style.overflow = 'hidden'
	}
	render() {
		this.scrollingSpeed = Math.abs(this.docScroll - this.lastScroll)
		this.lastScroll = this.docScroll

		for (const key in this.renderedStyles ) {
			this.renderedStyles[key].current = this.renderedStyles[key].setValue()
			this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease)
		}
		this.layout()

		requestAnimationFrame(() => this.render())
	}
}
