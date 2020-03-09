import { TimelineLite, Power3 } from 'gsap'
import { randomRange } from '~/assets/scripts/utils.js'

export default class Explosion {
	constructor(opts = {}) {
		if(!opts.selector) return

		this.DOM = {}
		this.DOM.el = document.querySelector(`${opts.selector}`)
		this.DOM.created = []

		this.icons = opts.icons

		this.reach = 25
		this.delayToRemove = 1000

		this.init()
	}

	init() {
		for(let i = 0; i < this.icons.length; i++) {
			const icon = this.icons[i]

			for(let j = 0; j < icon.number; j++) {
				const path = `/icons/explosion-${icon.name}-icon.svg`

				const container = document.createElement("div")
				container.classList.add('explosion-icon-container')
				container.style.position = 'absolute'

				const img = document.createElement("img")
				img.classList.add('explosion-icon')
				img.src = path

				container.appendChild(img)

				const wrapper = this.DOM.el
				wrapper.appendChild(container)

				const obj = {}
				obj.container = container
				obj.img = img
				obj.to = {
					x: this.reach * Math.cos(randomRange(0, 360)),
					y: this.reach * Math.cos(randomRange(0, 360))
				}

				this.DOM.created.push(obj)
			}
		}

		this.startAnimation()
	}

	startAnimation() {
		this.DOM.created.forEach((el, i) => {
			const tl = new TimelineLite({
				onComplete: this.removeElement(el)
			})

			tl.fromTo(el.img, 0.4, { opacity: 0, scale: 0.1, x: 0, y: 0 }, { opacity: 1, scale: 1, x: el.to.x, y: el.to.y, ease: Power3.easeOut }, randomRange(0, 0.3))
			tl.to(el.img, 0.5, { opacity: 0 }, '-=0.35')
		})
	}

	removeElement(el) {
		window.setTimeout(() => {
			this.DOM.el.removeChild(el.container)
		}, this.delayToRemove)
	}
}
