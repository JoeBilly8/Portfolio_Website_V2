const button = document.getElementById("add-button");
const displayButtons = document.getElementsByClassName("select-buttons")[0];

let open = false;
button.addEventListener("click", () => {

    if (!open) {

        button.classList.add("options-disabled");
        button.classList.add("active");
        displayButtons.classList.add("active");
        displayButtons.classList.remove("closing");

        // To prevent selection text when opening the buttons
        setTimeout(() => {
            button.classList.remove("options-disabled");
            displayButtons.classList.remove("link-disabled");
        }, 400);

    } else {
        displayButtons.classList.add("closing");
        button.classList.remove("active");
        button.classList.add("options-disabled");
        displayButtons.classList.add("link-disabled");

        setTimeout(() => {
            displayButtons.classList.remove("closing");
            displayButtons.classList.remove("active");
        }, 400);
    }

    open = !open;

});