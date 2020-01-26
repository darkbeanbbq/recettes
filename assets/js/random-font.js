window.onload = function () {
	var title = document.getElementsByClassName("random-font");
	var fontStyle = [ "regular", "italic"];
	var fontWeight = [400, 600, 900]; //[ "900", "bold", "normal", "100"];

	var i;
	for(i=0; i< title.length; i++) {
		var numStyle = Math.floor(Math.random()*2);
		var numWeight = Math.floor(Math.random()*3);
	title[i].style.fontStyle = fontStyle[numStyle];
	title[i].style.fontWeight = fontWeight[numWeight];
	}
};
