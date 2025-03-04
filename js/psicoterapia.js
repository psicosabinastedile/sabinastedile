"use strict";

document.addEventListener("DOMContentLoaded", () => meta.onLoad());

const meta = {
	onLoad() {
		this.createAll();

		eventListeners.createInitial();
	},
	createAll() {
		const thisPage = "psicoterapia";

		siteHeader.createAll();
		sectionMethods.createMainContainer();
		sidebarMenu.createAll();

		buildPageTitle.createAll(thisPage);
		buildQuote.createAll(thisPage);
		buildFaq.createAll(thisPage, true);

		siteFooter.createAll();
	},
};
