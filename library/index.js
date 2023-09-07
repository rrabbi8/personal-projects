function Book(name, author, pages, status) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

const myLibrary = [];

//dummy books
const hardTimes = new Book("Hard Times", "Charles Dickens", "352", true);
const private = new Book("Private - Season 1", "James Patterson", "300", false);
myLibrary.push(hardTimes);
myLibrary.push(private);

function display() {
	for (let i = 0; i < myLibrary.length; i++) {
		console.log(i);
		let card = document.createElement("div");
		card.className = "card";

		let title = document.createElement("p");
		title.className = "title";
		title.textContent = myLibrary[i].name;
		card.appendChild(title);

		let auth = document.createElement("p");
		auth.textContent = myLibrary[i].author;
		card.appendChild(auth);

		let nOfPage = document.createElement("p");
		nOfPage.textContent = "Pages: " + myLibrary[i].pages;
		card.appendChild(nOfPage);
		console.log(myLibrary[i].author);

		let statusDiv = document.createElement("div");
		statusDiv.className = "statusDiv";
		if (myLibrary[i].status === true) {
			let status = document.createElement("p");
			status.textContent = "Status: Read";
			statusDiv.appendChild(status);
		} else {
			let status = document.createElement("p");
			status.textContent = "Status: Not Read";
			statusDiv.appendChild(status);
		}

		let swap = document.createElement("img");
		swap.src = "./assets/swap.png";
		statusDiv.appendChild(swap);

		card.appendChild(statusDiv);

		let img = document.createElement("img");
		img.src = "./assets//delete.png";
		img.className = "deleteThis";
		card.appendChild(img);

		//Delete Card;
		img.addEventListener("click", () => {
			myLibrary.splice(i, 1);
			localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
			render();
		});

		//swap read status
		swap.addEventListener("click", () => {
			myLibrary[i].status = !myLibrary[i].status;
			localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
			render();
		});

		let books = document.getElementById("book");
		books.appendChild(card);
	}
}

display();

let isFormDisplayed = false; // Add this variable to keep track of the form's display status

function addBookForm() {
	// Check if the form is already displayed, if so, remove it
	if (isFormDisplayed) {
		return;
	}

	isFormDisplayed = true;

	let card = document.createElement("div");
	card.className = "card";

	let close = document.createElement("img");
	close.src = "./assets/cancel.png";
	close.className = "close-form";
	card.appendChild(close);

	//close the form
	close.addEventListener("click", () => {
		isFormDisplayed = false;
		render();
	});

	let title = document.createElement("p");
	title.className = "title";
	title.textContent = "Please enter your book info";
	card.appendChild(title);

	let form = document.createElement("form");
	card.appendChild(form);

	let inputForm = document.createElement("div");
	inputForm.className = "inputForm";
	form.appendChild(inputForm);

	// Book Input Form

	let labelBookName = document.createElement("label");
	labelBookName.for = "bookName";
	labelBookName.textContent = "Book Name: ";
	inputForm.appendChild(labelBookName);

	let bookName = document.createElement("input");
	bookName.id = "bookName";
	bookName.type = "text";
	bookName.name = "bookName";
	inputForm.appendChild(bookName);

	///Author Input Form

	let labelAuthorName = document.createElement("label");
	labelAuthorName.for = "authorName";
	labelAuthorName.textContent = "Author Name: ";
	inputForm.appendChild(labelAuthorName);

	let authorName = document.createElement("input");
	authorName.id = "authorName";
	authorName.type = "text";
	authorName.name = "AuthorName";
	inputForm.appendChild(authorName);

	// Pages Input Form

	let labelPages = document.createElement("label");
	labelPages.for = "numPages";
	labelPages.textContent = "Pages: ";
	inputForm.appendChild(labelPages);

	let numPages = document.createElement("input");
	numPages.id = "numPages";
	numPages.type = "number";
	numPages.name = "numPages";
	numPages.min = "1";
	inputForm.appendChild(numPages);

	//Submit button
	let submitButton = document.createElement("button");
	submitButton.type = "submit";
	submitButton.name = "button";
	submitButton.value = "click";
	submitButton.textContent = "Add";
	inputForm.appendChild(submitButton);

	let books = document.getElementById("book");
	books.appendChild(card);
	// On submission perform the following
	form.addEventListener("submit", function (event) {
		const title = document.getElementById("bookName").value;
		const author = document.getElementById("authorName").value;
		const pages = document.getElementById("numPages").value;
		event.preventDefault();
		myLibrary.push(new Book(title, author, pages, true));

		localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
		console.log("im here");
		render();
		isFormDisplayed = false;
	});
}

//this function is used whenever we want to display the cards again
function render() {
	const bookContainer = document.getElementById("book");
	const books = document.querySelectorAll(".card");

	books.forEach((book) => bookContainer.removeChild(book));
	display();
}

console.log(myLibrary);
let addBook = document.getElementById("new-book-btn");
addBook.addEventListener("click", addBookForm);
