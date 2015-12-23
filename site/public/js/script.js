
var screenWidth = window.innerWidth;
var verticalPosition = window.pageYOffset | document.body.scrollTop;


/**
* Event Listener for resizing the window to help ensure the menu is toggled correctly for the window size.
*/
window.addEventListener('resize', function(event){
	screenWidth = window.innerWidth;
	if(document.getElementById('menu').style.display != "inline"){
		if(screenWidth>=768){
			document.getElementById('menu').style.display = "inline";
		}
	}
	else{
		if(screenWidth<768){
			document.getElementById('menu').style.display = "none";
		}
	}
});


/**
* Changes the transparancy of the nav menu when the page is scrolled up or down.
* Has a few mini bugs, but gets the job done for the most part.
*/
navTransparencyChange = function(){
	screenWidth = window.innerWidth;
	var element = document.getElementById('newnavbar');
	if(screenWidth >=768){
		verticalPosition = window.pageYOffset | document.body.scrollTop;
		if(verticalPosition >=50){
			element.style.opacity = "1";
			element.style.filter  = 'alpha(opacity=100)';
			element.style.borderBottom= "1px solid white";
		}
		else{
			element.style.opacity = "0.6";
			element.style.filter  = 'alpha(opacity=60)';
			element.style.borderBottom= "none";
		}
	}
	else{
		element.style.opacity = "1";
		element.style.filter  = 'alpha(opacity=100)';
		element.style.borderBottom= "1px solid white";
	}
}


/**
* Toggles the menu on the click of the hamburger 'more' icon. Works via CSS/
*/
document.getElementById('show-menu').onclick = function(){
	console.log("clicked");
	if(document.getElementById('menu').style.display === "block"){
		document.getElementById('menu').style.display = "none";
	}
	else{
		document.getElementById('menu').style.display = "block";
	}
};

/*window.onload = function(){
	document.getElementById('hello').onclick = function(){
		var element = document.getElementById('wechatQR');
		console.log("display type is: "+element.style.display);
		if(element.style.display=="none"){
			element.style.display="visible";
			console.log("changed to visible");

		}
		else{
			element.style.display="none";
			console.log("changed to hidden");
		}
	}
};*/


/*
* Anchors down the page so we can scroll to content faster if on a large screen.
* Used when any of the buttons are clicked.
* Smooth scrolling only works in FireFox, unfortunately, otherwise it just jumps.
*/
/*var links = document.getElementsByClassName('clickForScroll'){
	for(var i=0; i<links.length; i++){
		links[i].onclick=function(){
			document.getElementById('scrollTo').scrollIntoView({behavior: "smooth"});
		};
	}
}*/
/*document.getElementById('menu').onclick = function(){
	document.getElementById('scrollTo').scrollIntoView({behavior: "smooth"});
};*/


/*
* Function to help run the image banner transition on-scroll, but since the transitions are iffy, we are leaving it out.
*/
/*function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 40,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
            console.log("shrink to none");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
                console.log("back to normal");
            }
        }
    });
}
window.onload = init();*/

