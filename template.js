document.addEventListener('DOMContentLoaded', init);

function init() {
	for (let fig of document.querySelectorAll('figure')) {
		fig.classList.add('loading');
		let image = fig.querySelector('img');
		image.onload = function() {
			fig.classList.remove('loading');
		};
		let title = getTitle(image.src).trim();
		if (image.alt !== '') return;
		image.alt = title;
		image.title = title;
		let figCaption = document.createElement('figcaption');
		figCaption.innerHTML = title;
		fig.appendChild(figCaption);
	}
}

function getTitle(string) {
	let ext = string.split('.').pop();
	let path = string.substring(string.indexOf('-') + 1);
	let title = path.slice(0, -ext.length - 1);
	title = title.replace(/_/g, ' ');
	return decodeURI(title);
}
