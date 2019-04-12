const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

//first do the following to verify it works.
// console.log(css);
// console.log(color1);
// console.log(color2);

// Use the below line to test the code that it works.  Then created the code below within the Event Listener.
// body.style.background ="red";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor()
{
     colorA='rgb('+Math.round(Math.random()*255)+','
     +Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
     console.log(colorA);
     colorA = color1;
     console.log(color1);
     // return color1;

	colorB='rgb('+Math.round(Math.random()*255)+','
     +Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
     console.log(colorB);
     colorB = color2;
     console.log(color2);
     // return color2;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
