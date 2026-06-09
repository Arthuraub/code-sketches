const body = document.getElementsByTagName("body")[0];

setColor("magenta")

function setColor(name){
	body.style.backgroundColor = name
}


function randomColor(){
	console.log("hi");
	let R = Math.round(Math.random() * 255);
	let V = Math.round(Math.random() * 255);
	let B = Math.round(Math.random() * 255);

	let theColor = "rgb(" + R + "," + V + "," + B + ")";
	body.style.backgroundColor = theColor;
}
