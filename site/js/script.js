var verticalPosition = window.pageYOffset | document.body.scrollTop;
var screenWidth = screen.width;

/*
On page resize:
-check if you're expanding into a big screen, and if so, make sure the menu is toggled on
-check if you're changing the height of the image, and toggle that variable, and call the change background color transparency function if necessary
*/

//document.getElementById("myImg").height = "300";

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

/**
* Initially, this would "close" the toggled menu by hiding it once you clicked a nav button.
* However, since this was just CSS, it would hide the menu even on expanded view. For simplicity, we just won't use this.
* If users want to continue browsing after they click a link, they'll simply have to close the hamburger menu first.
*/
/*closeNav = function(){
	if(document.getElementById('menu').style.display === "block"){
		document.getElementById('menu').style.display = "none";
	}
};*/

/*window.onscroll=function(){changeMenu()}

function changeMenu()
{
    

    // At specifiv position do what you want 
    if(scrollBarPosition == 0) {
        document.getElementById('status').innerHTML = "User is on top of the page, position=" + scrollBarPosition;
    }
    else {
        document.getElementById('status').innerHTML = "User is not on top of the page, position="  + scrollBarPosition;
    }
}*/