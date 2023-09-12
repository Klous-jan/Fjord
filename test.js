const carouselInner = document.querySelector(".container-outer");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item-container");
const itemWidth = items[0].offsetWidth; // Assuming all items have the same width

// Function to move to the previous slide
function prevSlide() {
	if (currentIndex > 0) {
		currentIndex--;
		updateCarousel();
	}
}

// Function to move to the next slide
function nextSlide() {
	const totalItems = items.length;
	if (currentIndex < totalItems - 5) {
		currentIndex++;
		updateCarousel();
	}
}

// Update the carousel based on the currentIndex
function updateCarousel() {
	const newPosition = -currentIndex * (itemWidth * 2 + 52);
	carouselInner.style.transform = `translateX(${newPosition}px)`;
}

// Add click event listeners to the previous and next buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Initial positioning of the carousel
updateCarousel();
