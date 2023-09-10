// show && hide search-input
// form on button click
const btn = document.getElementById("search-icon");

btn.addEventListener("click", () => {
	const form = document.getElementById("search-input");

	if (form.style.display === "block") {
		// 👇️ this HIDES the form
		form.style.display = "none";
		form.style.right = "40px";
		form.style.top = "-4px";
		form.style.position = "absolute";
		btn.style.zIndex = "1";
	} else {
		// 👇️ this SHOWS the form
		form.style.display = "block";
		form.style.right = "40px";
		form.style.top = "-4px";
		form.style.position = "absolute";
		btn.style.zIndex = "1";
	}
});

// dont close dropdown on click

var elements = document.getElementsByClassName("no-close-click");
for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", function (event) {
		event.stopPropagation();
	});
}

// nested dropdowns
const dropdownBtns = document.querySelectorAll(".dropdown-button");
const dropdownItem = document.querySelectorAll(".dropdown-item");
const subDropdown = document.querySelectorAll(".sub-dropdown");

const handleClick = (event) => {
	const targetBtn = event.target;
	const ariaExpanded = targetBtn.getAttribute("aria-expanded");
	const ariaControls = targetBtn.getAttribute("aria-controls");
	const controlledAria = document.getElementById(ariaControls);
	if (ariaExpanded === "false") {
		controlledAria.classList.add("active");
		controlledAria.setAttribute("aria-hidden", "false");
		targetBtn.setAttribute("aria-expanded", "true");
	} else if (ariaExpanded === "true") {
		controlledAria.classList.remove("active");
		controlledAria.setAttribute("aria-hidden", "true");
		targetBtn.setAttribute("aria-expanded", "false");
	}
};

const handleLeave = () => {
	dropdownBtns.forEach((button) => button.setAttribute("aria-expanded", "false"));
	subDropdown.forEach((ul) => {
		ul.classList.remove("active");
		ul.setAttribute("aria-hidden", "true");
	});
};

dropdownItem.forEach((item) => item.addEventListener("mouseleave", handleLeave));
dropdownBtns.forEach((button) => button.addEventListener("click", handleClick));

// explore all vehicles list:
// Only show the content of
// the button that is clicked
function changedata(parameter) {
	if (parameter === 0) {
		document.getElementById("myorders").style.display = "block";
	}
	if (parameter !== 0) {
		document.getElementById("myorders").style.display = "none";
	}
	if (parameter === 1) {
		document.getElementById("myproducts").style.display = "block";
	}
	if (parameter !== 1) {
		document.getElementById("myproducts").style.display = "none";
	}
	if (parameter === 2) {
		document.getElementById("mysupplier").style.display = "block";
	}
	if (parameter !== 2) {
		document.getElementById("mysupplier").style.display = "none";
	}
}
