// --------GOAL:--------
// GENERAL CAROUSEL:
// 		carousel that has x amount of slides
// 		there is always 3 slides on the screen
// 		the carousel width is not affected by the width of the screen
//
// SLIDES:
//		The slides are evenly distributed across the screen:
// 				 ____________________________________________
// 				|                                            |
// 				|   __________    __________    __________   |   __________    __________
// 				|  | SLIDE  1 |  | SLIDE  2 |  | SLIDE  3 |  |  / SLIDE  4 /  / SLIDE  5 /
// 				|  |   600px  |  |   600px  |  |   600px  |  |  /   600px  /  /   600px  /
// 				|  |__________|  |__________|  |__________|  |  /__________/  /__________/
// 				|26px         26px          26px         26px|26px
// 				|                                            |
// 				|____________________________________________|
//
// 		When you scroll the slides go off screen and cycle through till the end
// 		The slides move 2* slides at a time
// 				 ____________________________________________
// 				|                                            |
// __________   |   __________    __________    __________   |   __________    __________
/// SLIDE  2 /  |  | SLIDE  3 |  | SLIDE  4 |  | SLIDE  5 |  |  / SLIDE  6 /  / SLIDE  7 /
///   600px  /  |  |   600px  |  |   600px  |  |   600px  |  |  /   600px  /  /   600px  /
///__________/  |  |__________|  |__________|  |__________|  |  /__________/  /__________/
// 			26px|26px         26px          26px         26px|26px
// 				|                                            |
// 				|____________________________________________|
//
//		The currentIndex Starts with a value of [0]. Each time the slide
//			performs transformX[Next Slide] (or moves right) the currentIndex
//			is increased by 2* because it moved 2 slides. Each time the slide
//			performs transformX[Prev Slide] (or moves left) the currentIndex
//			is decreased by 2* because it moved 2 slides.
//
//	 #--If the total length of the slides == 8 total slides
//	 |		const items = document.querySelectorAll(".carousel-item-container");
//	 |  	|----------------Each slide container class ="carousel-item-container"-|
//	 |  	var totalSlides = items.length;
//	 |  	|----------------.length gives to total number of slides---------------|
//	 #--Then the maximum value of currentIndex == 6, or 3 [Next Slide] presses
//		 Q: Why value of currentIndex == 6?
// 		 A: currentIndex starts at 0, the screen displays 3 slides:
// 			|  [Slide 1]  [Slide 2]  [Slide 3]  ||  /Slide 4/  /Slide 5/
// 			When you press [Next Slide] you will now see:
// 			|  [Slide 3]  [Slide 4]  [Slide 5]  ||  /Slide 6/  /Slide 7/
//			The currentIndex has been increased to by 2* and is now == 3.
// 			|  [Slide 5]  [Slide 6]  [Slide 7]  ||  /Slide 8/
//			The currentIndex has been increased to by 2* and is now == 5
//			|  [Slide 7]  [Slide 8]             ||
//			The currentIndex has been increased to by 2* and is now == 7
//		This currently produces the problem that when your slides == an EVEN number
// 			and you proceed to the final slide, it is only displaying 2 slides because
// 			transformX moved 2* slides from:
//			[Slide 5]  [Slide 6]  [Slide 7]  >>>   [Slide 7]  [Slide 8]  _________
// 		On the other hand if the total length of the slides == 7 total slides then
//			your slides == an ODD number and you proceed to the final slide, it will
// 			display 0 slides because transformX moved 2* slides from:
// 			|  [Slide 5]  [Slide 6]  [Slide 7]  |
//			The currentIndex has been increased to by 2* and is now == 5
//			|  _________  _________  _________  |
//			The currentIndex has been increased to by 2* and is now == 7
//
//		To fix this:
//			var currentIndex = 0;
//			const items = document.querySelectorAll(".carousel-item-container");
//			const totalSlides = items.length;
//			const itemWidth = items[0].offsetWidth;
//			var OffSet = 3;
//			var OffSetTotal = totalSlides - OffSet;
//
//
//
//			/* if: totalSlides % 2 == 0 then the number of slides == an EVEN number */
//			/* if: totalSlides % 2 == 1 then the number of slides == an ODD number */
//			const oddEven = totalSlides % 2;
// 	[Even]  if (oddEven == 0) {
//				/* If totalSlides == 8 && OffSetTotal == 5 [8-3]*/
//				/* Meaning: */
//				/* If currentIndex == 5 && OffSetTotal == 5 [8-3]*/
//	[One Less]	if (currentIndex == OffSetTotal) {
// 						const moveOneSlide = -currentIndex * (itemWidth * 1.6955 + 26);
//						carouselInner.style.transform = `translateX(${moveOneSlide}px)`;
//					}
//				}
//	[Equal]		if (currentIndex == totalSlides) {
//					/* If currentIndex == 8 && totalSlides == 8; then do nothing */
//				}
//  [Less Than]	if (currentIndex < totalSlides) {
//					for (var currentIndex = 1; currentIndex < totalSlides; currentIndex += 2) {
// 						const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2);
//						carouselInner.style.transform = `translateX(${newPosition}px)`;
//					}
//				}
// 			}
// 	[ODD]  if (oddEven == 1) {
//	[Equal]		if (currentIndex == totalSlides) {
//					/* If currentIndex == 8 && totalSlides == 8; then do nothing */
//				}
//  [Less Than]	if (currentIndex < totalSlides) {
//					for (var currentIndex = 1; currentIndex < totalSlides; currentIndex += 2) {
// 						const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2);
//						carouselInner.style.transform = `translateX(${newPosition}px)`;
//					}
//				}
// 			}
//

