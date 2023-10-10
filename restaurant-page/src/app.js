const app = (() => {
	const makeNav = () => {
		const nav = document.createElement("div");
		nav.id = "nav-bar";
		content.appendChild(nav);

		const leftNav = document.createElement("div");
		leftNav.id = "left-nav";
		nav.appendChild(leftNav);

		const logo = document.createElement("img");
		logo.src = "assests/clipart1382579.png";
		logo.id = "ant-img";
		leftNav.appendChild(logo);

		const rightNav = document.createElement("div");
		rightNav.id = "right-nav";
		nav.appendChild(rightNav);

		const about = document.createElement("button");
		about.classList.add("nav-button");
		about.textContent = "About";
		rightNav.appendChild(about);

		const menu = document.createElement("button");
		menu.classList.add("nav-button");
		menu.textContent = "Menu";
		rightNav.appendChild(menu);

		const contact = document.createElement("button");
		contact.classList.add("nav-button");
		contact.textContent = "Contact";
		rightNav.appendChild(contact);
	};

	const clear = () => {
		while (content.lastChild) content.removeChild(content.lastChild);
	};
	return { clear, makeNav };
})();

export { app };
