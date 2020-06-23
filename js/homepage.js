/* Set the width of the sidebar to 250 px and the left margin of the page content to 250 px*/
function openNav() {
	document.getElementById("navigationSidebar").style.width = "250px";
	/*document.getElementById("main").style.marginLeft = "250px";*/
	document.getElementById("openbtn").style.opacity = "0";
}

/* Set the width of the sidebar to 0 px and the left margin of the page content to 0 px*/
function closeNav() {
	document.getElementById("navigationSidebar").style.width = "0px";
	/*document.getElementById("main").style.marginLeft = "0px";*/
	document.getElementById("openbtn").style.opacity = "1";
}