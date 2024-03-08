// Accessing elements
// by classname
const heading1 = document.getElementsByClassName("heading1");
console.log(heading1);

// by ID
const heading = document.getElementById("heading");
console.log(heading);

// by tagName
const heading2 = document.getElementsByTagName("h2");
console.log(heading2);

// by querySelector
const listItems = document.querySelectorAll("#list li");
console.log(listItems);

// Modifying Elements
// innerHTML
heading1[0].innerHTML = "<h6>Learning DOM Manipulation</h6>";

// textContent
heading2[0].textContent = "Element Manipulation";

// setting attributes
heading1[0].setAttribute("class", "highlight");

// changing style property
const button = document.getElementById("btn");
button.style.backgroundColor = "skyblue";

// creating elements
const container = document.getElementsByClassName("container");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";

container[0].appendChild(newParagraph);

// removing an element
// const elementToRemove = document.querySelector("li");
// elementToRemove.remove()
// console.log("Removed Elements:", elementToRemove);


// To remove `Item 2` in the item list
const second = document.getElementById("list");
second.removeChild(second.children[1]);

/ Handling Events
button.addEventListener("click", addListItem);

function addListItem() {
	const newListItem = document.createElement("li");
	newListItem.textContent = "Another Task";

	document.getElementById("list").appendChild(newListItem);
}