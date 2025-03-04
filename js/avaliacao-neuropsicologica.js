"use strict";

document.addEventListener("DOMContentLoaded", () => meta.onLoad());

const meta = {
	onLoad() {
		this.createAll();

		eventListeners.createInitial();
	},
	createAll() {
		const thisPage = "avaliacaoNeuropsicologica";

		siteHeader.createAll();
		sectionMethods.createMainContainer();
		sidebarMenu.createAll();

		buildPageTitle.createAll(thisPage);
		buildQuote.createAll(thisPage);
		buildSpecialButtons.createAll(thisPage, "ageRange");
		buildFaq.createAll(thisPage);
		buildCarousel.createAll(thisPage, "step");
		buildFaq.createAll(thisPage, true, "second");

		siteFooter.createAll();
	},
};
