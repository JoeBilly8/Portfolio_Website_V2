const button = document.getElementById("add-button");
const displayButtons = document.getElementsByClassName("select-buttons")[0];

button.addEventListener("click", () => {
    button.classList.toggle("active");
    displayButtons.classList.toggle("active");
});