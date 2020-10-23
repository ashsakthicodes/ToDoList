var enterButton = document.getElementById("enterBtn");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");  // create list element
	var itemText = document.createTextNode(input.value); // create text item 
	li.appendChild(itemText); // appendChild text item to the list element
	ul.appendChild(li);  // appendChild list element to ul 
	input.value = ""; // clear input after enter

	var Donebutton = document.createElement("button"); // create done button
	Donebutton.classList.add("btn", "btn-success");
	var doneText = document.createTextNode("Done!"); // create done text 
	Donebutton.appendChild(doneText); // appendChild done text to Donebutton
	li.appendChild(Donebutton); // appendChild Donebutton to list 
	Donebutton.onclick = crossOutItem; // when done button is clicked, execute crossOutItem function

	var Deletebutton = document.createElement("button"); // create delete button
	Deletebutton.classList.add("btn", "btn-secondary");
	var deleteText = document.createTextNode("Delete!"); // create delete text 
	Deletebutton.appendChild(deleteText); // appendChild delete text to Deletebutton
	li.appendChild(Deletebutton); // appendChild Deletebutton to list
	Deletebutton.onclick = deleteItem; // when done button is clicked, execute deleteItem function

}

function crossOutItem(event){
	event.target.parentNode.classList.toggle("done");
}

function deleteItem(event){
	event.target.parentNode.remove();
} 

function addItemAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}

function addItemAfterKeyPress(event){
	if(inputLength() && event.keyCode === 13){
		createListElement();
	}
}

enterButton.addEventListener("click", addItemAfterClick);
input.addEventListener("keypress", addItemAfterKeyPress);
