let sections = document.getElementsByTagName('span');
for(let i = 0; i < sections.length; i++){
	if(!(sections[i].id == 'title-span')){
		sections[i].addEventListener('click', function(){closeNavbar()});
	}
}

function toggleNavbar(){
	document.getElementById('vegan-burger-menu').className == 'open-nav' ? document.getElementById('vegan-burger-menu').className = 'closed-nav' : document.getElementById('vegan-burger-menu').className = 'open-nav';
}

function closeNavbar(){
	document.getElementById('vegan-burger-menu').className = 'closed-nav';
}