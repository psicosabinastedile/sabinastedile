"use strict";

document.addEventListener("DOMContentLoaded", () => meta.onLoad());

const meta = {
	onLoad() {
		this.createAll();

		eventListeners.createInitial();
	},
	createAll() {
		const thisPage = "sobreMim";

		siteHeader.createAll();
		sectionMethods.createMainContainer();
		sidebarMenu.createAll();

		greetings.createAll();
		buildQuote.createAll(thisPage, "first");
		buildTimeline.createAll(thisPage, "first");
		buildTimeline.createAll(thisPage, "second", true);
		today.createAll();

		siteFooter.createAll();
	},
};

const greetings = {
	createAll() {
		this.createContainer();
		this.createTextContent();
	},
	createContainer() {
		const container = sectionMethods.createSectionContainer("greetings");
		container.classList.add("aboutMeGreetings");
	},
	createTextContent() {
		const section = document.getElementById("greetings");
		const textObject = textLibrary.sobreMim.greetings;

		buildImage();
		buildHeader();

		function buildImage() {
			const container = document.createElement("div");
			container.classList.add("polkaDotsPattern");
			const source = imageLibrary.sobreMim.greetings;
			const img = build.img(source);

			container.append(img);
			section.append(container);
		}
		function buildHeader() {
			const container = document.createElement("div");
			const preH2 = build.h4(textObject.preHeader);
			const h2 = build.h2(textObject.header);

			container.append(preH2, h2);
			section.append(container);
		}
	},
};

const today = {
	createAll() {
		this.createContainer();
		this.createHeader();
		this.createContent();
	},
	createContainer() {
		const section = sectionMethods.createSectionContainer("today");
		section.classList.add("today");
	},
	createHeader() {
		const section = document.getElementById("today");
		const h2 = build.h2(textLibrary.sobreMim.today.header);
		section.append(h2);
	},
	createContent() {
		const section = document.getElementById("today");
		const container = document.createElement("div");
		section.append(container);

		buildLeftDiv();
		buildRightDiv();

		function buildLeftDiv() {
			const leftContainer = document.createElement("div");
			leftContainer.classList.add("todayLeft");
			container.append(leftContainer);

			const imageObject = imageLibrary.sobreMim.today;

			const topImageContainer = document.createElement("div");
			const bottomImagesContainer = document.createElement("div");

			topImageContainer.append(build.img(imageObject[0]));
			bottomImagesContainer.append(build.img(imageObject[1]), build.img(imageObject[2]));
			leftContainer.append(topImageContainer, bottomImagesContainer);
		}
		function buildRightDiv() {
			const rightContainer = document.createElement("div");
			rightContainer.classList.add("todayRight");
			container.append(rightContainer);

			const textObject = textLibrary.sobreMim.today.content;
			const frag = sectionMethods.createContent(textObject);
			rightContainer.append(frag);
		}
	},
};
