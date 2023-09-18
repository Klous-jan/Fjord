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
// ================================
// mute video toggle
// ================================
const audio = document.getElementById("inside");

function muteToggle() {
	if (audio.muted === false) {
		audio.muted = true;
	} else if (audio.muted === true) {
		audio.muted = false;
	}
}
// ================================
// change the svg icon depending on if it is muted or not muted
// ================================
var svgID = document.getElementById("mute-icon-svg-swap");
var soundOFF = `<path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>`;
var soundON = `<path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path>
				<path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path>
				<path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"></path>`;

svgID.addEventListener("click", () => {
	if (svgID.innerHTML === soundON) {
		svgID.innerHTML = soundOFF;
		// "else if" statement is not needed here, to toggle
		// the content back and forth you just need an "else" statement
	} else {
		svgID.innerHTML = soundON;
	}
});
// ================================
// toggle on and off play() / pause()
// ================================
var video = document.getElementById("inside");
var isPlaying = false;

var svgElement = document.getElementById("play-icon");

function togglePlayPause() {
	if (isPlaying) {
		video.pause();
		svgID.innerHTML = soundOFF;
		svgElement.removeAttribute("hidden");
	} else {
		video.muted = false; // Unmute the video
		video.play();
		svgID.innerHTML = soundON;
		svgElement.setAttribute("hidden", true);
		svgElement.style.opacity = "0.2";
	}
	isPlaying = !isPlaying;
}

video.addEventListener("ended", () => {
	isPlaying = false;
	svgElement.removeAttribute("hidden");
	svgElement.style.opacity = ".4";
});

// ================================
// show play icon if video is paused
// hide play icon is video is playing
// ================================
