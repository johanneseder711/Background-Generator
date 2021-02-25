var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random")

function setBackgroundColor(){
	color1 = document.querySelector(".color1");
	color2 = document.querySelector(".color2");
	body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setRandomBackgroundColor(){
	color1 = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
	color2 = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
	body.style.background = "linear-gradient(to right, " + color1 + " , " + color2 + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackgroundColor);

color2.addEventListener("input", setBackgroundColor);

button.addEventListener("click", setRandomBackgroundColor);