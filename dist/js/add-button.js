const button = document.getElementById("add-button");
const displayButtons = document.getElementsByClassName("select-buttons")[0];

let open = false;
button.addEventListener("click", () => {

    console.log("button clicked and open was " + open);

    if (!open) {
        button.classList.add("active");
        displayButtons.classList.add("active");
        displayButtons.classList.remove("closing");
    } else {
        displayButtons.classList.add("closing");
        button.classList.remove("active");

        setTimeout(() => {
            displayButtons.classList.remove("closing");
            displayButtons.classList.remove("active");
        }, 400);
    }

    open = !open;

    console.log("open is now " + open);

});