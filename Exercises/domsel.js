
// // Use the following code for the beginning of lecture 123
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
// 	console.log("CLICK!!!!");
// })

const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

let listItems = document.getElementsByTagName("li");

//--------------------------------------------------
function inputLength () {
	return input.value.length;
}

function createListElement () {
	let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		deleteBtn();
		i++;
}

function addListAfterClick (){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress (event) {
	if (inputLength() > 0 && event.which === 13){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//----------------------------------------
ul.onclick = function (event){
	let target = event.target;
	target.classList.toggle("done");
}

function deleteBtn (){
	let btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(btn);
	btn.onclick = removeParent;
}

function listLength (){
	return listItems.length;
}

for (i=0; i< listItems.length;i++){
	deleteBtn();
}

function removeParent(event){
	event.target.parentNode.remove();
}

