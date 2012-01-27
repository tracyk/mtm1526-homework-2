
var list; //Holds our <ul> to move around
var item; //Holds our <li> to move around

var createList = function (ev) {
	
	list = document.getElementById('list'); // retrieve <ul>
	
	item = document.createElement('li'); // .createElement() makes a new empty HTML tag
	
	var theValue = document.getElementById('text').value; //retrieves text in textbox
	
	if (theValue) { 
		item.innerHTML = theValue; // if and only if there IS a string in text box does it become a list item
		list.appendChild(item);
	}	
	
};

document.getElementById('button').addEventListener('click', createList, false);

