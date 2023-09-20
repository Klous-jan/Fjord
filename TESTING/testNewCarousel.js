let carouselSectionTarget = null;
let containerArray = ["C_M", "truck", "SUV_C", "elec", "L_T"];
const parameterStates = {};
let selectedParameter = "";

function updateElements() {
	console.log("updateElements() loaded");
	const carouselInner = document.getElementById(`${selectedParameter}-container-outer`);
	const prevButton = document.getElementById(`${selectedParameter}-prev-slide`);
	const nextButton = document.getElementById(`${selectedParameter}-next-slide`);
	const items = document.querySelectorAll(`.${selectedParameter}-carousel-item-container`);
	const totalSlides = items.length;
	const totalOffSet1 = totalSlides - 1;
	const totalOffSet2 = totalSlides - 2;
	const oddEven = totalSlides % 2;
	const margin = 30;
	const itemWidth = items[0].offsetWidth;
	console.log("itemWidth: " + itemWidth); //delete
	const currentState = parameterStates[selectedParameter] || { currentIndex: 0 };
	let { currentIndex } = currentState; // Initialize currentIndex from the state
	let offSet2 = 2;
	let offSetEven = totalSlides - offSet2;

	function prevSlide() {
		if (currentIndex > 0) {
			currentIndex--;
			currentState.currentIndex = currentIndex; // Update currentIndex in the current state
			updateCarousel();
		}
	}

	function nextSlide() {
		const adjEvenIndex = (currentIndex + 1) * 2 + 2;
		const adjOddIndex = (currentIndex + 1) * 2 + 1;
		if (adjEvenIndex <= totalSlides || adjOddIndex <= totalSlides) {
			currentIndex++;
			currentState.currentIndex = currentIndex; // Update currentIndex in the current state
			updateCarousel();
			console.log(currentIndex);
			console.log("adjEvenIndex ---------------------%c{ " + adjEvenIndex, "color: green");
			console.log("adjOddIndex ----------------------%c{ " + adjOddIndex, "color: green");
			console.log("totalSlides ----------------------%c{ " + totalSlides, "color: green");
		}
	}

	function updateCarousel() {
		window.addEventListener("resize", function () {
			const windowWidth = window.innerWidth; // Get the current window width

			// You can use this value for any logic related to window width in your carousel.
			// For example, you can update the `newPosition` or perform any other actions based on the window width.
		});
		const adjEvenIndex = currentIndex * 2;
		const adjOddIndex = (currentIndex + 1) * 2;
		if (oddEven === 0) {
			if (adjEvenIndex == totalSlides) {
				const windowWidth = window.innerWidth;
				const newPosition = -currentIndex * (itemWidth * 2 + margin * 2) + itemWidth + margin;
				carouselInner.style.float = "none";
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				console.log("EVEN --- 1st --- adjEvenIndex == totalSlides");
				console.log("adjEvenIndex ---------------------{ " + adjEvenIndex);
				console.log("totalSlides ----------------------{ " + totalSlides);
				console.log("totalOffSet1 ----------------------{ " + totalOffSet1);
				console.log("currentIndex ---------------------{ " + currentIndex);
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
				console.log("Window Width:", windowWidth);
				// setTimeout(() => {
				// 	carouselInner.style.transform = `translateX(${newPosition}px)`;
				// }, 1000);
			} else if (adjEvenIndex == offSetEven) {
				const windowWidth = window.innerWidth;
				const newPosition = -currentIndex * (itemWidth * 2 + margin * 2) + itemWidth + margin;
				// carouselInner.style.transition = "transform 1s ease";
				carouselInner.style.float = "none";
				console.log("EVEN --- 2nd --- adjEvenIndex == offSetEven");
				console.log("adjEvenIndex ---------------------{ " + adjEvenIndex);
				console.log("totalSlides ----------------------{ " + totalSlides);
				console.log("totalOffSet1 ----------------------{ " + totalOffSet1);
				console.log("currentIndex ---------------------{ " + currentIndex);
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
				console.log("Window Width:", windowWidth);
				// setTimeout(() => {
				// 	carouselInner.style.transform = `translateX(${newPosition}px)`;
				// }, 1000);
			} else if (adjEvenIndex < totalSlides) {
				const windowWidth = window.innerWidth;
				const newPosition = -currentIndex * (itemWidth * 2 + margin * 2);
				// carouselInner.style.transition = "transform 1s ease";
				carouselInner.style.float = "none";
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				console.log("EVEN --- 3rd --- adjEvenIndex < totalSlides");
				console.log("itemWidth ------------------------{ " + itemWidth);
				console.log("adjEvenIndex ---------------------{ " + adjEvenIndex);
				console.log("totalSlides ----------------------{ " + totalSlides);
				console.log("totalOffSet1 ----------------------{ " + totalOffSet1);
				console.log("currentIndex ---------------------{ " + currentIndex);
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
				console.log("Window Width:", windowWidth);
				// setTimeout(() => {
				// 	carouselInner.style.transform = `translateX(${newPosition}px)`;
				// }, 1000);
			} else {
			}
		}
		if (oddEven === 1) {
			if (adjOddIndex == totalOffSet2) {
				const windowWidth = window.innerWidth;
				const newPosition = -currentIndex * (itemWidth + margin);
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				// carouselInner.style.transition = "none";
				console.log("Window Width:", windowWidth);
				console.log("ODD  --- 1st --- adjOddIndex == totalSlides");
				console.log("adjOddIndex ----------------------{ " + adjOddIndex);
				console.log("totalSlides ----------------------{ " + totalSlides);
				console.log("totalOffSet1 ----------------------{ " + totalOffSet1);
				console.log("currentIndex ---------------------{ " + currentIndex);
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
			} else if (adjOddIndex == totalOffSet1) {
				const windowWidth = window.innerWidth; // ADD IF adjOddIndex == totalOffSet1 - 1 ONLY MOVE 1 FRAME
				const newPosition = -currentIndex * (itemWidth * 2 + margin); // this will make the 2nd to last slide move 1 frame
				carouselInner.style.float = "right";
				// carouselInner.style.transform = `translateX(${newPosition}px)`; // do this same step for IF adjOddIndex == totalOffSet1 - 2 ONLY MOVE 1 FRAME
				// carouselInner.style.transition = "none";
				console.log("Window Width:", windowWidth);
				console.log("ODD  --- 1st --- adjOddIndex == totalSlides");
				console.log("adjOddIndex ----------------------{ " + adjOddIndex);
				console.log("totalSlides ----------------------{ " + totalSlides);
				console.log("totalOffSet1 ----------------------{ " + totalOffSet1);
				console.log("currentIndex ---------------------{ " + currentIndex);
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
			} else if (adjOddIndex < totalSlides) {
				const windowWidth = window.innerWidth;
				const newPosition = -currentIndex * (itemWidth * 2 + margin * 2);
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				// carouselInner.style.transition = "transform 1s ease";
				carouselInner.style.float = "none";
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				console.log("ODD  --- 3rd --- adjOddIndex < totalSlides");
				console.log("adjOddIndex ----------------------{ " + adjOddIndex);
				console.log("totalSlides ----------------------{ " + totalSlides);
				console.log("totalOffSet1 ----------------------{ " + totalOffSet1);
				console.log("currentIndex ---------------------{ " + currentIndex);
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
				console.log("Window Width:", windowWidth);
				// setTimeout(() => {
				// 	carouselInner.style.transform = `translateX(${newPosition}px)`;
				// }, 1000);
			} else {
			}
		}
	}

	prevButton.addEventListener("click", prevSlide);
	nextButton.addEventListener("click", nextSlide);
	parameterStates[selectedParameter] = currentState;
	updateCarousel();
}

function changedata(parameter) {
	let container = document.querySelector(".explore-all-vehicles-carousel-container");
	for (let i = 0; i < containerArray.length; i++) {
		let currentID = containerArray[i];
		let currentElement = container.querySelector(`#${currentID}`);
		if (parameter === i) {
			currentElement.style.display = "block";
			selectedParameter = `${currentID}`;
			console.log(currentID);
		} else {
			currentElement.style.display = "none";
		}
	}
	updateElements();
}

changedata(0);

function widthCheck() {
	let windowWidth; // Declare windowWidth outside the event listener

	window.addEventListener("resize", function () {
		windowWidth = window.innerWidth; // Update the windowWidth variable
		console.log("Window width has changed:", windowWidth);
	});

	// Initially log the window width
	windowWidth = window.innerWidth;
	console.log("Initial window width:", windowWidth);
}

// Call the widthCheck function to start monitoring window width
widthCheck();
