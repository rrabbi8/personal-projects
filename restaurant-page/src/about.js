const about = () => {
	const aboutDiv = document.createElement("div");
	aboutDiv.id = "about";
	content.appendChild(aboutDiv);

	const aboutHeader = document.createElement("p");
	aboutHeader.id = "about-header";
	aboutHeader.textContent = "About";
	aboutDiv.appendChild(aboutHeader);

	const aboutText = document.createElement("p");
	aboutText.id = "about-text";
	aboutText.textContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, leo non maximus auctor, arcu metus pellentesque lorem, in auctor dui enim sed ex. Integer rhoncus massa vitae arcu tempor aliquam. Nam sagittis, lorem at elementum pulvinar, lacus sem ultrices risus, vel eleifend dolor libero eu orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed porta sapien. Nullam cursus hendrerit nulla ac viverra. Proin feugiat porttitor tortor, non venenatis erat rutrum dignissim. Aliquam erat volutpat. Duis imperdiet elementum nunc, quis accumsan ligula commodo eu. Nunc non commodo odio, et lobortis purus. Ut nisi elit, sagittis nec justo et, cursus rutrum ante. Suspendisse tristique enim ut ante finibus malesuada. Nunc at lorem urna. Sed nec dui mi. Integer sit amet libero id ex dignissim bibendum nec nec elit.";
	aboutDiv.appendChild(aboutText);
};

export { about };
