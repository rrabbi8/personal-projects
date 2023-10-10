import { app } from "./app";
import { contact } from "./contact";
import { menu } from "./menu";
import { about } from "./about";

const content = document.querySelector("content");

app.makeNav();
about();

const changeTab = (e) => {
	app.clear();
	app.makeNav();
	listeners();
	switch (e.target.textContent) {
		case "About":
			about();
			break;
		case "Menu":
			menu();
			break;
		case "Contact":
			contact();
			break;
	}
};

const listeners = () => {
	const btns = document.querySelectorAll("button");

	btns.forEach((button) => {
		button.addEventListener("click", changeTab);
	});
};

listeners();
