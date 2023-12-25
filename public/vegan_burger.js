// Set the onclick for all body elements except the title header space to close the navbar when clicked.
let sections = document.getElementsByTagName('span');
for(let i = 0; i < sections.length; i++){
	if(!(sections[i].id == 'title-span')){
		sections[i].addEventListener('click', function(){closeNavbar()});
	}
}

/**
 * Toggles the state of the navigation menu and disables all anchors if it was just opened.
 */
function toggleNavbar(){
	document.getElementById('vegan-burger-menu').className == 'open-nav' ? closeNavbar() : document.getElementById('vegan-burger-menu').className = 'open-nav';

	if(document.getElementById('vegan-burger-menu').className == 'open-nav'){
		let anchors = document.getElementsByTagName('a');

		for(let i = 0; i < anchors.length; i++){
			anchors[i].style.pointerEvents = 'none';
			anchors[i].style.cursor = 'default';
		}
	}
}

/**
 * Closes the navigation menu and re-enables anchors.
 */
function closeNavbar(){
	document.getElementById('vegan-burger-menu').className = 'closed-nav';

	let anchors = document.getElementsByTagName('a');

	for(let i = 0; i < anchors.length; i++){
		anchors[i].style.pointerEvents = 'auto';
		anchors[i].style.cursor = 'pointer';
	}
}