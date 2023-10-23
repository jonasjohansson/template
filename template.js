document.addEventListener('DOMContentLoaded', init)

function init() {
	const figs = document.querySelectorAll('figure')
	for (const fig of figs) {
		fig.classList.add('loading')
		let image = fig.querySelector('img')
		image.onload = function (fig) {
			fig.classList.remove('loading')
		}
		let title = getTitle(image.src).trim()
		if (image.alt.length !== 0) continue
		image.alt = title
		image.title = title
		let figCaption = document.createElement('figcaption')
		figCaption.innerHTML = title
		fig.appendChild(figCaption)
	}
	for (let a of document.querySelectorAll('p a')) {
		a.target = '_blank'
	}
}

function getTitle(string) {
	let ext = string.split('.').pop()
	let path = string.substring(string.indexOf('-') + 1)
	let title = path.slice(0, -ext.length - 1)
	title = title.replace(/_/g, ' ')
	return decodeURI(title)
}

