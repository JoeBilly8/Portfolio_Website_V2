const contactBtn = document.querySelector(".contact-button");
const workBtn = document.querySelector(".work-button");
const aboutBtn = document.querySelector(".about-button");

const contactText = document.querySelector(".contact-text");
const workText = document.querySelector(".work-text");
const aboutText = document.querySelector(".about-text");

const allTexts = [contactText, workText, aboutText];

const plusButton = document.getElementById("add-button");

// Helper to activate the right one
function showText(el) {
    if(!(plusButton.classList.contains("opening"))) {
        allTexts.forEach(text => text.classList.remove("active"));
        el.classList.add("active");
    }
}

// Add hover listeners
contactBtn.addEventListener("mouseenter", () => showText(contactText));
workBtn.addEventListener("mouseenter", () => showText(workText));
aboutBtn.addEventListener("mouseenter", () => showText(aboutText));

// Optional: Hide text when leaving all buttons
const buttonsContainer = document.querySelector(".select-buttons");
buttonsContainer.addEventListener("mouseleave", () => {
  allTexts.forEach(t => t.classList.remove("active"));
});