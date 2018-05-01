document.addEventListener('DOMContentLoaded', init);

function init(){
	for (let el of document.querySelectorAll('figure')){
		el.classList.add('loading');
		let image = el.querySelector('img');
		image.onload = function(){
			el.classList.remove('loading');
		}
		let title = getTitle(image.src).trim();
		image.alt = title;
		image.title = title;
		el.setAttribute('data-title',title);
	}
}

function getTitle(string){
	let ext = string.split('.').pop();
	let path = string.substring(string.indexOf('-')+1);
	let title = path.slice(0,-ext.length-1);
	title = title.replace(/_/g,' ');
	return decodeURI(title);
}