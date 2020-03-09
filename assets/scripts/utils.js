export const shuffleArray = (a) => {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		[a[i], a[j]] = [a[j], a[i]]
	}
	return a
}

export const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c

export const randomRange = (min, max) => {
    return Math.random() * (max - min) + min
}
