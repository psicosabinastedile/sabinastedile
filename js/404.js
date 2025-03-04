"use strict";

"use strict";

document.addEventListener("DOMContentLoaded", () => meta.onLoad());

const meta = {
	onLoad() {
		this.createAll();

		eventListeners.createInitial();
	},
	createAll() {
		const thisPage = "404";

		siteHeader.createAll();
		sectionMethods.createMainContainer();
		sidebarMenu.createAll();

		buildPageTitle.createAll(thisPage);
		buildButton.addButtonToTitle();

		siteFooter.createAll();
	},
};

const buildButton = {
	addButtonToTitle() {
		const section = document.getElementById("pageTitle");
		const [text, link] = textLibrary[404].button;
		const button = build.button(text, link);
		section.append(button);
	},
};