// // =======================================
// // =======================================
// // =======================================

const carouselInner = document.querySelector(".container-outer");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item-container");
const totalSlides = items.length;
const oddEven = totalSlides % 2;
const itemWidth = items[0].offsetWidth;
var offSet1 = 0;
var offSet2 = 2;
var offSetOdd = totalSlides - offSet1;
var offSetEven = totalSlides - offSet2;

function prevSlide() {
	const adjEvenIndex = currentIndex * 2 - 1;
	const adjOddIndex = currentIndex * 2;
	if (currentIndex > 0) {
		currentIndex--;
		updateCarousel();
		console.log("adjEvenIndex ---{" + adjEvenIndex);
		console.log("adjOddIndex ---{" + adjOddIndex);
	}
}

// Function to move to the next slide
function nextSlide() {
	const adjEvenIndex = (currentIndex + 1) * 2 + 2;
	const adjOddIndex = (currentIndex + 1) * 2 + 1;
	if (adjEvenIndex < totalSlides || adjOddIndex < totalSlides) {
		currentIndex++;
		updateCarousel();
		console.log("adjEvenIndex ---{ %c" + adjEvenIndex, "color: darkslategrey;");
		console.log("adjOddIndex ----{ %c" + adjOddIndex, "color: darkslategrey;");
		console.log("offSetOdd ------{ %c" + offSetOdd, "color: darkslategrey;");
		console.log("offSetEven -----{ %c" + offSetEven, "color: darkslategrey;");
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
			console.log("EVEN --- 1st --- adjEvenIndex == totalSlides");
			console.log("adjEvenIndex ---------------------{ " + adjEvenIndex);
			console.log("currentIndex ---------------------{ " + currentIndex);
			console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
		} else if (adjEvenIndex == offSetEven) {
			const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2) + itemWidth + 26;
			carouselInner.style.transform = `translateX(${newPosition}px)`;
			console.log("EVEN --- 2nd --- adjEvenIndex == offSetEven");
			console.log("adjEvenIndex ---------------------{ " + adjEvenIndex);
			console.log("currentIndex ---------------------{ " + currentIndex);
			console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
		} else if (adjEvenIndex < totalSlides) {
			const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2);
			carouselInner.style.transform = `translateX(${newPosition}px)`;
			console.log("EVEN --- 3rd --- adjEvenIndex < totalSlides");
			console.log("itemWidth ------------------------{ " + itemWidth);
			console.log("adjEvenIndex ---------------------{ " + adjEvenIndex);
			console.log("currentIndex ---------------------{ " + currentIndex);
			console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
		} else {
		}
	}
	// -------------------------------------------ODD-------------------------------------------
	if (oddEven === 1) {
		if ((currentIndex == totalSlides - 1) / 2) {
			/* If currentIndex == 8 && totalSlides == 8; then do nothing */
			console.log("ODD  --- 1st --- adjOddIndex == totalSlides");
			console.log("adjOddIndex ----------------------{ " + adjOddIndex);
			console.log("currentIndex ---------------------{ " + currentIndex);
			console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
		} else if (adjOddIndex == offSetOdd) {
			const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2) + itemWidth + 26;
			carouselInner.style.transform = `translateX(${newPosition}px)`;
			console.log("EVEN --- 2nd --- adjEvenIndex == offSetOdd");
			console.log("adjOddIndex ----------------------{ " + adjEvenIndex);
			console.log("currentIndex ---------------------{ " + currentIndex);
			console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
		} else if (adjOddIndex < totalSlides) {
			const newPosition = -currentIndex * (itemWidth * 2 + 26 * 2);
			carouselInner.style.transform = `translateX(${newPosition}px)`;
			console.log("ODD  --- 3rd --- adjOddIndex < totalSlides");
			console.log("adjOddIndex ----------------------{ " + adjOddIndex);
			console.log("currentIndex ---------------------{ " + currentIndex);
			console.log("carouselInner.style.transform ----{ %c" + carouselInner.style.transform, "color: #00ff00;");
		} else {
		}
	}
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

updateCarousel();
