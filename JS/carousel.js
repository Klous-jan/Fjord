let carouselSectionTarget = null;
let containerArray = ["cars_Minivans", "trucks", "SUVs_Crossovers", "electric", "lil_tikes"];
const parameterStates = {};

function updateElements() {
	const carouselInner = document.getElementById(`${selectedParameter}-container-outer`);
	const prevButton = document.getElementById(`${selectedParameter}-prev-slide`);
	const nextButton = document.getElementById(`${selectedParameter}-next-slide`);
	const items = document.querySelectorAll(`.${selectedParameter}-carousel-item-container`);
	const margin = 30;
	const itemWidth = items[0].offsetWidth;

	const currentState = parameterStates[selectedParameter] || { currentIndex: 0 };
	let { currentIndex } = currentState; // Initialize currentIndex from the state
	const totalSlides = items.length;
	const oddEven = totalSlides % 2;
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
		if (adjEvenIndex < totalSlides || adjOddIndex < totalSlides) {
			currentIndex++;
			currentState.currentIndex = currentIndex; // Update currentIndex in the current state
			updateCarousel();
		}
	}

	function updateCarousel() {
		const adjEvenIndex = currentIndex * 2;
		const adjOddIndex = (currentIndex + 1) * 2;
		if (oddEven === 0) {
			if (adjEvenIndex == totalSlides) {
				// Handle the last even index
				const newPosition = -currentIndex * (itemWidth * 2 + margin * 2) + itemWidth + margin;
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
			} else if (adjEvenIndex == offSetEven) {
				// Handle the offset even index
				const newPosition = -currentIndex * (itemWidth * 2 + margin * 2) + itemWidth + margin;
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
			} else if (adjEvenIndex < totalSlides) {
				// Handle other even indices
				const newPosition = -currentIndex * (itemWidth * 2 + margin * 2);
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
			} else {
			}
		}
		if (oddEven === 1) {
			if (adjOddIndex == totalSlides) {
				// Handle the last odd index
				const newPosition = -currentIndex * (itemWidth * 2 + margin * 2) + itemWidth + margin;
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				carouselInner.style.justifyContent = "flex-end";
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
			} else if (adjOddIndex < totalSlides) {
				// Handle other odd indices
				const newPosition = -currentIndex * (itemWidth * 2 + margin * 2);
				carouselInner.style.transform = `translateX(${newPosition}px)`;
				console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
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
		currentID = containerArray[i];
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
