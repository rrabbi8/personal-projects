const contact = () => {
	const content = document.querySelector("#content");
	const contactDiv = document.createElement("div");
	const contactHeader = document.createElement("h1");
	const contactP = document.createElement("p");

	contactDiv.id = "contact-div";
	contactHeader.id = "contact-header";
	contactP.id = "contact-para";

	contactHeader.textContent = "Questions?";
	contactP.textContent =
		"Unfortunately this cafe does not exist so there is no way to get in contact.";

	content.appendChild(contactDiv);
	contactDiv.appendChild(contactHeader);
	contactDiv.appendChild(contactP);
};

export { contact };
