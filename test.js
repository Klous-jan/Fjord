const containerArray = ["cars_Minivans-container-outer", "trucks-container-outer", "SUVs_Crossovers-container-outer", "electric-container-outer", "lil_tikes-container-outer"];
var selector = `.${Array[0]}`;

// explore all vehicles list:
// Only show the content of
// the button that is clicked
function changedata(parameter) {
	const carouselInner = document.querySelector(selector);
	if (parameter === 0) {
		document.getElementById("cars_Minivans").style.display = "block";
		console.log(containerArray[0]);
		selector = `.${Array[0]}`;
		console.log("123" + carouselInner);
	}
	if (parameter !== 0) {
		document.getElementById("cars_Minivans").style.display = "none";
	}
	if (parameter === 1) {
		document.getElementById("trucks").style.display = "block";
		console.log(containerArray[1]);
		selector = `.${Array[1]}`;
		console.log("123" + carouselInner);
	}
	if (parameter !== 1) {
		document.getElementById("trucks").style.display = "none";
	}
	if (parameter === 2) {
		document.getElementById("SUVs_Crossovers").style.display = "block";
		console.log(containerArray[2]);
		selector = `.${Array[2]}`;
		console.log("123" + carouselInner);
	}
	if (parameter !== 2) {
		document.getElementById("SUVs_Crossovers").style.display = "none";
	}
	if (parameter === 3) {
		document.getElementById("electric").style.display = "block";
		console.log(containerArray[3]);
		selector = `.${Array[3]}`;
		console.log("123" + carouselInner);
	}
	if (parameter !== 3) {
		document.getElementById("electric").style.display = "none";
	}
	if (parameter === 4) {
		document.getElementById("lil_tikes").style.display = "block";
		console.log(containerArray[4]);
		selector = `.${Array[4]}`;
		console.log("123" + carouselInner);
	}
	if (parameter !== 4) {
		document.getElementById("lil_tikes").style.display = "none";
	}
	console.log(carouselInner);
}
// const carouselInner = document.querySelector("currentParam");

//==========================================================================================

const cars_Minivans_carouselInner = document.querySelector(".cars_Minivans-container-outer");
const trucks_carouselInner = document.querySelector(".trucks-container-outer");
const SUVs_Crossovers_carouselInner = document.querySelector(".SUVs_Crossovers-container-outer");
const electric_carouselInner = document.querySelector(".electric-container-outer");
const lil_tikes_carouselInner = document.querySelector(".lil_tikes-container-outer");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");

let currentIndex = 0;
const items = document.querySelectorAll(".cars_Minivans-carousel-item-container");
const totalSlides = items.length;
const oddEven = totalSlides % 2;
const itemWidth = items[0].offsetWidth;
var offSet1 = 0;
var offSet2 = 2;
var offSetOdd = totalSlides - offSet1;
var offSetEven = totalSlides - offSet2;

function prevSlide() {
	if (currentIndex > 0) {
		currentIndex--;
		updateCarousel();
	}
}

// Function to move to the next slide
function nextSlide() {
	const adjEvenIndex = (currentIndex + 1) * 2 + 2;
	const adjOddIndex = (currentIndex + 1) * 2 + 1;
	if (adjEvenIndex < totalSlides || adjOddIndex < totalSlides) {
		currentIndex++;
		updateCarousel();
	}
}

// Update the carousel based on the currentIndex
function updateCarousel() {
	const adjEvenIndex = currentIndex * 2;
	const adjOddIndex = (currentIndex + 1) * 2;
	// -------------------------------------------EVEN------------------------------------------
	if (oddEven === 0) {
		if (adjEvenIndex == totalSlides) {
			/* If currentIndex == 8 && totalSlides == 8; then do nothing */
		} else if (adjEvenIndex == offSetEven) {
			const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2) + itemWidth + 26;
			cars_Minivans_carouselInner.style.transform = `translateX(${newPosition}px)`;
		} else if (adjEvenIndex < totalSlides) {
			const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2);
			cars_Minivans_carouselInner.style.transform = `translateX(${newPosition}px)`;
		} else {
		}
	}
	// -------------------------------------------ODD-------------------------------------------
	if (oddEven === 1) {
		if ((currentIndex == totalSlides - 1) / 2) {
			/* If currentIndex == 8 && totalSlides == 8; then do nothing */
		} else if (adjOddIndex == totalSlides) {
			const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2) + itemWidth + 26;
			cars_Minivans_carouselInner.style.transform = `translateX(${newPosition}px)`;
		} else if (adjOddIndex < totalSlides) {
			const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2);
			cars_Minivans_carouselInner.style.transform = `translateX(${newPosition}px)`;
		} else {
		}
	}
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

updateCarousel();
