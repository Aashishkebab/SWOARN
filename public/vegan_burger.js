closeNavWhenClickingOutside(); // Add the listeners

/**
 * Listener to close nav by clicking outside it when it is open.
 */
function closeNavWhenClickingOutside(){
        document.addEventListener('click', function(event) {
			if (event.target.closest('nav') || event.target.closest('.vegan-burger')) {
				return;
			}

            if (!document.body.classList.contains('nav-open')) {
                return;
            }
            if (event.target.closest('nav')) {
                return;
            }

            closeBurger();
        });
}

/**
 * Opens the vegan burger menu.
 */
function openBurger(){
    // We need to set the animation here because if set in the CSS it triggers when shrinking the page, causing a visual anomaly. I do not know why.
    document.getElementById('vegan-burger-menu').style.transition = 'transform 0.4s cubic-bezier(0.04, 0.73, 0.38, 1)';

    document.getElementById('vegan-burger-menu').classList.add('nav-open');
	document.getElementById('vegan-burger-menu').classList.remove('closed-nav');
    document.body.classList.add('nav-open');
    // document.querySelectorAll('.hero a, main a, footer a').forEach(link => {
    //     link.style.pointerEvents = 'none';
    // });
}

/**
 * Closes the vegan burger menu.
 */
function closeBurger(){
    document.getElementById('vegan-burger-menu').style.transition = 'transform 0.4s ease-in';

    document.getElementById('vegan-burger-menu').classList.remove('nav-open');
    document.body.classList.remove('nav-open');
	document.getElementById('vegan-burger-menu').classList.add('closed-nav');

    document.querySelectorAll('.hero a, main a, footer a').forEach(link => {
        link.style.pointerEvents = '';
    });
}

/**
 * Toggles the state of the vegan burger menu.
 */
function toggleBurger(){
    if (document.body.classList.contains('nav-open')) {
        closeBurger();
    } else {
        openBurger();
    }
}