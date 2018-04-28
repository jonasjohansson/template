document.addEventListener('DOMContentLoaded', init);

function init(){
	for (let el of document.querySelectorAll('li')){
		el.style.opacity = 0;
		let image = el.querySelector('img');
		image.onload = function(){
			el.style.opacity = 1;
		}
		let title = getTitle(image.src).trim();
		let h4 = document.createElement('h4');
		h4.innerHTML = title;
		image.alt = title;
		el.appendChild(h4);
	}
}

function getTitle(string){
	let ext = string.split('.').pop();
	let path = string.substring(string.indexOf('-')+1);
	let title = path.slice(0,-ext.length-1);
	return decodeURI(title);
}